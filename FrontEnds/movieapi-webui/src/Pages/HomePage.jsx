import HomePageSlider from '../Components/HomePageSlider';
import HomePageInTheater from '../Components/HomePageInTheater';
import HomePageOnTv from '../Components/HomePageOnTv';
import HomePageCelebraties from '../Components/HomePageCelebraties';
import HomePageTrailers from '../Components/HomePageTrailers';
import HomePageLastestNews from '../Components/HomePageLastestNews';
export default function HomePage() {

    return (
        <>
            <HomePageSlider />
            <div className="movie-items">
                <div className="container">
                    <div className="row ipad-width">
                        <div className="col-md-8">
                            <HomePageInTheater />
                            <HomePageOnTv/>
                          
                        </div>
                        <div className="col-md-4">
                            <div className="sidebar">
                                <div className="ads">
                                    <img
                                        src="images/uploads/ads1.png"
                                        alt=""
                                        width={336}
                                        height={296}
                                    />
                                </div>
                                <HomePageCelebraties/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <HomePageTrailers/>

            <HomePageLastestNews />

        </>
      

    );
}