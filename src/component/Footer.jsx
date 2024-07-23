const Footer = () => {
  return (
    <div>
      {' '}
      {/* =-=-=-=-=-=-= FOOTER =-=-=-=-=-=-= */}
      <footer className="footer-area">
        {/*Footer Upper*/}
        <div className="footer-content">
          <div className="container">
            <div className="row clearfix">
              {/*Two 4th column*/}
              <div className="col-md-6 col-sm-12 col-xs-12">
                <div className="row clearfix">
                  <div className="col-lg-7 col-sm-6 col-xs-12 column">
                    <div className="footer-widget about-widget">
                      <div className="logo">
                        <a href="index.html">
                          <img
                            src="images/logo-1.png"
                            className="img-responsive"
                            alt=""
                          />
                        </a>
                      </div>

                      <ul className="contact-info">
                        <li>
                          <span className="icon fa fa-map-marker"></span> 60
                          Link Road Lhr. Pakistan 54770
                        </li>
                        <li>
                          <span className="icon fa fa-phone"></span> (042)
                          1234567890
                        </li>
                        <li>
                          <span className="icon fa fa-envelope-o"></span>{' '}
                          contant@scriptsbundle.com
                        </li>
                        <li>
                          <span className="icon fa fa-fax"></span> (042) 1234
                          7777
                        </li>
                      </ul>
                      <div className="social-links-two clearfix">
                        {' '}
                        <a href="#" className="facebook img-circle">
                          <span className="fa fa-facebook-f"></span>
                        </a>{' '}
                        <a href="#" className="twitter img-circle">
                          <span className="fa fa-twitter"></span>
                        </a>{' '}
                        <a href="#" className="google-plus img-circle">
                          <span className="fa fa-google-plus"></span>
                        </a>{' '}
                        <a href="#" className="linkedin img-circle">
                          <span className="fa fa-pinterest-p"></span>
                        </a>{' '}
                        <a href="#" className="linkedin img-circle">
                          <span className="fa fa-linkedin"></span>
                        </a>{' '}
                      </div>
                    </div>
                  </div>

                  {/*Footer Column*/}
                  <div className="col-lg-5 col-sm-6 col-xs-12 column">
                    <h2>Our Service</h2>
                    <div className="footer-widget links-widget">
                      <ul>
                        <li>
                          <a href="#">Packaging And Storage</a>
                        </li>
                        <li>
                          <a href="#">worldwide transport</a>
                        </li>
                        <li>
                          <a href="#">Internation Air Freight</a>
                        </li>
                        <li>
                          <a href="#">ground shipping</a>
                        </li>
                        <li>
                          <a href="#">24/7 Support</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/*Two 4th column End*/}

              {/*Two 4th column*/}
              <div className="col-md-6 col-sm-12 col-xs-12">
                <div className="row clearfix">
                  {/*Footer Column*/}
                  <div className="col-lg-7 col-sm-6 col-xs-12 column">
                    <div className="footer-widget news-widget">
                      <h2>Latest News</h2>

                      {/*News Post*/}
                      <div className="news-post">
                        <div className="icon"></div>
                        <div className="news-content">
                          <figure className="image-thumb">
                            <img src="images/blog/popular-2.jpg" alt="" />
                          </figure>
                          <a href="#">
                            top benefits of hiring our professional logistics
                            service
                          </a>
                        </div>
                        <div className="time">June 21, 2016</div>
                      </div>

                      {/*News Post*/}
                      <div className="news-post">
                        <div className="icon"></div>
                        <div className="news-content">
                          <figure className="image-thumb">
                            <img src="images/blog/popular-1.jpg" alt="" />
                          </figure>
                          <a href="#">
                            top benefits of hiring our professional logistics
                            service
                          </a>
                        </div>
                        <div className="time">June 21, 2016</div>
                      </div>
                    </div>
                  </div>

                  {/*Footer Column*/}
                  <div className="col-lg-5 col-sm-6 col-xs-12 column">
                    <div className="footer-widget links-widget">
                      <h2>Site Links</h2>
                      <ul>
                        <li>
                          <a href="/about">About Us</a>
                        </li>

                        <li>
                          <a href="/services">Our Services</a>
                        </li>
                        <li>
                          <a href="/blog">Blog</a>
                        </li>
                        <li>
                          <a href="/contact">Contact Us</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/*Two 4th column End*/}
            </div>
          </div>
        </div>

        {/*Footer Bottom*/}
        <div className="footer-copyright">
          <div className="auto-container clearfix">
            {/*Copyright*/}
            <div className="copyright text-center">
              Copyright 2016 &copy; Theme Created By{' '}
              <a
                target="_blank"
                href="http://themeforest.net/user/scriptsbundle/portfolio"
              >
                Scriptsbundle
              </a>{' '}
              All Rights Reserved
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
