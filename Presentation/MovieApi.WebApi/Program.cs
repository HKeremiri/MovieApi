using MovieApi.Application.Features.CQRSDesingPattern.Handlers.CategoryHandlers;
using MovieApi.Application.Features.CQRSDesingPattern.Handlers.MovieHandlers;
using MovieApi.Application.Features.CQRSDesingPattern.Handlers.UserRegisterHandlers;
using MovieApi.Application.Features.MediatorDesingPattern.Handlers.TagHandlers;
using MovieApi.Persistence.Context;
using MovieApi.Persistence.Identity;
using System.Reflection;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.


builder.Services.AddDbContext<MovieContext>();
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

builder.Services.AddScoped<CreateUserRegisterHandler>();


builder.Services.AddIdentity<AppUser, AppRole>()
    .AddEntityFrameworkStores<MovieContext>();
  

builder.Services.AddMediatR(cfg => cfg.RegisterServicesFromAssembly(typeof(GetTagQueryHandler).Assembly));


builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(x =>
{
    x.SwaggerDoc("v1", new() { Title = "MovieApi", Version = "v1" });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(c =>
    {
        c.SwaggerEndpoint("/swagger/v1/swagger.json", "MovieApi v1");
        c.RoutePrefix = string.Empty; // Set Swagger UI at the app's root
    });
}
app.UseCors(x =>
{
    x.AllowAnyOrigin();
    x.AllowAnyHeader();
    x.AllowAnyMethod();
});
app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

await app.RunAsync();
