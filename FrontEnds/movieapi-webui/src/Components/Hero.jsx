
import React from 'react';
export default function Hero({
    title = "Title",
    crumbs = [{ label: "Home", href: "/" }],
    backgroundImage = null,
}) {
    const style = backgroundImage
        ? {
            backgroundImage: `url(${backgroundImage})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            backgroundSize: "cover",
        }
        : {};

    return (
        <div className="hero common-hero" style={style}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="hero-ct">
                            <h1>{title}</h1>
                            <ul className="breadcumb">
                                {crumbs.map((c, i) => (
                                    <li key={i} className={i === 0 ? "active" : undefined}>
                                        {c.href ? <a href={c.href}>{c.label}</a> : c.label}
                                        {i !== crumbs.length - 1 && (
                                            <>
                                                {' '}
                                                <span className="ion-ios-arrow-right" />
                                                {' '}
                                            </>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
