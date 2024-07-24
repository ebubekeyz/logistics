const Header = () => {
  return (
    <div>
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
              <a href="/login">
                <i className="fa fa-lock"></i> Login{' '}
              </a>
            </li>
            <li>
              {' '}
              <a href="/register">
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
                  <a href="/profile">
                    {' '}
                    <i className="fa fa-user"></i> <span>My Profile</span>{' '}
                  </a>{' '}
                </li>
                <li>
                  {' '}
                  <a href="/history">
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
                  <li className="dropdown active">
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
                        <a href="/">Home </a>{' '}
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
                        <a href="/about">About </a>{' '}
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
                        <a href="/services">Services</a>{' '}
                      </li>
                    </ul>
                  </li>
                  <li className="hidden-sm">
                    <a href="/gallery">Gallery</a>
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
                        <a href="/blog">Blog </a>{' '}
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
                        <a href="/history">Track Order</a>{' '}
                      </li>
                    </ul>
                  </li>
                </ul>
                <a href="/booking" className="btn btn-primary pull-right">
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
    </div>
  );
};
export default Header;
