using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using MovieApi.Application.Features.CQRSDesingPattern.Handlers.CategoryHandlers;
using MovieApi.Application.Features.CQRSDesingPattern.Handlers.MovieHandlers;
using MovieApi.Application.Features.CQRSDesingPattern.Handlers.MovieHandlers.FavoriteHandlers;
using MovieApi.Application.Features.CQRSDesingPattern.Handlers.UserHandlers;
using MovieApi.Application.Features.MediatorDesingPattern.Handlers.TagHandlers;
using MovieApi.Application.Interfaces;
using MovieApi.Application.Services;
using MovieApi.Persistence.Context;
using MovieApi.Persistence.Identity;
using System.Reflection;
using System.Text;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddDbContext<MovieContext>();

// Application services
builder.Services.AddScoped<IJwtService, JwtService>();

// Handlers (mevcut kayýtlarýný korudum)
builder.Services.AddScoped<GetCategoryQueryHandler>();
builder.Services.AddScoped<GetCategoryByIdQueryHandler>();
builder.Services.AddScoped<CreateCategoryCommandHandler>();
builder.Services.AddScoped<UpdateCategoryCommandHandler>();
builder.Services.AddScoped<RemoveCategoryCommandHandler>();

builder.Services.AddScoped<GetMovieQueryHandler>();
builder.Services.AddScoped<GetMovieByIdQueryHandler>();
builder.Services.AddScoped<CreateMovieCommandHandler>();
builder.Services.AddScoped<UpdateMovieCommandHandler>();
builder.Services.AddScoped<RemoveMovieCommandHandler>();
builder.Services.AddScoped<AddFavoriteHandler>();
builder.Services.AddScoped<RemoveFavoriteHandler>();
builder.Services.AddScoped<UserLoginCommandHandler>();
builder.Services.AddScoped<GetFavoritesByUserIdQueryHandler>();


builder.Services.AddScoped<CreateUserRegisterHandler>();
builder.Services.AddScoped<GetUserWithTokenHandler>();
builder.Services.AddScoped<UpdateUserHandler>();
builder.Services.AddScoped<UpdateUserPasswordHandler>();

// Identity
builder.Services.AddIdentity<AppUser, AppRole>()
    .AddEntityFrameworkStores<MovieContext>();

// MediatR
builder.Services.AddMediatR(cfg => cfg.RegisterServicesFromAssembly(typeof(GetTagQueryHandler).Assembly));

// JWT Authentication setup
var jwtKey = builder.Configuration["Jwt:Key"];
var jwtIssuer = builder.Configuration["Jwt:Issuer"];
var jwtAudience = builder.Configuration["Jwt:Audience"];

var signingKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwtKey ?? ""));

builder.Services.AddAuthentication(options =>
{
    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
})
.AddJwtBearer(options =>
{
    options.RequireHttpsMetadata = true;
    options.SaveToken = true;
    options.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateIssuer = true,
        ValidateAudience = true,
        ValidateLifetime = true,
        ValidateIssuerSigningKey = true,
        ValidIssuer = jwtIssuer,
        ValidAudience = jwtAudience,
        IssuerSigningKey = signingKey,
        ClockSkew = TimeSpan.Zero // token zaman toleransýný 0 yap (isteðe baðlý)
    };

    options.Events = new JwtBearerEvents
    {
        OnAuthenticationFailed = ctx =>
        {
            // Geliþtirme ortamýnda hata mesajlarýný console'a yazmak faydalý olur
            Console.WriteLine("JWT authentication failed: " + ctx.Exception?.Message);
            return Task.CompletedTask;
        },
        OnTokenValidated = ctx =>
        {
            // opsiyonel: ekstra kontroller (ör. user aktif mi?) yapýlabilir
            return Task.CompletedTask;
        }
    };
});

// Authorization (policy'ler eklemek istersen burada yap)
builder.Services.AddAuthorization();

// CORS (istersen daha kýsýtlayýcý hale getir)
builder.Services.AddCors();

// Controllers
builder.Services.AddControllers();

// Swagger - JWT desteði ekle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(x =>
{
    x.SwaggerDoc("v1", new() { Title = "MovieApi", Version = "v1" });

    // JWT auth in Swagger UI
    var securityScheme = new OpenApiSecurityScheme
    {
        Name = "Authorization",
        Description = "Enter JWT Bearer token **in the format**: Bearer {your token}",
        In = ParameterLocation.Header,
        Type = SecuritySchemeType.Http,
        Scheme = "bearer",
        BearerFormat = "JWT",
        Reference = new OpenApiReference
        {
            Type = ReferenceType.SecurityScheme,
            Id = "Bearer"
        }
    };

    x.AddSecurityDefinition("Bearer", securityScheme);
    x.AddSecurityRequirement(new OpenApiSecurityRequirement
    {
        { securityScheme, new string[] { } }
    });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(c =>
    {
        c.SwaggerEndpoint("/swagger/v1/swagger.json", "MovieApi v1");
        c.RoutePrefix = string.Empty; // Swagger UI root'ta
    });
}

app.UseCors(x =>
{
    x.AllowAnyOrigin();
    x.AllowAnyHeader();
    x.AllowAnyMethod();
});

app.UseHttpsRedirection();


app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

await app.RunAsync();
