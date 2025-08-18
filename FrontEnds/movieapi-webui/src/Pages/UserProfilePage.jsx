import UserProfileDetails from "../Components/UserProfileDetails";
import UserProfileChangePassword from "../Components/UserProfileChangePassword";
import UserProfileAccountDetails from "../Components/UserProfileAccountDetails";
import { useAuth } from "../Contexts/AuthContext"; 
export default function UserProfilePage() {
    const { user, loading } = useAuth();
    console.log(user);
    if (loading) return <div>Loading...</div>;
    if (!user) return <div>Please login</div>;
    return (
        <>
           
                <div className="hero user-hero">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="hero-ct">
                                <h1>{user.username}’s profile</h1>
                                    <ul className="breadcumb">
                                        <li className="active">
                                            <a href="#">Home</a>
                                        </li>
                                        <li>
                                            {" "}
                                            <span className="ion-ios-arrow-right" />
                                             My Profile
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="page-single">
                    <div className="container">
                    <div className="row ipad-width">
                        <UserProfileAccountDetails  />
                            <div className="col-md-9 col-sm-12 col-xs-12">
                            <div className="form-style-1 user-pro" action="#">
                                <UserProfileDetails user={user} />
                                   
                                <UserProfileChangePassword/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>

     
    );
}