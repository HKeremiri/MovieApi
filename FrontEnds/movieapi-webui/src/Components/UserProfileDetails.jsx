export default function UserProfileDetails() {
    return (
     
        <form action="#" className="user">
            <h4>01. Profile details</h4>
            <div className="row">
                <div className="col-md-6 form-it">
                    <label>Username</label>
                    <input type="text" placeholder="edwardkennedy" />
                </div>
                <div className="col-md-6 form-it">
                    <label>Email Address</label>
                    <input type="text" placeholder="edward@kennedy.com" />
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 form-it">
                    <label>First Name</label>
                    <input type="text" placeholder="Edward " />
                </div>
                <div className="col-md-6 form-it">
                    <label>Last Name</label>
                    <input type="text" placeholder="Kennedy" />
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 form-it">
                    <label>Country</label>
                    <select>
                        <option value="united">United States</option>
                        <option value="saab">Others</option>
                    </select>
                </div>
                <div className="col-md-6 form-it">
                    <label>State</label>
                    <select>
                        <option value="united">New York</option>
                        <option value="saab">Others</option>
                    </select>
                </div>
            </div>
            <div className="row">
                <div className="col-md-2">
                    <input className="submit" type="submit" defaultValue="save" />
                </div>
            </div>
        </form>
      
    );
}