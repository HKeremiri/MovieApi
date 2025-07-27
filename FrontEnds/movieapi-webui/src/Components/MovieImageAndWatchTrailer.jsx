export default function MovieImageAndWatchTrailer() {
    return (
        <div className="col-md-4 col-sm-12 col-xs-12">
            <div className="movie-img sticky-sb">
                <img src="images/uploads/movie-single.jpg" alt="" />
                <div className="movie-btn">
                    <div className="btn-transform transform-vertical red">
                        <div>
                            <a href="#" className="item item-1 redbtn">
                                <i className="ion-play"></i> Watch Trailer
                            </a>
                        </div>
                        <div>
                            <a href="https://www.youtube.com/embed/o-0hcF97wy0" className="item item-2 redbtn fancybox-media hvr-grow">
                                <i className="ion-play"></i>
                            </a>
                        </div>
                    </div>
                    <div className="btn-transform transform-vertical">
                        <div>
                            <a href="#" className="item item-1 yellowbtn">
                                <i className="ion-card"></i> Buy ticket
                            </a>
                        </div>
                        <div>
                            <a href="#" className="item item-2 yellowbtn">
                                <i className="ion-card"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
