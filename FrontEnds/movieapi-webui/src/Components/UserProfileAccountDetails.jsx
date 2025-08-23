import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function UserProfileAccountDetails({ imgUrl }) {
    const { logout } = useAuth();
    const location = useLocation(); // aktif path'i almak için

    const handleLogout = (e) => {
        e.preventDefault();
        if (typeof logout === 'function') {
            logout();
            window.location.href = '/'; // ✅ sayfa yenileme
        } else {
            console.warn('logout fonksiyonu AuthContext içinde bulunamadı.');
        }
    };

    // yardımcı fonksiyon: aktif class ekler
    const isActive = (path) => location.pathname === path ? "active" : "";

    return (
        <div className="col-md-3 col-sm-12 col-xs-12">
            <div className="user-information">
                <div className="user-img">
                    <a href="#">
                        <img src={imgUrl} alt="avatar" />
                        <br />
                    </a>
                    <a href="#" className="redbtn">
                        Change avatar
                    </a>
                </div>

                <div className="user-fav">
                    <p>Account Details</p>
                    <ul>
                        <li className={isActive("/myprofile")}>
                            <Link to="/myprofile">Profile</Link>
                        </li>
                        <li className={isActive("/myfavoritemovies")}>
                            <Link to="/myfavoritemovies">Favorite movies</Link>
                        </li>
                        <li className={isActive("/userrate")}>
                            <Link to="/userrate">Rated movies</Link>
                        </li>
                    </ul>
                </div>

                <div className="user-fav">
                    <p>Others</p>
                    <ul>
                        <li>
                            <Link to="/changepassword">Change password</Link>
                        </li>
                        <li>
                            <a href="/" onClick={handleLogout}>Log out</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
