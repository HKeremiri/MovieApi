import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../HomePageInTheater.css";

export default function HomePageInTheater() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5, // geniþ ekranda 5 film
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            { breakpoint: 1200, settings: { slidesToShow: 4 } },
            { breakpoint: 992, settings: { slidesToShow: 3 } },
            { breakpoint: 768, settings: { slidesToShow: 2 } },
            { breakpoint: 480, settings: { slidesToShow: 1 } }
        ]
    };

    const movies = [
        { img: "images/uploads/mv1.jpg", title: "The Revenant" },
        { img: "images/uploads/mv2.jpg", title: "Interstellar" },
        { img: "images/uploads/mv3.jpg", title: "John Wick" },
        { img: "images/uploads/mv4.jpg", title: "Mad Max" },
        { img: "images/uploads/mv5.jpg", title: "The Martian" },
        { img: "images/uploads/mv6.jpg", title: "Avengers" }
    ];

    return (
        <div className="in-theater-section">
            <h2 style={{ color: "white", margin: "5px 5px 5px 5px" }}>In Theaters</h2>
            <Slider {...settings}>
                {movies.map((m, i) => (
                    <div className="movie-card" key={i}>
                        <div className="movie-img">
                            <img src={m.img} alt={m.title} />
                        </div>
                        <h6>{m.title}</h6>
                    </div>
                ))}
            </Slider>
        </div>
    );
}
