import Wrapper from '../assets/wrapper/Header2';

const Header2 = () => {
  return (
    <Wrapper>
      {' '}
      <header className="header-area">
        {/* <!-- Logo Bar --> */}
        <div className="logo-bar">
          <div className="container clearfix">
            {/* <!-- Logo --> */}
            <div className="logo">
              <a href="index.html">
                <img src="/logo.png" alt="" />
              </a>
            </div>

            {/* <!--Info Outer--> */}
            <div className="information-content">
              {/* <!--Info Box--> */}
              <div className="info-box  hidden-sm">
                <div className="icon">
                  <span class="icon-envelope"></span>
                </div>
                <div className="text">EMAIL</div>
                <a href="mailt:contact@scriptsbundle.com">
                  contact@scriptsbundle.com
                </a>{' '}
              </div>
              {/* <!--Info Box--> */}
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
        {/* <!-- Header Top End --> */}

        {/* <!-- Menu Section --> */}
        <div className="navigation-2">
          {/* <!-- navigation-start --> */}
          <nav className="navbar navbar-default ">
            <div className="container">
              {/* <!-- Brand and toggle get grouped for better mobile display --> */}
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
              {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
              <div class="collapse navbar-collapse" id="main-navigation">
                <ul className="nav navbar-nav">
                  <li className="dropdown active">
                    {' '}
                    <a
                      class="dropdown-toggle "
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
                  <li className="dropdown  hidden-sm">
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
              {/* <!-- /.navbar-collapse --> */}
            </div>
            {/* <!-- /.container-end --> */}
          </nav>
        </div>
        {/* <!-- /.navigation-end --> */}
        {/* <!-- Menu  End --> */}
      </header>
    </Wrapper>
  );
};
export default Header2;
