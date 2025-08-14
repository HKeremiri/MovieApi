export default function UserProfileChangePassword() {
    return (
        <form action="#" className="password">
            <h4>02. Change password</h4>
            <div className="row">
                <div className="col-md-6 form-it">
                    <label>Old Password</label>
                    <input type="text" placeholder="**********" />
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 form-it">
                    <label>New Password</label>
                    <input type="text" placeholder="***************" />
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 form-it">
                    <label>Confirm New Password</label>
                    <input type="text" placeholder="*************** " />
                </div>
            </div>
            <div className="row">
                <div className="col-md-2">
                    <input
                        className="submit"
                        type="submit"
                        defaultValue="change"
                    />
                </div>
            </div>
        </form>
    );

}