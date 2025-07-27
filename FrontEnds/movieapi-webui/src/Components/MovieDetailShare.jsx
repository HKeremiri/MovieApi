
export default function MovieDetailShare() {

    return (
		<div className="social-btn">
			<a href="#" className="parent-btn"><i className="ion-heart"></i> Add to Favorite</a>
			<div className="hover-bnt">
				<a href="#" className="parent-btn"><i className="ion-android-share-alt"></i>share</a>
				<div className="hvr-item">
					<a href="#" className="hvr-grow"><i className="ion-social-facebook"></i></a>
					<a href="#" className="hvr-grow"><i className="ion-social-twitter"></i></a>
					<a href="#" className="hvr-grow"><i className="ion-social-googleplus"></i></a>
					<a href="#" className="hvr-grow"><i className="ion-social-youtube"></i></a>
				</div>
			</div>
		</div>
    )
}