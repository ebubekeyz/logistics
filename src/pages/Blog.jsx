const Blog = () => {
  return (
    <div>
      {/* =-=-=-=-=-=-= PRELOADER =-=-=-=-=-=-= */}
      <div className="preloader">
        <span className="preloader-gif"></span>
      </div>

      {/* =-=-=-=-=-=-= Color Switcher =-=-=-=-=-=-= */}
      <div className="color-switcher" id="choose_color">
        {' '}
        <a href="#." className="picker_close">
          <i className="fa fa-gear"></i>
        </a>
        <h5>STYLE SWITCHER</h5>
        <div className="theme-colours">
          <p> Choose Colour style </p>
          <ul>
            <li>
              <a href="#." className="defualt" id="defualt"></a>
            </li>
            <li>
              <a href="#." className="red" id="red"></a>
            </li>
            <li>
              <a href="#." className="green" id="green"></a>
            </li>
            <li>
              <a href="#." className="orange" id="orange"></a>
            </li>
            <li>
              <a href="#." className="purple" id="purple"></a>
            </li>
            <li>
              <a href="#." className="yellow" id="yellow"></a>
            </li>
          </ul>
        </div>
        <div className="clr"> </div>
      </div>

      {/* =-=-=-=-=-=-= HEADER =-=-=-=-=-=-= */}
      <section className="top-bar">
        <div className="container">
          <div className="left-text nav-left pull-left">
            <p>
              <span>Opening Hours :</span> Monday to Saturday - 8am to 5pm
            </p>
          </div>
          {/* /.left-text */}
          <ul className="nav-right pull-right list-unstyled">
            <li>
              {' '}
              <a href="login.html">
                <i className="fa fa-lock"></i> Login{' '}
              </a>
            </li>
            <li>
              {' '}
              <a href="sign-up.html">
                <i className="fa fa-user"></i> Sign Up{' '}
              </a>
            </li>
            <li className="dropdown nav-profile">
              <a
                className="dropdown-toggle"
                data-hover="dropdown"
                data-toggle="dropdown"
                data-animations="fadeInUp"
              >
                <img
                  className="img-circle resize"
                  alt=""
                  src="images/avatar.jpg"
                />
                <span className="hidden-xs small-padding">
                  {' '}
                  <span>Umair</span> <i className="fa fa-caret-down"></i>
                </span>
              </a>
              <ul className="dropdown-menu with-arrow pull-right">
                <li>
                  {' '}
                  <a href="profile.html">
                    {' '}
                    <i className="fa fa-user"></i> <span>My Profile</span>{' '}
                  </a>{' '}
                </li>
                <li>
                  {' '}
                  <a href="history.html">
                    {' '}
                    <i className="fa fa-check"></i>{' '}
                    <span>Tracking History</span>{' '}
                  </a>{' '}
                </li>
                <li>
                  {' '}
                  <a href="javascript:void(0)">
                    {' '}
                    <i className="fa fa-lock"></i> <span>Payment Setting</span>{' '}
                  </a>{' '}
                </li>
                <li>
                  {' '}
                  <a href="javascript:void(0)">
                    {' '}
                    <i className="fa fa-sign-out"></i> <span>Log Out</span>{' '}
                  </a>{' '}
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </section>
      <header className="header-area">
        {/* Logo Bar */}
        <div className="logo-bar">
          <div className="container clearfix">
            {/* Logo */}
            <div className="logo">
              <a href="index.html">
                <img src="images/logo.png" alt="" />
              </a>
            </div>

            {/*Info Outer*/}
            <div className="information-content">
              {/*Info Box*/}
              <div className="info-box  hidden-sm">
                <div className="icon">
                  <span className="icon-envelope"></span>
                </div>
                <div className="text">EMAIL</div>
                <a href="mailt:contact@scriptsbundle.com">
                  contact@scriptsbundle.com
                </a>{' '}
              </div>
              {/*Info Box*/}
              <div className="info-box">
                <div className="icon">
                  <span className="icon-phone"></span>
                </div>
                <div className="text">Call Now</div>
                <a className="location" href="#">
                  (92) 123-456-78
                </a>{' '}
              </div>
              <div className="info-box">
                <div className="icon">
                  <span className="icon-map-pin"></span>
                </div>
                <div className="text">Find Us</div>
                <a className="location" href="#">
                  Model Town, Pakistan{' '}
                </a>{' '}
              </div>
            </div>
          </div>
        </div>
        {/* Header Top End */}

        {/* Menu Section */}
        <div className="navigation-2">
          {/* navigation-start */}
          <nav className="navbar navbar-default ">
            <div className="container">
              {/* Brand and toggle get grouped for better mobile display */}
              <div className="navbar-header">
                <button
                  type="button"
                  className="navbar-toggle collapsed"
                  data-toggle="collapse"
                  data-target="#main-navigation"
                  aria-expanded="false"
                >
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
              </div>
              {/* Collect the nav links, forms, and other content for toggling */}
              <div className="collapse navbar-collapse" id="main-navigation">
                <ul className="nav navbar-nav">
                  <li className="dropdown">
                    {' '}
                    <a
                      className="dropdown-toggle "
                      data-hover="dropdown"
                      data-toggle="dropdown"
                      data-animations="fadeInUp"
                    >
                      Home <span className="fa fa-angle-down"></span>
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a href="index.html">Home </a>{' '}
                      </li>
                      <li>
                        <a href="index-2.html">Home Page 2</a>{' '}
                      </li>
                      <li>
                        <a href="index-3.html">Home Page 3 (Video Bg)</a>{' '}
                      </li>
                      <li>
                        <a href="index-5.html">Home Order Tracking</a>{' '}
                      </li>
                      <li>
                        <a href="index-4.html">Home Order Tracking 2</a>{' '}
                      </li>
                      <li>
                        <a href="one-page.html">One Page </a>{' '}
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a
                      className="dropdown-toggle"
                      data-hover="dropdown"
                      data-toggle="dropdown"
                      data-animations="fadeInUp"
                    >
                      About Company <span className="fa fa-angle-down"></span>
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a href="about.html">About </a>{' '}
                      </li>
                      <li>
                        <a href="about-1.html">About 2</a>{' '}
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown ">
                    {' '}
                    <a
                      className="dropdown-toggle"
                      data-hover="dropdown"
                      data-toggle="dropdown"
                      data-animations="fadeInUp"
                    >
                      Our Service <span className="fa fa-angle-down"></span>
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a href="services.html">Services</a>{' '}
                      </li>
                      <li>
                        <a href="services-2.html">Services 2</a>{' '}
                      </li>
                      <li>
                        <a href="services-3.html">Services 3</a>{' '}
                      </li>
                      <li>
                        <a href="services-4.html">Services 4 (Sticky Bar)</a>{' '}
                      </li>
                      <li>
                        <a href="services-details.html">Services Detail</a>{' '}
                      </li>
                    </ul>
                  </li>
                  <li className="hidden-sm">
                    <a href="gallery.html">Gallery</a>
                  </li>
                  <li className="dropdown active hidden-sm">
                    <a
                      className="dropdown-toggle"
                      data-hover="dropdown"
                      data-toggle="dropdown"
                      data-animations="fadeInUp"
                    >
                      Blog <span className="fa fa-angle-down"></span>
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a href="blog.html">Grid View </a>{' '}
                      </li>
                      <li>
                        <a href="blog-1.html">Right Sidebar With 2 Column</a>{' '}
                      </li>
                      <li>
                        <a href="blog-2.html">Left Sidebar With 2 Column</a>{' '}
                      </li>
                      <li>
                        <a href="blog-3.html">Masonry Grid</a>{' '}
                      </li>
                      <li>
                        <a href="blog-detail.html">Post With Slider</a>{' '}
                      </li>
                      <li>
                        <a href="blog-detail-2.html">Post With Static Bg</a>{' '}
                      </li>
                      <li>
                        <a href="blog-detail-3.html">Post Full Width</a>{' '}
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    {' '}
                    <a
                      className="dropdown-toggle"
                      data-hover="dropdown"
                      data-toggle="dropdown"
                      data-animations="fadeInUp"
                    >
                      Pages <span className="fa fa-angle-down"></span>
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a href="404.html">Error Page</a>{' '}
                      </li>
                      <li>
                        <a href="team.html">Our Team </a>{' '}
                      </li>
                      <li>
                        <a href="icons.html">Icons</a>{' '}
                      </li>
                      <li>
                        <a href="flat-icons.html">Flat Icons</a>{' '}
                      </li>
                      <li>
                        <a href="gallery.html">Gallery</a>
                      </li>
                      <li>
                        <a href="login.html">Sign In</a>
                      </li>
                      <li>
                        <a href="sign-up.html">Sign Up</a>
                      </li>
                      <li>
                        <a href="profile.html">Profile</a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    {' '}
                    <a
                      className="dropdown-toggle"
                      data-hover="dropdown"
                      data-toggle="dropdown"
                      data-animations="fadeInUp"
                    >
                      Cargo Tracking <span className="fa fa-angle-down"></span>
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a href="index-5.html">Tracking Landing Page</a>{' '}
                      </li>
                      <li>
                        <a href="index-4.html">Tracking classNameic Page </a>{' '}
                      </li>
                      <li>
                        <a href="history.html">Tracking Order History</a>{' '}
                      </li>
                      <li>
                        <a href="online-booking.html">Cargo Booking</a>{' '}
                      </li>
                    </ul>
                  </li>
                </ul>
                <a
                  href="online-booking.html"
                  className="btn btn-primary pull-right"
                >
                  Cargo Booking
                </a>{' '}
              </div>
              {/* /.navbar-collapse */}
            </div>
            {/* /.container-end */}
          </nav>
        </div>
        {/* /.navigation-end */}
        {/* Menu  End */}
      </header>
      {/* =-=-=-=-=-=-= HEADER END =-=-=-=-=-=-= */}

      {/* =-=-=-=-=-=-= PAGE BREADCRUMB =-=-=-=-=-=-= */}
      <section className="breadcrumbs-area parallex">
        <div className="container">
          <div className="row">
            <div className="page-title">
              <div className="col-sm-12 col-md-6 page-heading text-left">
                <h3>Our feeds </h3>
                <h2>Latest News</h2>
              </div>
              <div className="col-sm-12 col-md-6 text-right">
                <ul className="breadcrumbs">
                  <li>
                    <a href="#">home</a>
                  </li>
                  <li>
                    <a href="#">pages</a>
                  </li>
                  <li>
                    <a href="#">blog</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* =-=-=-=-=-=-= PAGE BREADCRUMB END =-=-=-=-=-=-= */}

      {/* =-=-=-=-=-=-= Blog & News =-=-=-=-=-=-= */}
      <section id="blog" className="custom-padding">
        <div className="container">
          {/* Row */}
          <div className="row">
            <div className="col-sm-12 col-xs-12 col-md-12">
              {/* blog-grid */}
              <div className="col-md-4 col-sm-12 col-xs-12">
                <div className="news-box">
                  <div className="news-thumb">
                    <a href="blog-detail.html">
                      <img
                        alt=""
                        className="img-responsive"
                        src="images/blog/1.jpg"
                      />
                    </a>
                    <div className="date">
                      {' '}
                      <strong>21</strong>
                      <span>Jun</span>{' '}
                    </div>
                  </div>
                  <div className="news-detail">
                    <h2>
                      <a title="" href="blog-detail.html">
                        top benefits of hiring our logistics service
                      </a>
                    </h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo enean dolor sit amet, consectetuer.
                    </p>
                    <div className="entry-footer">
                      <div className="post-meta">
                        <div className="post-admin">
                          {' '}
                          <i className="icon-profile-male"></i>Posted by
                          <a href="#">Admin</a>{' '}
                        </div>
                        <div className="post-comment">
                          {' '}
                          <i className="icon-chat"></i> <a href="#">217</a>{' '}
                        </div>
                        <div className="post-like">
                          {' '}
                          <i className="icon-heart"></i> <a href="#">130</a>{' '}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* blog-grid end */}

              {/* blog-grid */}
              <div className="col-md-4 col-sm-12 col-xs-12">
                <div className="news-box">
                  <div className="news-thumb">
                    <a href="blog-detail.html">
                      <img
                        alt=""
                        className="img-responsive"
                        src="images/blog/2.jpg"
                      />
                    </a>
                    <div className="date">
                      {' '}
                      <strong>21</strong>
                      <span>Jun</span>{' '}
                    </div>
                  </div>
                  <div className="news-detail">
                    <h2>
                      <a title="" href="blog-detail.html">
                        top benefits of hiring our logistics service
                      </a>
                    </h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo enean dolor sit amet, consectetuer.
                    </p>
                    <div className="entry-footer">
                      <div className="post-meta">
                        <div className="post-admin">
                          {' '}
                          <i className="icon-profile-male"></i>Posted by
                          <a href="#">Admin</a>{' '}
                        </div>
                        <div className="post-comment">
                          {' '}
                          <i className="icon-chat"></i> <a href="#">217</a>{' '}
                        </div>
                        <div className="post-like">
                          {' '}
                          <i className="icon-heart"></i> <a href="#">130</a>{' '}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* blog-grid end */}

              {/* blog-grid */}
              <div className="col-md-4 col-sm-12 col-xs-12">
                <div className="news-box">
                  <div className="news-thumb">
                    <a href="blog-detail.html">
                      <img
                        className="img-responsive"
                        alt=""
                        src="images/blog/3.jpg"
                      />
                    </a>
                    <div className="date">
                      {' '}
                      <strong>21</strong>
                      <span>Jun</span>{' '}
                    </div>
                  </div>
                  <div className="news-detail">
                    <h2>
                      <a title="" href="blog-detail.html">
                        top benefits of hiring our logistics service
                      </a>
                    </h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo enean dolor sit amet, consectetuer.
                    </p>
                    <div className="entry-footer">
                      <div className="post-meta">
                        <div className="post-admin">
                          {' '}
                          <i className="icon-profile-male"></i>Posted by
                          <a href="#">Admin</a>{' '}
                        </div>
                        <div className="post-comment">
                          {' '}
                          <i className="icon-chat"></i> <a href="#">217</a>{' '}
                        </div>
                        <div className="post-like">
                          {' '}
                          <i className="icon-heart"></i> <a href="#">130</a>{' '}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* blog-grid end */}

              <div className="clearfix"></div>

              {/* blog-grid */}
              <div className="col-md-4 col-sm-12 col-xs-12">
                <div className="news-box">
                  <div className="news-thumb">
                    <a href="blog-detail.html">
                      <img
                        alt=""
                        className="img-responsive"
                        src="images/blog/4.jpg"
                      />
                    </a>
                    <div className="date">
                      {' '}
                      <strong>21</strong>
                      <span>Jun</span>{' '}
                    </div>
                  </div>
                  <div className="news-detail">
                    <h2>
                      <a title="" href="blog-detail.html">
                        top benefits of hiring our logistics service
                      </a>
                    </h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo enean dolor sit amet, consectetuer.
                    </p>
                    <div className="entry-footer">
                      <div className="post-meta">
                        <div className="post-admin">
                          {' '}
                          <i className="icon-profile-male"></i>Posted by
                          <a href="#">Admin</a>{' '}
                        </div>
                        <div className="post-comment">
                          {' '}
                          <i className="icon-chat"></i> <a href="#">217</a>{' '}
                        </div>
                        <div className="post-like">
                          {' '}
                          <i className="icon-heart"></i> <a href="#">130</a>{' '}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* blog-grid end */}

              {/* blog-grid */}
              <div className="col-md-4 col-sm-12 col-xs-12">
                <div className="news-box">
                  <div className="news-thumb">
                    <a href="blog-detail.html">
                      <img
                        alt=""
                        className="img-responsive"
                        src="images/blog/8.jpg"
                      />
                    </a>
                    <div className="date">
                      {' '}
                      <strong>21</strong>
                      <span>Jun</span>{' '}
                    </div>
                  </div>
                  <div className="news-detail">
                    <h2>
                      <a title="" href="blog-detail.html">
                        top benefits of hiring our logistics service
                      </a>
                    </h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo enean dolor sit amet, consectetuer.
                    </p>
                    <div className="entry-footer">
                      <div className="post-meta">
                        <div className="post-admin">
                          {' '}
                          <i className="icon-profile-male"></i>Posted by
                          <a href="#">Admin</a>{' '}
                        </div>
                        <div className="post-comment">
                          {' '}
                          <i className="icon-chat"></i> <a href="#">217</a>{' '}
                        </div>
                        <div className="post-like">
                          {' '}
                          <i className="icon-heart"></i> <a href="#">130</a>{' '}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* blog-grid end */}

              {/* blog-grid */}
              <div className="col-md-4 col-sm-12 col-xs-12">
                <div className="news-box">
                  <div className="news-thumb">
                    <a href="blog-detail.html">
                      <img
                        className="img-responsive"
                        alt=""
                        src="images/blog/6.jpg"
                      />
                    </a>
                    <div className="date">
                      {' '}
                      <strong>21</strong>
                      <span>Jun</span>{' '}
                    </div>
                  </div>
                  <div className="news-detail">
                    <h2>
                      <a title="" href="blog-detail.html">
                        top benefits of hiring our logistics service
                      </a>
                    </h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo enean dolor sit amet, consectetuer.
                    </p>
                    <div className="entry-footer">
                      <div className="post-meta">
                        <div className="post-admin">
                          {' '}
                          <i className="icon-profile-male"></i>Posted by
                          <a href="#">Admin</a>{' '}
                        </div>
                        <div className="post-comment">
                          {' '}
                          <i className="icon-chat"></i> <a href="#">217</a>{' '}
                        </div>
                        <div className="post-like">
                          {' '}
                          <i className="icon-heart"></i> <a href="#">130</a>{' '}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* blog-grid end */}

              <div className="clearfix"></div>

              {/* Pagination */}
              <div className="text-center clearfix">
                <ul className="pagination ">
                  <li>
                    <a aria-label="Previous" href="#">
                      <span aria-hidden="true">&lt;</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">1</a>
                  </li>
                  <li className="active">
                    <a href="#">2</a>
                  </li>
                  <li>
                    <a href="#">3</a>
                  </li>
                  <li>
                    <a aria-label="Next" href="#">
                      <span aria-hidden="true">&gt;</span>
                    </a>
                  </li>
                </ul>
              </div>
              {/* Pagination end */}
            </div>
          </div>

          {/* Row End */}
        </div>
        {/* end container */}
      </section>
      {/* =-=-=-=-=-=-= Blog & News end =-=-=-=-=-=-= */}

      {/* =-=-=-=-=-=-= Call To Action =-=-=-=-=-=-= */}
      <div className="parallex-small ">
        <div className="container">
          <div className="row custom-padding-20 ">
            {' '}
            <div className="col-md-8 col-sm-8">
              <div className="parallex-text">
                <h4>Not sure which solution fits you business needs?</h4>
              </div>
              {/* end subsection-text */}
            </div>
            {/* end col-md-8 */}
            <div className="col-md-4 col-sm-4">
              <div className="parallex-button">
                {' '}
                <a href="javascript:void(0)" className="btn btn-lg btn-clean">
                  Get a quote <i className="fa fa-angle-double-right "></i>
                </a>{' '}
              </div>
              {/* end parallex-button */}
            </div>
            {/* end col-md-4 */}
          </div>
          {/* end row */}
        </div>
        {/* end container */}
      </div>
      {/* =-=-=-=-=-=-= Call To Action End =-=-=-=-=-=-= */}

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
                          <a href="about.html">About Us</a>
                        </li>
                        <li>
                          <a href="team.html">Our Team</a>
                        </li>
                        <li>
                          <a href="services.html">Our Services</a>
                        </li>
                        <li>
                          <a href="index-7.html">Blog</a>
                        </li>
                        <li>
                          <a href="contact.html">Contact Us</a>
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

      {/* =-=-=-=-=-=-= Quote Modal =-=-=-=-=-=-= */}
      <div
        data-target="#request-quote"
        data-toggle="modal"
        className="quote-button hidden-xs"
      >
        <a className="btn btn-primary" href="javascript:void(0)">
          <i className="fa fa-envelope"></i>
        </a>
      </div>
      {/* =-=-=-=-=-=-= Quote Modal End =-=-=-=-=-=-= */}

      {/* =-=-=-=-=-=-= JQUERY =-=-=-=-=-=-= */}
      <script src="js/jquery.min.js"></script>
      {/* Bootstrap Core Css  */}
      <script src="js/bootstrap.min.js"></script>
      {/* Dropdown Hover  */}
      <script src="js/bootstrap-dropdownhover.min.js"></script>
      {/* Jquery Easing */}
      <script type="text/javascript" src="js/easing.js"></script>
      {/* Jquery Counter */}
      <script src="js/jquery.countTo.js"></script>
      {/* Jquery Waypoints */}
      <script src="js/jquery.waypoints.js"></script>
      {/* Jquery Appear Plugin */}
      <script src="js/jquery.appear.min.js"></script>
      {/* Jquery Shuffle Portfolio */}
      <script src="js/jquery.shuffle.min.js"></script>
      {/* Carousel Slider  */}
      <script src="js/carousel.min.js"></script>
      {/* Jquery Migrate */}
      <script src="js/jquery-migrate.min.js"></script>
      {/*Style Switcher */}
      <script src="js/color-switcher.js"></script>
      {/* Gallery Magnify  */}
      <script src="js/magnific-popup/jquery.magnific-popup.min.js"></script>
      {/* Sticky Bar  */}
      <script src="js/theia-sticky-sidebar.js"></script>
      {/* Template Core JS */}
      <script src="js/custom.js"></script>
      {/* =-=-=-=-=-=-= Quote Modal =-=-=-=-=-=-= */}
      <div
        className="modal fade "
        id="request-quote"
        tabindex="-1"
        role="dialog"
        aria-labelledby="myModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              <div className="quotation-box-1">
                <h2>REQUEST A QUOTE</h2>
                <div className="desc-text">
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                  </p>
                </div>
                <form
                  action="https://templates.scriptsbundle.com/logistic-pro/demo/logistic-pro/contact.html"
                  method="post"
                >
                  <div className="row clearfix">
                    {/*Form Group*/}
                    <div className="form-group col-md-6 col-sm-6 col-xs-12">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Your Name"
                        defaultValue=""
                        name="your-name"
                      />
                    </div>
                    {/*Form Group*/}
                    <div className="form-group col-md-6 col-sm-6 col-xs-12">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Subject"
                        defaultValue=""
                        name="your-subject"
                      />
                    </div>
                    {/*Form Group*/}
                    <div className="form-group col-md-12 col-sm-12 col-xs-12">
                      <input
                        className="form-control"
                        type="email"
                        placeholder="Email Address"
                        defaultValue=""
                        name="your-email"
                      />
                    </div>
                    {/*Form Group*/}
                    <div className="form-group col-md-12 col-sm-12 col-xs-12">
                      <select
                        className="quote-select form-control"
                        name="sel-location"
                      >
                        <option>Select Location</option>
                        <option>Afghanistan</option>
                        <option>Albania</option>
                        <option>Algeria</option>
                        <option>American Samoa</option>
                        <option>Andorra</option>
                        <option>Angola</option>
                        <option>Anguilla</option>
                        <option>Antarctica</option>
                        <option>Argentina</option>
                        <option>Armenia</option>
                        <option>Aruba</option>
                        <option>Australia</option>
                        <option>Austria</option>
                        <option>Azerbaijan</option>
                        <option>Bahamas</option>
                        <option>Bahrain</option>
                        <option>Bangladesh</option>
                        <option>Barbados</option>
                        <option>Belarus</option>
                        <option>Belgium</option>
                        <option>Belize</option>
                        <option>Benin</option>
                        <option>Bermuda</option>
                        <option>Bhutan</option>
                        <option>Bolivia</option>
                        <option>Botswana</option>
                        <option>Bouvet Island</option>
                        <option>Brazil</option>
                        <option>Brunei Darussalam</option>
                        <option>Bulgaria</option>
                        <option>Burkina Faso</option>
                        <option>Burundi</option>
                        <option>Cambodia</option>
                        <option>Cameroon</option>
                        <option>Canada</option>
                        <option>Cape Verde</option>
                        <option>Cayman Islands</option>
                        <option>Chad</option>
                        <option>Chile</option>
                        <option>China</option>
                        <option>Christmas Island</option>
                        <option>Cocos Islands</option>
                        <option>Colombia</option>
                        <option>Comoros</option>
                        <option>Congo</option>
                        <option>Cook Islands</option>
                        <option>Costa Rica</option>
                        <option>Cote d'Ivoire</option>
                        <option>Croatia</option>
                        <option>Cuba</option>
                        <option>Cyprus</option>
                        <option>Czech Republic</option>
                        <option>Denmark</option>
                        <option>Djibouti</option>
                        <option>Dominica</option>
                        <option>Dominican Republic</option>
                        <option>Ecuador</option>
                        <option>Egypt</option>
                        <option>El Salvador</option>
                        <option>Equatorial Guinea</option>
                        <option>Eritrea</option>
                        <option>Estonia</option>
                        <option>Ethiopia</option>
                        <option>Faroe Islands</option>
                        <option>Fiji</option>
                        <option>Finland</option>
                        <option>France</option>
                        <option>French Guiana</option>
                        <option>Gabon</option>
                        <option>Gambia</option>
                        <option>Georgia</option>
                        <option>Germany</option>
                        <option>Ghana</option>
                        <option>Gibraltar</option>
                        <option>Greece</option>
                        <option>Greenland</option>
                        <option>Grenada</option>
                        <option>Guadeloupe</option>
                        <option>Guam</option>
                        <option>Guatemala</option>
                        <option>Guinea</option>
                        <option>Guinea-Bissau</option>
                        <option>Guyana</option>
                        <option>Haiti</option>
                        <option>Honduras</option>
                        <option>Hong Kong</option>
                        <option>Hungary</option>
                        <option>Iceland</option>
                        <option>India</option>
                        <option>Indonesia</option>
                        <option>Iran</option>
                        <option>Iraq</option>
                        <option>Ireland</option>
                        <option>Israel</option>
                        <option>Italy</option>
                        <option>Jamaica</option>
                        <option>Japan</option>
                        <option>Jordan</option>
                        <option>Kazakhstan</option>
                        <option>Kenya</option>
                        <option>Kiribati</option>
                        <option>Kuwait</option>
                        <option>Kyrgyzstan</option>
                        <option>Laos</option>
                        <option>Latvia</option>
                        <option>Lebanon</option>
                        <option>Lesotho</option>
                        <option>Liberia</option>
                        <option>Libya</option>
                        <option>Liechtenstein</option>
                        <option>Lithuania</option>
                        <option>Luxembourg</option>
                        <option>Macao</option>
                        <option>Madagascar</option>
                        <option>Malawi</option>
                        <option>Malaysia</option>
                        <option>Maldives</option>
                        <option>Mali</option>
                        <option>Malta</option>
                        <option>Marshall Islands</option>
                        <option>Martinique</option>
                        <option>Mauritania</option>
                        <option>Mauritius</option>
                        <option>Mayotte</option>
                        <option>Mexico</option>
                        <option>Micronesia</option>
                        <option>Moldova</option>
                        <option>Monaco</option>
                        <option>Mongolia</option>
                        <option>Montenegro</option>
                        <option>Montserrat</option>
                        <option>Morocco</option>
                        <option>Mozambique</option>
                        <option>Myanmar</option>
                        <option>Namibia</option>
                        <option>Nauru</option>
                        <option>Nepal</option>
                        <option>Netherlands</option>
                        <option>New Caledonia</option>
                        <option>New Zealand</option>
                        <option>Nicaragua</option>
                        <option>Niger</option>
                        <option>Nigeria</option>
                        <option>Norfolk Island</option>
                        <option>North Korea</option>
                        <option>Norway</option>
                        <option>Oman</option>
                        <option>Pakistan</option>
                        <option>Palau</option>
                        <option>Panama</option>
                        <option>Papua New Guinea</option>
                        <option>Paraguay</option>
                        <option>Peru</option>
                        <option>Philippines</option>
                        <option>Pitcairn</option>
                        <option>Poland</option>
                        <option>Portugal</option>
                        <option>Puerto Rico</option>
                        <option>Qatar</option>
                        <option>Romania</option>
                        <option>Russian Federation</option>
                        <option>Rwanda</option>
                        <option>Saint Helena</option>
                        <option>Saint Lucia</option>
                        <option>Samoa</option>
                        <option>San Marino</option>
                        <option>Sao Tome and Principe</option>
                        <option>Saudi Arabia</option>
                        <option>Senegal</option>
                        <option>Serbia</option>
                        <option>Seychelles</option>
                        <option>Sierra Leone</option>
                        <option>Singapore</option>
                        <option>Slovakia</option>
                        <option>Slovenia</option>
                        <option>Solomon Islands</option>
                        <option>Somalia</option>
                        <option>South Africa</option>
                        <option>South Georgia</option>
                        <option>South Korea</option>
                        <option>Spain</option>
                        <option>Sri Lanka</option>
                        <option>Sudan</option>
                        <option>Suriname</option>
                        <option>Swaziland</option>
                        <option>Sweden</option>
                        <option>Switzerland</option>
                        <option>Taiwan</option>
                        <option>Tajikistan</option>
                        <option>Tanzania</option>
                        <option>Thailand</option>
                        <option>Timor-Leste</option>
                        <option>Togo</option>
                        <option>Tokelau</option>
                        <option>Tonga</option>
                        <option>Tunisia</option>
                        <option>Turkey</option>
                        <option>Turkmenistan</option>
                        <option>Tuvalu</option>
                        <option>Uganda</option>
                        <option>Ukraine</option>
                        <option>United Arab Emirates</option>
                        <option>United Kingdom</option>
                        <option>United States</option>
                        <option>Uruguay</option>
                        <option>Uzbekistan</option>
                        <option>Vanuatu</option>
                        <option>Vatican City</option>
                        <option>Venezuela</option>
                        <option>Vietnam</option>
                        <option>Wallis and Futuna</option>
                        <option>Western Sahara</option>
                        <option>Yemen</option>
                        <option>Zambia</option>
                        <option>Zimbabwe</option>
                      </select>
                    </div>
                    {/*Form Group*/}
                    <div className="form-group col-md-12 col-sm-12 col-xs-12">
                      <textarea
                        className="form-control"
                        rows="7"
                        cols="20"
                        placeholder="Your Message"
                        name="your-message"
                      ></textarea>
                    </div>
                    {/*Form Group*/}
                    <div className="form-group col-md-12 col-sm-12 col-xs-12 text-right">
                      {' '}
                      <a className="custom-button light">Submit Request</a>{' '}
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* /.modal-content */}
        </div>
        {/* /.modal-dialog */}
      </div>
      {/* =-=-=-=-=-=-= Quote Modal End =-=-=-=-=-=-= */}
    </div>
  );
};
export default Blog;
