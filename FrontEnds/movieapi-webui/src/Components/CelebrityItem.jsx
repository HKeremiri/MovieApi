import React from "react";
import { Link } from "react-router-dom";

export default function CelebrityItem({ celebrity }) {
    if (!celebrity) return null;

    const id = celebrity.castId ?? celebrity.id ?? celebrity.castID ?? "";
    const firstName = celebrity.name ?? celebrity.firstName ?? "";
    const lastName = celebrity.surname ?? celebrity.lastName ?? "";
    // Burada ?? ile || karýþtýðý için parantez kullandýk
    const fullName = (celebrity.title ?? `${firstName} ${lastName}`.trim()) || "Unknown";
    const imageUrl = celebrity.imageUrl ?? celebrity.photo ?? "images/uploads/default-celeb.jpg";
    const overview = celebrity.overview ?? celebrity.summary ?? "";

    return (
        <div className="col-md-12">
            <div className="ceb-item-style-2">
                <img src={imageUrl} alt={fullName} />
                <div className="ceb-infor">
                    <h2>
                        <Link to={`/celebrity/${id}`}>{fullName}</Link>
                    </h2>
                    <span>{(celebrity.knownFor ?? celebrity.profession ?? "actor")}, {(celebrity.country ?? "unknown")}</span>
                    <p>{overview.length > 300 ? overview.slice(0, 300) + "..." : overview}</p>
                </div>
            </div>
        </div>
    );
}
