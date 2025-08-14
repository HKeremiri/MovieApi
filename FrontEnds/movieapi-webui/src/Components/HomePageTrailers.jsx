import { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../HomePageTrailers.css";

export default function HomePageTrailers() {
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    const slider1 = useRef();
    const slider2 = useRef();

    const videos = [
        { videoUrl: "https://www.youtube.com/embed/1Q8fG0TtVAY", img: "/images/uploads/trailer7.jpg", title: "Wonder Woman", duration: "2:30" },
        { videoUrl: "https://www.youtube.com/embed/w0qQkSuWOS8", img: "/images/uploads/trailer2.jpg", title: "Oblivion", duration: "2:37" },
        { videoUrl: "https://www.youtube.com/embed/44LdLqgOpjo", img: "/images/uploads/trailer6.jpg", title: "Skull Island", duration: "2:44" },
        { videoUrl: "https://www.youtube.com/embed/gbug3zTm3Ws", img: "/images/uploads/trailer3.png", title: "Logan", duration: "2:43" },
        { videoUrl: "https://www.youtube.com/embed/e3Nl_TCQXuw", img: "/images/uploads/trailer4.png", title: "Beauty & Beast", duration: "2:32" },
        { videoUrl: "https://www.youtube.com/embed/NxhEZG0k9_w", img: "/images/uploads/trailer5.jpg", title: "Fast & Furious 8", duration: "3:11" }
    ];

    const mainSettings = {
        arrows: false,
        fade: true,
        asNavFor: nav2,
        adaptiveHeight: true,
        // responsive not needed for main, sizing handled by CSS
    };

    const thumbSettings = {
        slidesToShow: 6,
        slidesToScroll: 1,
        swipeToSlide: true,
        focusOnSelect: true,
        asNavFor: nav1,
        centerMode: false,
        responsive: [
            { breakpoint: 1600, settings: { slidesToShow: 6 } },
            { breakpoint: 1400, settings: { slidesToShow: 5 } },
            { breakpoint: 1200, settings: { slidesToShow: 4 } },
            { breakpoint: 992, settings: { slidesToShow: 4 } },
            { breakpoint: 768, settings: { slidesToShow: 3 } },
            { breakpoint: 480, settings: { slidesToShow: 2 } }
        ]
    };

    return (
        <div className="trailers">
            <div className="container trailers-container">
                <div className="title-hd">
                    <h2>In Theater</h2>
                    <a href="#" className="viewall">View all <i className="ion-ios-arrow-right" /></a>
                </div>

                <div className="videos">
                    <div className="videos-inner">
                        {/* main video - center içinde sabit max-width */}
                        <div className="main-video-wrap">
                            <Slider {...mainSettings} asNavFor={nav2} ref={c => { slider1.current = c; setNav1(c); }}>
                                {videos.map((v, idx) => (
                                    <div key={idx} className="main-slide">
                                        <div className="video-wrapper">
                                            <iframe
                                                className="item-video"
                                                src={v.videoUrl}
                                                title={v.title}
                                                loading="lazy"
                                                allowFullScreen
                                            />
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>

                        {/* thumbnails centered and limited width */}
                        <div className="thumbs-wrap">
                            <Slider {...thumbSettings} asNavFor={nav1} ref={c => { slider2.current = c; setNav2(c); }} className="thumb-ft">
                                {videos.map((v, idx) => (
                                    <div className="item" key={idx}>
                                        <div className="trailer-img"><img src={v.img} alt={v.title} /></div>
                                        <div className="trailer-infor">
                                            <h4 className="desc">{v.title}</h4>
                                            <p>{v.duration}</p>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
