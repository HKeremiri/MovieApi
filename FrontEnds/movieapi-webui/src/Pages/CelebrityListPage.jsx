import Hero from "../Components/Hero";
import CelebrityList from "../Components/CelebrityList";
import { useState } from "react";
export default function CelebrityListPage() {
    const [celebrities, setCelebrities] = useState([]);
    return (
        <>
     
             

                <Hero
                    title="Celebrity List"
                    crumbs={[{ label: 'Home', href: '/' }, { label: 'Celebrity List' }]}
                    backgroundImage="/images/uploads/slider-bg.jpg"
                />



                {/* celebrity list section*/}
                <div className="page-single">
                    <div className="container">
                    <div className="row ipad-width2">
                        <CelebrityList Propcelebrities={celebrities} setCelebrities={setCelebrities} />
                            <div className="col-md-3 col-xs-12 col-sm-12">
                                <div className="sidebar">
                                    <div className="searh-form">
                                        <h4 className="sb-title">Search celebrity</h4>
                                        <form className="form-style-1 celebrity-form" action="#">
                                            <div className="row">
                                                <div className="col-md-12 form-it">
                                                    <label>Celebrity name</label>
                                                    <input type="text" placeholder="Enter keywords" />
                                                </div>
                                                <div className="col-md-12 form-it">
                                                    <label>Celebrity Letter</label>
                                                    <select>
                                                        <option value="range">A</option>
                                                        <option value="saab">B</option>
                                                    </select>
                                                </div>
                                                <div className="col-md-12 form-it">
                                                    <label>Category</label>
                                                    <select>
                                                        <option value="range">Actress</option>
                                                        <option value="saab">Others</option>
                                                    </select>
                                                </div>
                                                <div className="col-md-12 form-it">
                                                    <label>Year of birth</label>
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <select>
                                                                <option value="range">1970</option>
                                                                <option value="number">Other</option>
                                                            </select>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <select>
                                                                <option value="range">1990</option>
                                                                <option value="number">others</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-12 ">
                                                    <input
                                                        className="submit"
                                                        type="submit"
                                                        defaultValue="submit"
                                                    />
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="ads">
                                        <img src="images/uploads/ads1.png" alt="" />
                                    </div>
                                    <div className="celebrities">
                                        <h4 className="sb-title">featured celebrity</h4>
                                        <div className="celeb-item">
                                            <a href="#">
                                                <img src="images/uploads/ava1.jpg" alt="" />
                                            </a>
                                            <div className="celeb-author">
                                                <h6>
                                                    <a href="#">Samuel N. Jack</a>
                                                </h6>
                                                <span>Actor</span>
                                            </div>
                                        </div>
                                        <div className="celeb-item">
                                            <a href="#">
                                                <img src="images/uploads/ava2.jpg" alt="" />
                                            </a>
                                            <div className="celeb-author">
                                                <h6>
                                                    <a href="#">Benjamin Carroll</a>
                                                </h6>
                                                <span>Actor</span>
                                            </div>
                                        </div>
                                        <div className="celeb-item">
                                            <a href="#">
                                                <img src="images/uploads/ava3.jpg" alt="" />
                                            </a>
                                            <div className="celeb-author">
                                                <h6>
                                                    <a href="#">Beverly Griffin</a>
                                                </h6>
                                                <span>Actor</span>
                                            </div>
                                        </div>
                                        <div className="celeb-item">
                                            <a href="#">
                                                <img src="images/uploads/ava4.jpg" alt="" />
                                            </a>
                                            <div className="celeb-author">
                                                <h6>
                                                    <a href="#">Justin Weaver</a>
                                                </h6>
                                                <span>Actor</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end of celebrity list section*/}
            </>

    );
}