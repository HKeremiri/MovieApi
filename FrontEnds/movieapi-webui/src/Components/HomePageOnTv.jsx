import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../HomePageOnTv.css";

export default function HomePageOnTv() {
    const [activeTab, setActiveTab] = useState("coming"); // default: coming soon

    const settings = {
        dots: false,
        infinite: true,
        speed: 400,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            { breakpoint: 1200, settings: { slidesToShow: 3 } },
            { breakpoint: 900, settings: { slidesToShow: 2 } },
            { breakpoint: 480, settings: { slidesToShow: 1 } }
        ]
    };

    // Her tab için film verisi (örnek). Ýstersen gerçek veriyi API'den çek.
    const tabData = {
        popular: [
            { img: "/images/uploads/mv-item1.jpg", title: "Interstellar", rating: "7.4" },
            { img: "/images/uploads/mv-item2.jpg", title: "The Revenant", rating: "7.4" },
            { img: "/images/uploads/mv-item3.jpg", title: "Die Hard", rating: "7.4" },
            { img: "/images/uploads/mv-item4.jpg", title: "The Walk", rating: "7.4" },
            { img: "/images/uploads/mv-item5.jpg", title: "Interstellar 2", rating: "7.4" }
        ],
        coming: [
            { img: "/images/uploads/mv-item5.jpg", title: "Interstellar", rating: "7.4" },
            { img: "/images/uploads/mv-item6.jpg", title: "The Revenant", rating: "7.4" },
            { img: "/images/uploads/mv-item7.jpg", title: "Die Hard", rating: "7.4" },
            { img: "/images/uploads/mv-item8.jpg", title: "The Walk", rating: "7.4" },
            { img: "/images/uploads/mv-item2.jpg", title: "The Revenant 2", rating: "7.4" }
        ],
        top: [
            { img: "/images/uploads/mv-item2.jpg", title: "The Revenant", rating: "7.4" },
            { img: "/images/uploads/mv-item4.jpg", title: "The Walk", rating: "7.4" },
            { img: "/images/uploads/mv-item5.jpg", title: "Interstellar", rating: "7.4" },
            { img: "/images/uploads/mv-item6.jpg", title: "The Revenant 3", rating: "7.4" }
        ],
        reviewed: [
            { img: "/images/uploads/mv-item5.jpg", title: "Interstellar", rating: "7.4" },
            { img: "/images/uploads/mv-item7.jpg", title: "Die Hard", rating: "7.4" },
            { img: "/images/uploads/mv-item8.jpg", title: "The Walk", rating: "7.4" }
        ]
    };

    const tabs = [
        { id: "popular", label: "#Popular" },
        { id: "coming", label: "#Coming soon" },
        { id: "top", label: "#Top rated" },
        { id: "reviewed", label: "#Most reviewed" }
    ];

    const movies = tabData[activeTab] || [];

    return (
        <section className="ontv-section">
            <div className="ontv-header">
                <div className="ontv-title">
                    <h2>On TV</h2>
                    <a href="#" className="ontv-viewall">View all</a>
                </div>

                <ul className="ontv-tab-links">
                    {tabs.map((t) => (
                        <li
                            key={t.id}
                            className={t.id === activeTab ? "active" : ""}
                            onClick={() => setActiveTab(t.id)}
                        >
                            <button type="button" className="ontv-tab-btn">{t.label}</button>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="ontv-content">
                {movies.length === 0 ? (
                    <p className="ontv-empty">No items</p>
                ) : (
                    <Slider {...settings} className="ontv-slider">
                        {movies.map((m, i) => (
                            <article className="ontv-movie-card" key={i}>
                                <div className="ontv-movie-img">
                                    <a href="#">
                                        <img src={m.img} alt={m.title} />
                                    </a>
                                </div>
                                <div className="ontv-movie-body">
                                    <h6><a href="#">{m.title}</a></h6>
                                    <p className="ontv-rating"><i className="ion-android-star" /> <span>{m.rating}</span> /10</p>
                                    <div className="ontv-readmore">
                                        <a href="moviesingle.html">Read more <i className="ion-android-arrow-dropright" /></a>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </Slider>
                )}
            </div>
        </section>
    );
}
