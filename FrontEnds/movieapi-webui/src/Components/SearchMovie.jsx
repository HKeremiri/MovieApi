
export default function SearchMovie() {

    return (
		<div className="col-md-4 col-sm-12 col-xs-12">
			<div className="sidebar">
				<div className="searh-form">
					<h4 className="sb-title">Search for movie</h4>
					<form className="form-style-1" action="#">
						<div className="row">
							<div className="col-md-12 form-it">
								<label>Movie name</label>
								<input type="text" placeholder="Enter keywords"/>
							</div>
							<div className="col-md-12 form-it">
								<label>Genres & Subgenres</label>
								<div className="group-ip">
									<select
									 	name="skills" multiple className="ui fluid dropdown">
										<option value="">Enter to filter genres</option>
										<option value="Action1">Action 1</option>
										<option value="Action2">Action 2</option>
										<option value="Action3">Action 3</option>
										<option value="Action4">Action 4</option>
										<option value="Action5">Action 5</option>
									</select>
								</div>

							</div>
							<div className="col-md-12 form-it">
								<label>Rating Range</label>

								<select>
									<option value="range">-- Select the rating range below --</option>
									<option value="saab">-- Select the rating range below --</option>
									<option value="saab">-- Select the rating range below --</option>
									<option value="saab">-- Select the rating range below --</option>
								</select>

							</div>
							<div className="col-md-12 form-it">
								<label>Release Year</label>
								<div className="row">
									<div className="col-md-6">
										<select>
											<option value="range">From</option>
											<option value="number">10</option>
											<option value="number">20</option>
											<option value="number">30</option>
										</select>
									</div>
									<div className="col-md-6">
										<select>
											<option value="range">To</option>
											<option value="number">20</option>
											<option value="number">30</option>
											<option value="number">40</option>
										</select>
									</div>
								</div>
							</div>
							<div className="col-md-12 ">
								<input className="submit" type="submit" value="submit"/>
							</div>
						</div>
					</form>
				</div>
				<div className="ads">
					<img src="images/uploads/ads1.png" alt=""/>
				</div>
				
				<div className="sb-twitter sb-it">
					<h4 className="sb-title">Tweet to us</h4>
					<div className="slick-tw">
						<div className="tweet item" id="">
						</div>
						<div className="tweet item" id="">
						</div>
					</div>
				</div>
			</div>
		</div>
    );
}