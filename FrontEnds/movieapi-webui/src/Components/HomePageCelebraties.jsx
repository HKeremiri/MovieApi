import React from "react";
import { Link } from "react-router-dom";
export default function HomePageCelebraties() {
    const celebs = [
        { id: 1, name: "Samuel N. Jack", role: "Actor", img: "images/uploads/ava1.jpg" },
        { id: 2, name: "Benjamin Carroll", role: "Actor", img: "images/uploads/ava2.jpg" },
        { id: 3, name: "Beverly Griffin", role: "Actor", img: "images/uploads/ava3.jpg" },
        { id: 4, name: "Justin Weaver", role: "Actor", img: "images/uploads/ava4.jpg" },
    ];

    return (
        <div className="celebrities">
            <h4 className="sb-title">Spotlight Celebrities</h4>

            {celebs.map((c) => (
                <div className="celeb-item" key={c.id}>
                    <a href="#">
                        <img src={c.img} alt={c.name} width={70} height={70} />
                    </a>
                    <div className="celeb-author">
                        <h6>
                            <a href="#">{c.name}</a>
                        </h6>
                        <span>{c.role}</span>
                    </div>
                </div>
            ))}

            <Link to="celebrities" className="btn">
                See all celebrities
                <i className="ion-ios-arrow-right" />
            </Link>
        </div>
    );
}
