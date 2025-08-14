import { Link } from 'react-router-dom'; 
export default function Header() {
    return (
		<header className="ht-header">
			<div className="container">
				<nav className="navbar navbar-default navbar-custom">
					{/*<!-- Brand and toggle get grouped for better mobile display -->*/}
					<div className="navbar-header logo">
						<div className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
							<span className="sr-only">Toggle navigation</span>
							<div id="nav-icon1">
								<span></span>
								<span></span>
								<span></span>
							</div>
						</div>
						<a href="index-2.html"><img className="logo" src="images/logo1.png" alt="" width="119" height="58"/></a>
					</div>
					{/*<!-- Collect the nav links, forms, and other content for toggling -->*/}
					<div className="collapse navbar-collapse flex-parent" id="bs-example-navbar-collapse-1">
						<ul className="nav navbar-nav flex-child-menu menu-left">
							<li className="hidden">
								<Link to="#page-top"></Link>
							</li>
							<li className="first">
								<Link to="/" className="btn btn-default">
									Home <i className="fa fa-angle" aria-hidden="true"></i>
								</Link>
							
							</li>
							<li className="first">
								<Link to="/movielist" className="btn btn-default">
									Movies <i className="fa fa-angle" aria-hidden="true"></i>
								</Link>

							</li>
							<li className="first">
								<Link to="/celebrities" className="btn btn-default">
									Celebrities <i className="fa fa-angle" aria-hidden="true"></i>
								</Link>

							</li>
							<li className="first">
								<Link to="/news" className="btn btn-default">
									News <i className="fa fa-angle" aria-hidden="true"></i>
								</Link>

							</li>
							<li className="dropdown first">
								<Link to="myprofile" className="btn btn-default dropdown-toggle lv1" data-toggle="dropdown" data-hover="dropdown">
									Profile <i className="fa fa-angle-down" aria-hidden="true"></i>
								</Link>
								<ul className="dropdown-menu level1">
									<li><Link to="userfavoritemovies">Favorite Movies</Link></li>
									<li><Link to="userratedmovies">Rated Movies</Link></li>								
								</ul>
							</li>
						</ul>
						<ul className="nav navbar-nav flex-child-menu menu-right">
						
						
							<li className="loginLink"><a href="#">LOG In</a></li>
							<li className="btn signupLink"><a href="#">sign up</a></li>
						</ul>
					</div>
					{/*<!-- /.navbar-collapse -->*/}
				</nav>

				{/*<!-- top search form -->*/}
				<div className="top-search">
					<select>
						<option value="united">TV show</option>
						<option value="saab">Others</option>
					</select>
					<input type="text" placeholder="Search for a movie, TV Show or celebrity that you are looking for"/>
				</div>
			</div>
		</header>
    );
}