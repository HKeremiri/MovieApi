import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../HomePageSlider.css'
export default function HomePageSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 3, slidesToScroll: 3 }
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 2, slidesToScroll: 2, dots: false }
            },
            {
                breakpoint: 480,
                settings: { slidesToShow: 1, slidesToScroll: 1, dots: false }
            }
        ]
    };

    const movies = [
        {
            id: 1,
            title: "Interstellar",
            img: "images/uploads/slider1.jpg",
            categories: [{ name: "Sci-fi", className: "blue" }],
            rating: "7.4",
            href: "#"
        },
        {
            id: 2,
            title: "The revenant",
            img: "images/uploads/slider2.jpg",
            categories: [{ name: "action", className: "yell" }],
            rating: "7.4",
            href: "#"
        },
        {
            id: 3,
            title: "Die hard",
            img: "images/uploads/slider3.jpg",
            categories: [{ name: "comedy", className: "green" }],
            rating: "7.4",
            href: "#"
        },
        {
            id: 4,
            title: "The walk",
            img: "images/uploads/slider4.jpg",
            categories: [
                { name: "Sci-fi", className: "blue" },
                { name: "advanture", className: "orange" }
            ],
            rating: "7.4",
            href: "#"
        },
        {
            id: 5,
            title: "The walk (2)",
            img: "images/uploads/slider4.jpg",
            categories: [
                { name: "Sci-fi", className: "blue" },
                { name: "advanture", className: "orange" }
            ],
            rating: "7.4",
            href: "#"
        },
        {
            id: 6,
            title: "The walk (3)",
            img: "images/uploads/slider4.jpg",
            categories: [
                { name: "Sci-fi", className: "blue" },
                { name: "advanture", className: "orange" }
            ],
            rating: "7.4",
            href: "#"
        }
    ];

    return (
        <div className="sliderv3 movie-items">
            <div className="container">
                <div className="row">
                    <div className="social-link">
                        <p>Follow us: </p>
                        <a href="#"><i className="ion-social-facebook" /></a>
                        <a href="#"><i className="ion-social-twitter" /></a>
                        <a href="#"><i className="ion-social-googleplus" /></a>
                        <a href="#"><i className="ion-social-youtube" /></a>
                    </div>

                    {/* React-Slick kullanımı */}
                    <Slider {...settings} >
                        {movies.map((m) => (
                            <div className="movie-item" key={m.id}>
                                <div className="mv-img">
                                    <a  href={m.href}>
                                        {/* Orijinalde width/height vardı; CSS'i bozmak istemediğiniz için bıraktım */}
                                        <img src={m.img} alt={m.title} width={285} height={437} />
                                    </a>
                                </div>
                                <div className="title-in">
                                    <div className="cate">
                                        {m.categories.map((c, i) => (
                                            <span className={c.className} key={i}>
                                                <a href="#">{c.name}</a>
                                            </span>
                                        ))}
                                    </div>
                                    <h6><a href={m.href}>{m.title}</a></h6>
                                    <p><i className="ion-android-star" /><span>{m.rating}</span> /10</p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
}
