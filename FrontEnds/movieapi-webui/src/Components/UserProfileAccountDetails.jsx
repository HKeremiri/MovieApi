import { Link } from 'react-router-dom';
export default function UserProfileAccountDetails({ imgUrl }) {
  
    return (
        <div className="col-md-3 col-sm-12 col-xs-12">
            <div className="user-information">
                <div className="user-img">
                    <a href="#">
                        <img src={imgUrl} alt="" />
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
                            <Link to="userprofile.html">Profile</Link>
                        </li>
                        <li>
                            <Link to="userfavoritelist.html">Favorite movies</Link>
                        </li>
                        <li>
                            <Link to="userrate.html">Rated movies</Link>
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