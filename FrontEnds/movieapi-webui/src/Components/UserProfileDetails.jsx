export default function UserProfileDetails({ user }) {
    if (!user) return <p>Loading...</p>;

    return (
        <form className="user">
            <h4>01. Profile details</h4>

            <div className="row">
                <div className="col-md-6 form-it">
                    <label>User Name</label>
                    <input type="text" value={user.userName || ""}  />
                </div>
                <div className="col-md-6 form-it">
                    <label>Email Address</label>
                    <input type="text" value={user.email || ""}  />
                </div>
            </div>

            <div className="row">
                <div className="col-md-2">
                    <input className="submit" type="submit" value="Save"  />
                </div>
            </div>
        </form>
    );
}
