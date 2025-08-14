export default function UserProfileAccountDetails() {
    return (
        <div className="col-md-3 col-sm-12 col-xs-12">
            <div className="user-information">
                <div className="user-img">
                    <a href="#">
                        <img src="images/uploads/user-img.png" alt="" />
                        <br />
                    </a>
                    <a href="#" className="redbtn">
                        Change avatar
                    </a>
                </div>
                <div className="user-fav">
                    <p>Account Details</p>
                    <ul>
                        <li className="active">
                            <a href="userprofile.html">Profile</a>
                        </li>
                        <li>
                            <a href="userfavoritelist.html">Favorite movies</a>
                        </li>
                        <li>
                            <a href="userrate.html">Rated movies</a>
                        </li>
                    </ul>
                </div>
                <div className="user-fav">
                    <p>Others</p>
                    <ul>
                        <li>
                            <a href="#">Change password</a>
                        </li>
                        <li>
                            <a href="#">Log out</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}