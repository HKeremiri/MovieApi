import UserProfileDetails from "../Components/UserProfileDetails";
import UserProfileChangePassword from "../Components/UserProfileChangePassword";
import UserProfileAccountDetails from "../Components/UserProfileAccountDetails";
import { useAuth } from "../Contexts/AuthContext";
import Hero from "../Components/Hero";
export default function UserProfilePage() {
    const { user, loading } = useAuth();
    console.log(user);
    if (loading) return <div>Loading...</div>;
    if (!user) return <div>Please login</div>;
    return (
        <>
           
            <Hero
                title="My Profile"
                crumbs={[{ label: 'My Profile', href: '/' }, { label: 'My Profile' }]}
                backgroundImage="/images/uploads/slider-bg.jpg"
            />
                <div className="page-single">
                    <div className="container">
                    <div className="row ipad-width">
                        <UserProfileAccountDetails imgUrl={user.imgUrl } />
                            <div className="col-md-9 col-sm-12 col-xs-12">
                            <div className="form-style-1 user-pro">
                                <UserProfileDetails  />

                                <UserProfileChangePassword  />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>

     
    );
}