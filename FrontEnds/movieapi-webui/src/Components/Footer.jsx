export default function Footer() {  
   return (  
       <footer className="ht-footer">  
           <div className="container">  
               <div className="flex-parent-ft">  
                   <div className="flex-child-ft item1">  
                       <a href="index-2.html"><img className="logo" src="images/logo1.png" alt="" /></a>  
                       <p>5th Avenue st, manhattan<br />  
                           New York, NY 10001</p>  
                       <p>Call us: <a href="a">(+01) 202 342 6789</a></p>  
                   </div>  
                   <div className="flex-child-ft item2">  
                       <h4>Resources</h4>  
                       <ul>  
                           <li><a href="a">About</a></li>  
                           <li><a href="a">Blockbuster</a></li>  
                           <li><a href="a">Contact Us</a></li>  
                           <li><a href="a">Forums</a></li>  
                           <li><a href="a">Blog</a></li>  
                           <li><a href="a">Help Center</a></li>  
                       </ul>  
                   </div>  
                   <div className="flex-child-ft item3">  
                       <h4>Legal</h4>  
                       <ul>  
                           <li><a href="a">Terms of Use</a></li>  
                           <li><a href="a">Privacy Policy</a></li>  
                           <li><a href="a">Security</a></li>  
                       </ul>  
                   </div>  
                   <div className="flex-child-ft item4">  
                       <h4>Account</h4>  
                       <ul>  
                           <li><a href="a">My Account</a></li>  
                           <li><a href="a">Watchlist</a></li>  
                           <li><a href="a">Collections</a></li>  
                           <li><a href="a">User Guide</a></li>  
                       </ul>  
                   </div>
                   <div className="flex-child-ft item5">  
                       <h4>Newsletter</h4>  
                       <p>Subscribe to our newsletter system now <br /> to get latest news from us.</p>  
                       <form action="#">  
                           <input type="text" placeholder="Enter your email..." />  
                       </form>  
                       <a href="a" className="btn">Subscribe now <i className="ion-ios-arrow-forward"></i></a>  
                   </div>  
               </div>  
           </div>  
           <div className="ft-copyright">  
               <div className="ft-left">  
                   <p><a target="_blank" href="https://www.templateshub.net">Templates Hub</a></p>  
               </div>  
               <div className="backtotop">  
                   <p><a href="a" id="back-to-top">Back to top  <i className="ion-ios-arrow-thin-up"></i></a></p>  
               </div>  
           </div>  
       </footer>  
   );  
}