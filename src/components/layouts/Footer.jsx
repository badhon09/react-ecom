import React from 'react'

export const Footer = () => {
  return (
    <footer className="footer">
            <div className="cta bg-image bg-dark pt-4 pb-5 mb-0" >
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-sm-10 col-md-8 col-lg-6">
                            <div className="cta-heading text-center">
                                <h3 className="cta-title text-white">Get The Latest Deals</h3>
                                <p className="cta-desc text-white">and receive <span className="font-weight-normal">$20 coupon</span> for first shopping</p>
                            </div>
                        
                            <form action="#">
                                <div className="input-group input-group-round">
                                    <input type="email" className="form-control form-control-white" placeholder="Enter your Email Address" aria-label="Email Adress" required/>
                                    <div className="input-group-append">
                                        <button className="btn btn-primary" type="submit"><span>Subscribe</span><i className="icon-long-arrow-right"></i></button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        	{/* <div className="footer-middle">
	            <div className="container">
	            	<div className="row">
	            		<div className="col-sm-6 col-lg-3">
	            			<div className="widget widget-about">
	            				<img src="assets/images/demos/demo-4/logo-footer.png" className="footer-logo" alt="Footer Logo" width="105" height="25"/>
	            				<p>Praesent dapibus, neque id cursus ucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. </p>

	            				<div className="widget-call">
                                    <i className="icon-phone"></i>
                                    Got Question? Call us 24/7
                                    <a href="tel:#">+0123 456 789</a>         
                                </div>
	            			</div>
	            		</div>

	            		<div className="col-sm-6 col-lg-3">
	            			<div className="widget">
	            				<h4 className="widget-title">Useful Links</h4>

	            				<ul className="widget-list">
	            					<li><a href="about.html">About Molla</a></li>
                                    <li><a href="#">Our Services</a></li>
	            					<li><a href="#">How to shop on Molla</a></li>
	            					<li><a href="faq.html">FAQ</a></li>
	            					<li><a href="contact.html">Contact us</a></li>
	            				</ul>
	            			</div>
	            		</div>

	            		

	            		
	            	</div>
	            </div>
	        </div> */}

	        <div className="footer-bottom">
	        	<div className="container">
	        		<p className="footer-copyright">Copyright © 2019 Molla Store. All Rights Reserved.</p>
	        		<figure className="footer-payments">
	        			<img src="assets/images/payments.png" alt="Payment methods" width="272" height="20"/>
	        		</figure>
	        	</div>
	        </div>
        </footer>
  )
}
