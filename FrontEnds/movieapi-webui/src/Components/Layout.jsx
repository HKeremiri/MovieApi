import Header from './Header';
import Footer from './Footer';
import { useState, useEffect } from 'react';
import Scripts from './Scripts';
import LoginPopup from './LoginPopup';
import SignupPopup from './SignupPopup';
import { Outlet } from 'react-router-dom';
export default function Layout({children}) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // sayfa tamamen yüklendiðinde
        window.addEventListener('load', () => {
            setLoading(false);
        });

        // Yedek olarak 2 saniye sonra otomatik kapansýn
        const timer = setTimeout(() => setLoading(false), 250);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    return (
        <>
            {loading && (
                <div id="preloader">
                    <img className="logo" src="images/logo1.png" alt="" width="119" height="58" />
                    <div id="status">
                        <span></span>
                        <span></span>
                    </div>
                </div>
            )}
           <LoginPopup />
            <SignupPopup />
            <Header />
            <Outlet/>
            <Footer />
            <Scripts />
        </>
    );
}