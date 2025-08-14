import { Link } from "react-router-dom"; 
export default function NotFoundPage() {

    return (
        <div className="page-single-2">
            <div className="container">
                <div className="row">
                    <div className="middle-content">
                        <a href="index-2.html">
                            <img className="md-logo" src="images/logo1.png" alt="" />
                        </a>
                        <img src="images/uploads/err-img.png" alt="" />
                        <h1>Page not found</h1>
                        <a href="/" className="redbtn">
                            go home
                        </a>
                    </div>
                </div>
            </div>
        </div>

    )
}