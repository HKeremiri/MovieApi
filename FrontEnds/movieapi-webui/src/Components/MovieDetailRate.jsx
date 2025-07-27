import { useState } from "react";

export default function MovieDetailRate() {
    const [rate, setRate] = useState(0);        
    const [hoverRate, setHoverRate] = useState(0); 

    const stars = Array.from({ length: 10 }, (_, index) => index + 1);

    return (
        <div className="movie-rate">
            <div className="rate">
                <i className="ion-android-star"></i>
                <p>
                    <span>8.1</span> /10<br />
                    <span className="rv">56 Reviews</span>
                </p>
            </div>

            <div className="rate-star">
                <p>Rate This Movie:</p>
                {stars.map((star) => (
                    <i
                        key={star}
                        className={star <= (hoverRate || rate) ? "ion-ios-star" : "ion-ios-star-outline"}
                        onClick={() => setRate(star)}
                        onMouseEnter={() => setHoverRate(star)}
                        onMouseLeave={() => setHoverRate(0)}
                        style={{
                            cursor: "pointer",
                            color: star <= (hoverRate || rate) ? "#f5c518" : "#999",
                            fontSize: "30px",
                            marginRight: "3px",
                            transition: "color 0.2s"
                        }}
                    ></i>
                ))}
            </div>
        </div>
    );
}
