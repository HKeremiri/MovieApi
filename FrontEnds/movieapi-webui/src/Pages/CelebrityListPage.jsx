import Hero from "../Components/Hero";
export default function CelebrityListPage() {
    return (
        <>
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
                            <div className="col-md-9 col-sm-12 col-xs-12">
                                <div className="topbar-filter">
                                    <p className="pad-change">
                                        Found <span>1,608 celebrities</span> in total
                                    </p>
                                    <label>Sort by:</label>
                                    <select>
                                        <option value="popularity">Popularity Descending</option>
                                        <option value="popularity">Popularity Ascending</option>
                                        <option value="rating">Rating Descending</option>
                                        <option value="rating">Rating Ascending</option>
                                        <option value="date">Release date Descending</option>
                                        <option value="date">Release date Ascending</option>
                                    </select>
                                    <a href="celebritylist.html" className="list">
                                        <i className="ion-ios-list-outline active" />
                                    </a>
                                    <a href="celebritygrid01.html" className="grid">
                                        <i className="ion-grid " />
                                    </a>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="ceb-item-style-2">
                                            <img src="images/uploads/ceblist1.jpg" alt="" />
                                            <div className="ceb-infor">
                                                <h2>
                                                    <a href="celebritysingle.html">Dan Stevens</a>
                                                </h2>
                                                <span>actor, usa</span>
                                                <p>
                                                    Dan Stevens was born at Croydon in Surrey on 10th October
                                                    1982. His parents are teachers. He was educated at Tonbridge
                                                    School and trained in acting at the National Youth Theatre
                                                    of Great Britain...{" "}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="ceb-item-style-2">
                                            <img src="images/uploads/ceblist2.jpg" alt="" />
                                            <div className="ceb-infor">
                                                <h2>
                                                    <a href="celebritysingle.html">Luke Evans</a>
                                                </h2>
                                                <span>actor, mexico</span>
                                                <p>
                                                    Luke George Evans was born in Pontypool, Wales, and grew up
                                                    in Aberbargoed, in the south of Wales. He is the son of
                                                    Yvonne (Lewis) and David Evans. He moved to Cardiff at the
                                                    age 17...
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="ceb-item-style-2">
                                            <img src="images/uploads/ceblist3.jpg" alt="" />
                                            <div className="ceb-infor">
                                                <h2>
                                                    <a href="celebritysingle.html">Scarlett Johansson</a>
                                                </h2>
                                                <span>actress, france</span>
                                                <p>
                                                    Scarlett Ingrid Johansson was born in New York City. Her
                                                    mother, Melanie Sloan, is from a Jewish family from the
                                                    Bronx, and her father, Karsten Johansson, is a Danish-born
                                                    architect, from Copenhagen...
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="ceb-item-style-2">
                                            <img src="images/uploads/ceblist4.jpg" alt="" />
                                            <div className="ceb-infor">
                                                <h2>
                                                    <a href="celebritysingle.html">Emma Watson</a>
                                                </h2>
                                                <span>actress, uk</span>
                                                <p>
                                                    Emma Charlotte Duerre Watson was born in Paris, France, to
                                                    English parents, Jacqueline Luesby and Chris Watson, both
                                                    lawyers. She moved to Oxfordshire when she was five...
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="ceb-item-style-2">
                                            <img src="images/uploads/ceblist5.jpg" alt="" />
                                            <div className="ceb-infor">
                                                <h2>
                                                    <a href="celebritysingle.html">Tom Hardy</a>
                                                </h2>
                                                <span>actor, italy </span>
                                                <p>
                                                    Joan Crawford was born Lucille Fay LeSueur on March 23,
                                                    1905, in San Antonio, Texas, to Anna Belle (Johnson) and
                                                    Thomas E. LeSueur, a laundry laborer. By the time she was
                                                    born her parents had separated....
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="ceb-item-style-2">
                                            <img src="images/uploads/ceblist6.jpg" alt="" />
                                            <div className="ceb-infor">
                                                <h2>
                                                    <a href="celebritysingle.html">Joan Crawford</a>
                                                </h2>
                                                <span>director, sweden</span>
                                                <p>
                                                    Joan Crawford was born Lucille Fay LeSueur on March 23,
                                                    1905, in San Antonio, Texas, to Anna Belle (Johnson) and
                                                    Thomas E. LeSueur, a laundry laborer. By the time she was
                                                    born her parents had separated....
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="ceb-item-style-2">
                                            <img src="images/uploads/ceblist7.jpg" alt="" />
                                            <div className="ceb-infor">
                                                <h2>
                                                    <a href="celebritysingle.html">Margot Robbie</a>
                                                </h2>
                                                <span>actress, chile</span>
                                                <p>
                                                    Margot Robbie is an Australian actress born in Dalby,
                                                    Queensland, and raised on the Gold Coast, spending much of
                                                    her time at the farm belonging to her grandparents. Her
                                                    mother, Sarie Kessler, is a physiotherapist....
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="ceb-item-style-2">
                                            <img src="images/uploads/ceblist8.jpg" alt="" />
                                            <div className="ceb-infor">
                                                <h2>
                                                    <a href="celebritysingle.html">Jason Momoa</a>
                                                </h2>
                                                <span>actor, usa</span>
                                                <p>
                                                    Joseph Jason Namakaeha Momoa was born on August 1, 1979 in
                                                    Honolulu, Hawaii. He is the son of Coni (Lemke), a
                                                    photographer, and Joseph Momoa, a painter...
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="topbar-filter">
                                    <label>Reviews per page:</label>
                                    <select>
                                        <option value="range">36 Reviews</option>
                                        <option value="saab">18 Reviews</option>
                                    </select>
                                    <div className="pagination2">
                                        <span>Page 1 of 6:</span>
                                        <a className="active" href="#">
                                            1
                                        </a>
                                        <a href="#">2</a>
                                        <a href="#">3</a>
                                        <a href="#">4</a>
                                        <a href="#">5</a>
                                        <a href="#">6</a>
                                        <a href="#">
                                            <i className="ion-arrow-right-b" />
                                        </a>
                                    </div>
                                </div>
                            </div>
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

        </>
    );
}