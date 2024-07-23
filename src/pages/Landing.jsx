const Landing = () => {
  return (
    <>
      {/* {/* =-=-=-=-=-=-= PRELOADER =-=-=-=-=-=-= */}
      <div className="preloader">
        <span className="preloader-gif"></span>
      </div>

      {/* {/* =-=-=-=-=-=-= Color Switcher =-=-=-=-=-=-= */}
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
                        <a href="/history">Tracking Landing Page</a>{' '}
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

      {/* =-=-=-=-=-=-= HOME SLIDER =-=-=-=-=-=-= */}
      <div className="rev_slider_wrapper">
        <div className="rev_slider" data-version="5.0">
          <ul>
            {/* SLIDE 1 */}
            <li
              data-index="rs-4"
              data-transition="slidingoverlayhorizontal"
              data-slotamount="default"
              data-easein="default"
              data-easeout="default"
              data-masterspeed="default"
              data-thumb="images/slider/thumb-1.jpg"
              data-rotate="0"
              data-saveperformance="off"
              data-title="Web Show"
              data-description=""
            >
              {/* MAIN IMAGE */}
              <img
                src="images/slider/1.jpg"
                alt=""
                data-bgposition="center center"
                data-bgfit="cover"
                data-bgrepeat="no-repeat"
                className="rev-slidebg"
                data-bgparallax="6"
                data-no-retina
              />
              {/* LAYERS */}

              {/* LAYER NR. 1 */}
              <div
                className="tp-caption tp-resizeme text-white text-uppercase"
                id="rs-3-layer-1"
                data-x="['left']"
                data-hoffset="['30']"
                data-y="['middle']"
                data-voffset="['-125']"
                data-fontsize="['26']"
                data-lineheight="['64']"
                data-width="none"
                data-height="none"
                data-whitespace="nowrap"
                data-transform_idle="o:1;s:500"
                data-transform_in="y:100;scaleX:1;scaleY:1;opacity:0;"
                data-transform_out="x:left(R);s:1000;e:Power3.easeIn;s:1000;e:Power3.easeIn;"
                data-mask_in="x:0px;y:0px;s:inherit;e:inherit;"
                data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;"
                data-start="1000"
                data-splitin="none"
                data-splitout="none"
                data-responsive_offset="on"
                style={{ zIndex: '5', whiteSpace: 'nowrap', fontWeight: '700' }}
              >
                Ground or Air
              </div>

              {/* LAYER NR. 2 */}
              <div
                className="tp-caption tp-resizeme text-uppercase text-white font-merry"
                id="rs-3-layer-2"
                data-x="['left']"
                data-hoffset="['30']"
                data-y="['middle']"
                data-voffset="['-60']"
                data-fontsize="['40']"
                data-lineheight="['84']"
                data-width="none"
                data-height="none"
                data-whitespace="nowrap"
                data-transform_idle="o:1;s:500"
                data-transform_in="y:100;scaleX:1;scaleY:1;opacity:0;"
                data-transform_out="x:left(R);s:1000;e:Power3.easeIn;s:1000;e:Power3.easeIn;"
                data-mask_in="x:0px;y:0px;s:inherit;e:inherit;"
                data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;"
                data-start="1000"
                data-splitin="none"
                data-splitout="none"
                data-responsive_offset="on"
                style={{ zIndex: '5', whiteSpace: 'nowrap', fontWeight: '600' }}
              >
                <span className="text-white">Providing Logistic Services </span>
              </div>

              {/* LAYER NR. 2 */}

              {/* LAYER NR. 3 */}
              <div
                className="tp-caption tp-resizeme text-white"
                id="rs-3-layer-3"
                data-x="['left']"
                data-hoffset="['30']"
                data-y="['middle']"
                data-voffset="['20']"
                data-fontsize="['18']"
                data-lineheight="['34']"
                data-width="none"
                data-height="none"
                data-whitespace="nowrap"
                data-transform_idle="o:1;s:500"
                data-transform_in="y:100;scaleX:1;scaleY:1;opacity:0;"
                data-transform_out="x:left(R);s:1000;e:Power3.easeIn;s:1000;e:Power3.easeIn;"
                data-mask_in="x:0px;y:0px;s:inherit;e:inherit;"
                data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;"
                data-start="1400"
                data-splitin="none"
                data-splitout="none"
                data-responsive_offset="on"
                style={{ zIndex: '5', whiteSpace: 'nowrap', fontWeight: '300' }}
              >
                We provides always our best services for our clients and always
                <br /> try to achieve our client's trust and satisfaction.
              </div>

              {/* LAYER NR. 4 */}
              <div
                className="tp-caption tp-resizeme"
                id="rs-3-layer-4"
                data-x="['left']"
                data-hoffset="['30']"
                data-y="['middle']"
                data-voffset="['100']"
                data-width="none"
                data-height="none"
                data-whitespace="nowrap"
                data-transform_idle="o:1;s:500"
                data-transform_in="y:100;scaleX:1;scaleY:1;opacity:0;"
                data-transform_out="x:left(R);s:1000;e:Power3.easeIn;s:1000;e:Power3.easeIn;"
                data-mask_in="x:0px;y:0px;s:inherit;e:inherit;"
                data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;"
                data-start="1600"
                data-splitin="none"
                data-splitout="none"
                data-responsive_offset="on"
                style={{
                  zIndex: '5',
                  whiteSpace: 'nowrap',
                  letterSpacing: '1px',
                }}
              >
                <a className="btn btn-colored btn-lg" href="#">
                  Contact Now
                </a>
              </div>
            </li>

            {/* SLIDE 2 */}
            <li
              data-index="rs-1"
              data-transition="slidingoverlayhorizontal"
              data-slotamount="default"
              data-easein="default"
              data-easeout="default"
              data-masterspeed="default"
              data-thumb="images/slider/thumb-2.jpg"
              data-rotate="0"
              data-saveperformance="off"
              data-title="Web Show"
              data-description=""
            >
              {/* MAIN IMAGE */}
              <img
                src="images/slider/2.jpg"
                alt=""
                data-bgposition="center top"
                data-bgfit="cover"
                data-bgrepeat="no-repeat"
                className="rev-slidebg"
                data-bgparallax="6"
                data-no-retina
              />
              {/* LAYERS */}

              {/* LAYER NR. 1 */}
              <div
                className="tp-caption tp-resizeme text-uppercase text-white "
                id="rs-1-layer-1"
                data-x="['right']"
                data-hoffset="['30']"
                data-y="['middle']"
                data-voffset="['-125']"
                data-fontsize="['26']"
                data-lineheight="['64']"
                data-width="none"
                data-height="none"
                data-whitespace="nowrap"
                data-transform_idle="o:1;s:500"
                data-transform_in="y:100;scaleX:1;scaleY:1;opacity:0;"
                data-transform_out="x:left(R);s:1000;e:Power3.easeIn;s:1000;e:Power3.easeIn;"
                data-mask_in="x:0px;y:0px;s:inherit;e:inherit;"
                data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;"
                data-start="1000"
                data-splitin="none"
                data-splitout="none"
                data-responsive_offset="on"
                style={{ zIndex: '5', whiteSpace: 'nowrap', fontWeight: '700' }}
              >
                We Provide Solutions
              </div>

              {/* LAYER NR. 2 */}
              <div
                className="tp-caption tp-resizeme text-white font-merry  text-uppercase"
                id="rs-1-layer-2"
                data-x="['right']"
                data-hoffset="['30']"
                data-y="['middle']"
                data-voffset="['-60']"
                data-fontsize="['40']"
                data-lineheight="['84']"
                data-width="none"
                data-height="none"
                data-whitespace="nowrap"
                data-transform_idle="o:1;s:500"
                data-transform_in="y:100;scaleX:1;scaleY:1;opacity:0;"
                data-transform_out="x:left(R);s:1000;e:Power3.easeIn;s:1000;e:Power3.easeIn;"
                data-mask_in="x:0px;y:0px;s:inherit;e:inherit;"
                data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;"
                data-start="1000"
                data-splitin="none"
                data-splitout="none"
                data-responsive_offset="on"
                style={{ zIndex: '5', whiteSpace: 'nowrap', fontWeight: '700' }}
              >
                {' '}
                Logistic Services
              </div>

              {/* LAYER NR. 3 */}
              <div
                className="tp-caption tp-resizeme text-right text-white"
                id="rs-1-layer-3"
                data-x="['right']"
                data-hoffset="['30']"
                data-y="['middle']"
                data-voffset="['30']"
                data-fontsize="['18']"
                data-lineheight="['34']"
                data-width="none"
                data-height="none"
                data-whitespace="nowrap"
                data-transform_idle="o:1;s:500"
                data-transform_in="y:100;scaleX:1;scaleY:1;opacity:0;"
                data-transform_out="x:left(R);s:1000;e:Power3.easeIn;s:1000;e:Power3.easeIn;"
                data-mask_in="x:0px;y:0px;s:inherit;e:inherit;"
                data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;"
                data-start="1400"
                data-splitin="none"
                data-splitout="none"
                data-responsive_offset="on"
                style={{ zIndex: '5', whiteSpace: 'nowrap', fontWeight: '400' }}
              >
                We provides always our best services for our clients and always
                <br /> try to achieve our client's trust and satisfaction.
              </div>

              {/* LAYER NR. 4 */}
              <div
                className="tp-caption tp-resizeme"
                id="rs-1-layer-4"
                data-x="['right']"
                data-hoffset="['30']"
                data-y="['middle']"
                data-voffset="['100']"
                data-width="none"
                data-height="none"
                data-whitespace="nowrap"
                data-transform_idle="o:1;s:500"
                data-transform_in="y:100;scaleX:1;scaleY:1;opacity:0;"
                data-transform_out="x:left(R);s:1000;e:Power3.easeIn;s:1000;e:Power3.easeIn;"
                data-mask_in="x:0px;y:0px;s:inherit;e:inherit;"
                data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;"
                data-start="1600"
                data-splitin="none"
                data-splitout="none"
                data-responsive_offset="on"
                style={{
                  zIndex: '5',
                  whiteSpace: 'nowrap',
                  letterSpacing: '1px',
                }}
              >
                <a className="btn btn-colored btn-lg" href="#">
                  Request Quote
                </a>
              </div>
            </li>

            {/* SLIDE 3 */}
            <li
              data-index="rs-2"
              data-transition="slidingoverlayhorizontal"
              data-slotamount="default"
              data-easein="default"
              data-easeout="default"
              data-masterspeed="default"
              data-thumb="images/slider/thumb-3.jpg"
              data-rotate="0"
              data-saveperformance="off"
              data-title="Web Show"
              data-description=""
            >
              {/* MAIN IMAGE */}
              <img
                src="images/slider/3.jpg"
                alt=""
                data-bgposition="center center"
                data-bgfit="cover"
                data-bgrepeat="no-repeat"
                className="rev-slidebg"
                data-bgparallax="6"
                data-no-retina
              />
              {/* LAYERS */}

              {/* LAYER NR. 2 */}
              <div
                className="tp-caption tp-resizeme text-center text-white"
                id="rs-2-layer-2"
                data-x="['center']"
                data-hoffset="['0']"
                data-y="['middle']"
                data-voffset="['-60']"
                data-fontsize="['26']"
                data-lineheight="['64']"
                data-width="none"
                data-height="none"
                data-whitespace="nowrap"
                data-transform_idle="o:1;s:500"
                data-transform_in="y:100;scaleX:1;scaleY:1;opacity:0;"
                data-transform_out="x:left(R);s:1000;e:Power3.easeIn;s:1000;e:Power3.easeIn;"
                data-mask_in="x:0px;y:0px;s:inherit;e:inherit;"
                data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;"
                data-start="1000"
                data-splitin="none"
                data-splitout="none"
                data-responsive_offset="on"
                style={{ zIndex: '5', whiteSpace: 'nowrap', fontWeight: '400' }}
              >
                - Providing Services Since 1970 -
              </div>

              {/* LAYER NR. 3 */}
              <div
                className="tp-caption tp-resizeme text-uppercase text-white font-merry"
                id="rs-2-layer-3"
                data-x="['center']"
                data-hoffset="['0']"
                data-y="['middle']"
                data-voffset="['0']"
                data-fontsize="['40']"
                data-lineheight="['80']"
                data-width="none"
                data-height="none"
                data-whitespace="nowrap"
                data-transform_idle="o:1;s:500"
                data-transform_in="y:100;scaleX:1;scaleY:1;opacity:0;"
                data-transform_out="x:left(R);s:1000;e:Power3.easeIn;s:1000;e:Power3.easeIn;"
                data-mask_in="x:0px;y:0px;s:inherit;e:inherit;"
                data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;"
                data-start="1000"
                data-splitin="none"
                data-splitout="none"
                data-responsive_offset="on"
                style={{ zIndex: '5', whiteSpace: 'nowrap', fontWeight: '700' }}
              >
                We Provide Solutions
              </div>

              {/* LAYER NR. 4 */}
              <div
                className="tp-caption tp-resizeme"
                id="rs-2-layer-4"
                data-x="['center']"
                data-hoffset="['0']"
                data-y="['middle']"
                data-voffset="['80']"
                data-width="none"
                data-height="none"
                data-whitespace="nowrap"
                data-transform_idle="o:1;s:500"
                data-transform_in="y:100;scaleX:1;scaleY:1;opacity:0;"
                data-transform_out="x:left(R);s:1000;e:Power3.easeIn;s:1000;e:Power3.easeIn;"
                data-mask_in="x:0px;y:0px;s:inherit;e:inherit;"
                data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;"
                data-start="1400"
                data-splitin="none"
                data-splitout="none"
                data-responsive_offset="on"
                style={{
                  zIndex: '5',
                  whiteSpace: 'nowrap',
                  letterSpacing: '1px',
                }}
              >
                <a className="btn btn-colored  btn-lg" href="#">
                  Contact Now
                </a>
              </div>
            </li>

            {/* SLIDE 4 */}
            <li
              data-index="rs-3"
              data-transition="slidingoverlayhorizontal"
              data-slotamount="default"
              data-easein="default"
              data-easeout="default"
              data-masterspeed="default"
              data-thumb="images/slider/thumb-4.jpg"
              data-rotate="0"
              data-saveperformance="off"
              data-title="Web Show"
              data-description=""
            >
              {/* MAIN IMAGE */}
              <img
                src="images/slider/4.jpg"
                alt=""
                data-bgposition="center center"
                data-bgfit="cover"
                data-bgrepeat="no-repeat"
                className="rev-slidebg"
                data-bgparallax="6"
                data-no-retina
              />
              {/* LAYERS */}

              {/* LAYER NR. 1 */}
              <div
                className="tp-caption tp-resizeme text-white text-uppercase"
                id="rs-3-layer-5"
                data-x="['left']"
                data-hoffset="['30']"
                data-y="['middle']"
                data-voffset="['-125']"
                data-fontsize="['26']"
                data-lineheight="['64']"
                data-width="none"
                data-height="none"
                data-whitespace="nowrap"
                data-transform_idle="o:1;s:500"
                data-transform_in="y:100;scaleX:1;scaleY:1;opacity:0;"
                data-transform_out="x:left(R);s:1000;e:Power3.easeIn;s:1000;e:Power3.easeIn;"
                data-mask_in="x:0px;y:0px;s:inherit;e:inherit;"
                data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;"
                data-start="1000"
                data-splitin="none"
                data-splitout="none"
                data-responsive_offset="on"
                style={{ zIndex: '5', whiteSpace: 'nowrap', fontWeight: '700' }}
              >
                Ground Or Air
              </div>

              {/* LAYER NR. 2 */}
              <div
                className="tp-caption tp-resizeme text-uppercase font-merry"
                id="rs-3-layer-8"
                data-x="['left']"
                data-hoffset="['30']"
                data-y="['middle']"
                data-voffset="['-60']"
                data-fontsize="['40']"
                data-lineheight="['84']"
                data-width="none"
                data-height="none"
                data-whitespace="nowrap"
                data-transform_idle="o:1;s:500"
                data-transform_in="y:100;scaleX:1;scaleY:1;opacity:0;"
                data-transform_out="x:left(R);s:1000;e:Power3.easeIn;s:1000;e:Power3.easeIn;"
                data-mask_in="x:0px;y:0px;s:inherit;e:inherit;"
                data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;"
                data-start="1000"
                data-splitin="none"
                data-splitout="none"
                data-responsive_offset="on"
                style={{ zIndex: '5', whiteSpace: 'nowrap', fontWeight: '600' }}
              >
                <span className="text-white">Providing Logistics Services</span>
              </div>

              {/* LAYER NR. 3 */}
              <div
                className="tp-caption tp-resizeme text-white"
                id="rs-3-layer-9"
                data-x="['left']"
                data-hoffset="['30']"
                data-y="['middle']"
                data-voffset="['20']"
                data-fontsize="['18']"
                data-lineheight="['34']"
                data-width="none"
                data-height="none"
                data-whitespace="nowrap"
                data-transform_idle="o:1;s:500"
                data-transform_in="y:100;scaleX:1;scaleY:1;opacity:0;"
                data-transform_out="x:left(R);s:1000;e:Power3.easeIn;s:1000;e:Power3.easeIn;"
                data-mask_in="x:0px;y:0px;s:inherit;e:inherit;"
                data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;"
                data-start="1400"
                data-splitin="none"
                data-splitout="none"
                data-responsive_offset="on"
                style={{ zIndex: '5', whiteSpace: 'nowrap', fontWeight: '300' }}
              >
                We provides always our best services for our clients and always
                <br /> try to achieve our client's trust and satisfaction.
              </div>

              {/* LAYER NR. 4 */}
              <div
                className="tp-caption tp-resizeme"
                id="rs-3-layer-10"
                data-x="['left']"
                data-hoffset="['30']"
                data-y="['middle']"
                data-voffset="['100']"
                data-width="none"
                data-height="none"
                data-whitespace="nowrap"
                data-transform_idle="o:1;s:500"
                data-transform_in="y:100;scaleX:1;scaleY:1;opacity:0;"
                data-transform_out="x:left(R);s:1000;e:Power3.easeIn;s:1000;e:Power3.easeIn;"
                data-mask_in="x:0px;y:0px;s:inherit;e:inherit;"
                data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;"
                data-start="1600"
                data-splitin="none"
                data-splitout="none"
                data-responsive_offset="on"
                style={{
                  zIndex: '5',
                  whiteSpace: 'nowrap',
                  lettertSpacing: '1px',
                }}
              >
                <a className="btn btn-colored btn-lg" href="#">
                  View Services
                </a>
              </div>
            </li>
          </ul>
        </div>
        {/* end .rev_slider */}
      </div>
      {/*======= HOME SLIDER END =========*/}

      {/* =-=-=-=-=-=-= Call To Action =-=-=-=-=-=-= */}
      <div className="parallex-small ">
        <div className="container">
          <div className="row custom-padding-20 ">
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
                <a href="#quote" className="page-scroll btn btn-lg btn-clean">
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

      {/* =-=-=-=-=-=-= Services =-=-=-=-=-=-= */}
      <section className="custom-padding white" id="about-section-3">
        <div className="container">
          <div className="main-boxes">
            <div className="row">
              <div className="col-sm-12 col-md-4 col-xs-12">
                <div className="services-grid-1">
                  <div className="service-image">
                    <a href="#">
                      <img alt="" src="images/1.jpg" />
                    </a>
                  </div>
                  <div className="services-text">
                    <h4>Fast & Safe Delivery</h4>
                    <p>
                      Fusce pretium nulla et purus malesuada feugiat sed vel
                      mauris tincidunt vehicula lorem vel hendrerit justo
                      praesent aliquam maximus imperdiet integer sagittis leo
                    </p>
                  </div>
                  <div className="more-about">
                    {' '}
                    <a className="btn btn-primary btn-lg" href="#">
                      Read More <i className="fa fa-chevron-circle-right"></i>
                    </a>{' '}
                  </div>
                </div>
                {/* end services-grid-1 */}
              </div>
              {/* end col-sm-4 */}

              <div className="col-sm-12 col-md-4 col-xs-12">
                <div className="services-grid-1">
                  <div className="service-image">
                    <a href="#">
                      <img alt="" src="images/2.jpg" />
                    </a>
                  </div>
                  <div className="services-text">
                    <h4>Internation Air Freight</h4>
                    <p>
                      Fusce pretium nulla et purus malesuada feugiat sed vel
                      mauris tincidunt vehicula lorem vel hendrerit justo
                      praesent aliquam maximus imperdiet integer sagittis leo
                    </p>
                  </div>
                  <div className="more-about">
                    {' '}
                    <a className="btn btn-primary btn-lg" href="#">
                      Read More <i className="fa fa-chevron-circle-right"></i>
                    </a>{' '}
                  </div>
                </div>
                {/* end services-grid-1 */}
              </div>
              {/* end col-sm-4 */}

              <div className="col-sm-12 col-md-4 col-xs-12">
                <div className="services-grid-1">
                  <div className="service-image">
                    <a href="#">
                      <img alt="" src="images/3.jpg" />
                    </a>
                  </div>
                  <div className="services-text">
                    <h4>ground shipping</h4>
                    <p>
                      Fusce pretium nulla et purus malesuada feugiat sed vel
                      mauris tincidunt vehicula lorem vel hendrerit justo
                      praesent aliquam maximus imperdiet integer sagittis leo
                    </p>
                  </div>
                  <div className="more-about">
                    {' '}
                    <a className="btn btn-primary btn-lg" href="#">
                      Read More <i className="fa fa-chevron-circle-right"></i>
                    </a>{' '}
                  </div>
                </div>
                {/* end services-grid-1 */}
              </div>
              {/* end col-sm-4 */}
            </div>
          </div>
          {/* end main-boxes */}
        </div>
        {/* end container */}
      </section>

      {/* <!-- =-=-=-=-=-=-= Our Process =-=-=-=-=-=-= --> */}
      <section id="process" class="section-padding-80 ">
        <div class="container">
          {/* <!-- title-section --> */}
          <div class="main-heading text-center">
            <h2>OUR Process</h2>
            <p>
              Cras varius purus in tempus porttitor ut dapibus efficitur
              sagittis cras vitae lacus metus nunc vulputate facilisis nisi{' '}
              <br /> eu lobortis erat consequat ut. Aliquam et justo ante. Nam a
              cursus velit
            </p>
          </div>
          {/* <!-- End title-section --> */}

          {/* <!-- Row --> */}
          <div class="row">
            <div class="col-md-12 col-xs-12 com-sm-12 our-process process-steps text-left">
              <ul>
                <li>
                  <span class="process-icon">
                    <i class="flaticon-man-standing-with-delivery-box"></i>
                  </span>
                  <div class="process-detail">
                    <h3>Step: 1</h3>
                    <h2>Create Your Account</h2>
                    <div class="clearboth"></div>
                  </div>
                </li>
                <li>
                  <span class="process-icon">
                    <i class="flaticon-commercial-delivery-symbol-of-a-list-on-clipboard-on-a-box-package"></i>
                  </span>
                  <div class="process-detail">
                    <h3>Step: 2</h3>
                    <h2>Place Your Order</h2>
                    <div class="clearboth"></div>
                  </div>
                </li>
                <li>
                  <span class="process-icon">
                    <i class="flaticon-delivery-worker-giving-a-box-to-a-receiver"></i>
                  </span>
                  <div class="process-detail">
                    <h3>Step: 3</h3>
                    <h2>We Collect It</h2>
                    <div class="clearboth"></div>
                  </div>
                </li>
                <li>
                  <span class="process-icon">
                    <i class="flaticon-logistics-delivery-truck-in-movement"></i>
                  </span>
                  <div class="process-detail">
                    <h3>Step: 4</h3>
                    <h2>Delivered</h2>
                    <div class="clearboth"></div>
                  </div>
                </li>
                <div class="clearfix"></div>
              </ul>
            </div>
          </div>
          {/* <!-- Row End --> */}
        </div>
        {/* <!-- end container --> */}
      </section>
      {/* <!-- =-=-=-=-=-=-= Our Process End =-=-=-=-=-=-= --> */}

      {/* =-=-=-=-=-=-= Services =-=-=-=-=-=-= */}

      {/* =-=-=-=-=-=-= Our Services =-=-=-=-=-=-= */}
      <section className="custom-padding services">
        <div className="container">
          {/* <!-- title-section --> */}
          <div class="main-heading text-center">
            <h2>our services</h2>
            <p>
              Cras varius purus in tempus porttitor ut dapibus efficitur
              sagittis cras vitae lacus metus nunc vulputate facilisis nisi{' '}
              <br />
              eu lobortis erat consequat ut. Aliquam et justo ante. Nam a cursus
              velit
            </p>
          </div>
          {/* <!-- End title-section --> */}
          {/* Row */}
          <div className="row">
            <div id="services-2">
              {/* Service Item List */}
              <div className="col-md-4 col-xs-12 col-sm-6">
                {/* services grid */}
                <div className="services-grid">
                  <div className="icons">
                    {' '}
                    <i className="flaticon-box-of-packing-for-delivery"></i>
                  </div>
                  <h4>packaging and storage</h4>
                  <p>
                    We have the right caring, experience and dedicated
                    professional for you.
                  </p>
                </div>
              </div>
              {/* services grid */}
              <div className="col-md-4 col-xs-12 col-sm-6">
                <div className="services-grid">
                  <div className="icons">
                    {' '}
                    <i className="flaticon-ocean-transportation"></i>
                  </div>
                  <h4>cargo</h4>
                  <p>
                    We have the right caring, experience and dedicated
                    professional for you.
                  </p>
                </div>
              </div>
              {/* services grid */}
              <div className="col-md-4 col-xs-12 col-sm-6">
                <div className="services-grid">
                  <div className="icons">
                    {' '}
                    <i className="flaticon-delivery-truck"></i>
                  </div>
                  <h4>worldwide transport </h4>
                  <p>
                    We have the right caring, experience and dedicated
                    professional for you.
                  </p>
                </div>
              </div>

              <div className="clearfix  hidden-sm"></div>
              {/* Service Item List */}

              <div className="clearfix"></div>
              <div className="col-md-4 col-xs-12 col-sm-6">
                {/* services grid */}

                <div className="services-grid">
                  <div className="icons">
                    {' '}
                    <i className="flaticon-international-delivery-symbol"></i>
                  </div>
                  <h4>global trasnport</h4>
                  <p>
                    We have the right caring, experience and dedicated
                    professional for you.
                  </p>
                </div>
              </div>
              {/* services grid */}
              <div className="col-md-4 col-xs-12 col-sm-6">
                <div className="services-grid">
                  <div className="icons">
                    {' '}
                    <i className="flaticon-logistics-delivery-truck-in-movement"></i>
                  </div>
                  <h4>fast delivery</h4>
                  <p>
                    We have the right caring, experience and dedicated
                    professional for you.
                  </p>
                </div>
              </div>
              {/* services grid */}
              <div className="col-md-4 col-xs-12 col-sm-6">
                <div className="services-grid">
                  <div className="icons">
                    {' '}
                    <i className="flaticon-24-hours-symbol"></i>
                  </div>
                  <h4>24/7 Support </h4>
                  <p>
                    We have the right caring, experience and dedicated
                    professional for you.
                  </p>
                </div>
              </div>
              <div className="clearfix"></div>
              {/* Service Item List End */}
            </div>
          </div>
          {/* Row End */}
        </div>
        {/* end container */}
      </section>
      {/* =-=-=-=-=-=-= Our Services-end =-=-=-=-=-=-= */}
      {/* =-=-=-=-=-=-= Quote Seection =-=-=-=-=-=-= */}

      <section className="quote" id="quote">
        <div className="container">
          <div className="row clearfix">
            {/*Column*/}
            <div className="col-md-7 col-sm-12 col-xs-12 ">
              <div className="choose-title">
                <h3>More about us</h3>
                <h2>Why People Choose Us</h2>
                <p>
                  Ut consequat velit a metus accumsan, vel tempor nulla blandit.
                  Integer euismod magna vel mi congue suscipit. Praesent quis
                  facilisis neque. Donec scelerisque nibh vitae sapien ornare
                  efficitur.
                </p>
              </div>
              <div className="choose-services">
                <ul className="choose-list">
                  {/* feature */}
                  <li>
                    <div className="choose-box">
                      {' '}
                      <span className="iconbox">
                        <i className="flaticon-logistics-delivery-truck-and-clock"></i>
                      </span>
                      <div className="choose-box-content">
                        <h4>Fast Worldwide delivery</h4>
                        <p>
                          Donec dignissim enim id urna fermentum, non hendrerit
                          sem volutpat ellentesque pretium sapien nec metus.non
                          hendrerit sem volutpat ellentesque pretium sapien nec
                          metus
                        </p>
                      </div>
                    </div>
                  </li>

                  {/* feature */}
                  <li>
                    <div className="choose-box">
                      {' '}
                      <span className="iconbox">
                        <i className="flaticon-woman-with-headset"></i>
                      </span>
                      <div className="choose-box-content">
                        <h4>Safety & Compliance</h4>
                        <p>
                          Donec dignissim enim id urna fermentum, non hendrerit
                          sem volutpat ellentesque pretium sapien nec metus.non
                          hendrerit sem volutpat ellentesque pretium sapien nec
                          metus
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
                {/* end choose-list */}
              </div>
            </div>

            {/* Quote Form */}
            <div className="col-md-5 col-sm-12 no-extra col-xs-12">
              <div className="quotation-box">
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
                      <select className="form-control" name="sel-location">
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
        </div>
      </section>

      {/* =-=-=-=-=-=-= Quote Seection end=-=-=-=-=-=-= */}

      {/* =-=-=-=-=-=-= Gallery =-=-=-=-=-=-= */}
      <section id="gallery" className="custom-padding">
        <div className="container">
          {/* title-section */}
          <div className="main-heading text-center">
            <h2>OUR GALLERY</h2>
            <p>
              Cras varius purus in tempus porttitor ut dapibus efficitur
              sagittis cras vitae lacus metus nunc vulputate facilisis nisi{' '}
              <br /> eu lobortis erat consequat ut. Aliquam et justo ante. Nam a
              cursus velit
            </p>
          </div>
          {/* End title-section */}

          <div className="portfolio-container text-center">
            <ul id="portfolio-grid" className="three-column hover-two">
              <li className="portfolio-item gutter">
                <div className="portfolio">
                  <div className="tt-overlay"></div>
                  <img src="images/portfolio/1.jpg" alt="" />

                  <div className="portfolio-info">
                    <h3 className="project-title">Project Title</h3>
                    <a href="#" className="links">
                      App Design
                    </a>
                  </div>
                  {/* /.project-info */}

                  <ul className="portfolio-details">
                    <li>
                      <a className="tt-lightbox" href="images/portfolio/1.jpg">
                        <i className="fa fa-search"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-external-link"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                {/* /.portfolio */}
              </li>
              <li className="portfolio-item gutter">
                <div className="portfolio">
                  <div className="tt-overlay"></div>
                  <img src="images/portfolio/2.jpg" alt="" />

                  <div className="portfolio-info">
                    <h3 className="project-title">Project Title</h3>
                    <a href="#" className="links">
                      App Design
                    </a>
                  </div>
                  {/* /.project-info */}

                  <ul className="portfolio-details">
                    <li>
                      <a className="tt-lightbox" href="images/portfolio/2.jpg">
                        <i className="fa fa-search"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-external-link"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                {/* /.portfolio */}
              </li>
              <li className="portfolio-item gutter">
                <div className="portfolio">
                  <div className="tt-overlay"></div>
                  <img src="images/portfolio/3.jpg" alt="" />

                  <div className="portfolio-info">
                    <h3 className="project-title">Project Title</h3>
                    <a href="#" className="links">
                      App Design
                    </a>
                  </div>
                  {/* /.project-info */}

                  <ul className="portfolio-details">
                    <li>
                      <a className="tt-lightbox" href="images/portfolio/3.jpg">
                        <i className="fa fa-search"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-external-link"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                {/* /.portfolio */}
              </li>

              <li className="portfolio-item gutter">
                <div className="portfolio">
                  <div className="tt-overlay"></div>
                  <img src="images/portfolio/4.jpg" alt="" />

                  <div className="portfolio-info">
                    <h3 className="project-title">Project Title</h3>
                    <a href="#" className="links">
                      App Design
                    </a>
                  </div>
                  {/* /.project-info */}

                  <ul className="portfolio-details">
                    <li>
                      <a className="tt-lightbox" href="images/portfolio/4.jpg">
                        <i className="fa fa-search"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-external-link"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                {/* /.portfolio */}
              </li>
              <li className="portfolio-item gutter">
                <div className="portfolio">
                  <div className="tt-overlay"></div>
                  <img src="images/portfolio/5.jpg" alt="" />

                  <div className="portfolio-info">
                    <h3 className="project-title">Project Title</h3>
                    <a href="#" className="links">
                      App Design
                    </a>
                  </div>
                  {/* /.project-info */}

                  <ul className="portfolio-details">
                    <li>
                      <a className="tt-lightbox" href="images/portfolio/5.jpg">
                        <i className="fa fa-search"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-external-link"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                {/* /.portfolio */}
              </li>
              <li className="portfolio-item gutter">
                <div className="portfolio">
                  <div className="tt-overlay"></div>
                  <img src="images/portfolio/6.jpg" alt="" />

                  <div className="portfolio-info">
                    <h3 className="project-title">Project Title</h3>
                    <a href="#" className="links">
                      App Design
                    </a>
                  </div>
                  {/* /.project-info */}

                  <ul className="portfolio-details">
                    <li>
                      <a className="tt-lightbox" href="images/portfolio/6.jpg">
                        <i className="fa fa-search"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-external-link"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                {/* /.portfolio */}
              </li>

              <li className="portfolio-item gutter">
                <div className="portfolio">
                  <div className="tt-overlay"></div>
                  <img src="images/portfolio/7.jpg" alt="" />

                  <div className="portfolio-info">
                    <h3 className="project-title">Project Title</h3>
                    <a href="#" className="links">
                      App Design
                    </a>
                  </div>
                  {/* /.project-info */}

                  <ul className="portfolio-details">
                    <li>
                      <a className="tt-lightbox" href="images/portfolio/7.jpg">
                        <i className="fa fa-search"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-external-link"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                {/* /.portfolio */}
              </li>
              <li className="portfolio-item gutter">
                <div className="portfolio">
                  <div className="tt-overlay"></div>
                  <img src="images/portfolio/8.jpg" alt="" />

                  <div className="portfolio-info">
                    <h3 className="project-title">Project Title</h3>
                    <a href="#" className="links">
                      App Design
                    </a>
                  </div>
                  {/* /.project-info */}

                  <ul className="portfolio-details">
                    <li>
                      <a className="tt-lightbox" href="images/portfolio/8.jpg">
                        <i className="fa fa-search"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-external-link"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                {/* /.portfolio */}
              </li>
              <li className="portfolio-item gutter">
                <div className="portfolio">
                  <div className="tt-overlay"></div>
                  <img src="images/portfolio/9.jpg" alt="" />

                  <div className="portfolio-info">
                    <h3 className="project-title">Project Title</h3>
                    <a href="#" className="links">
                      App Design
                    </a>
                  </div>
                  {/* /.project-info */}

                  <ul className="portfolio-details">
                    <li>
                      <a className="tt-lightbox" href="images/portfolio/9.jpg">
                        <i className="fa fa-search"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-external-link"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                {/* /.portfolio */}
              </li>
            </ul>
          </div>

          {/* portfolio-container */}
        </div>
        {/* end container */}
      </section>
      {/* =-=-=-=-=-=-= Blog & News end =-=-=-=-=-=-= */}

      {/* <!-- =-=-=-=-=-=-= PARALLEX TESTIMONILS =-=-=-=-=-=-= --> */}
      <section className="testimonial-bg parallex section-padding text-center">
        <div className="container">
          <div id="testimonials">
            <div className="item">
              <div className="col-sm-12 col-md-12 col-xs-12 testimonial-grid text-center">
                {' '}
                <img
                  src="images/admin-1.jpg"
                  className="img-responsive"
                  alt="Testimonials"
                />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam lacus lectus a quam eget, fringilla suscipit sapien.
                  Duis aliquet malesuada ipsum non sodales. Suspendisse a
                  consequat leo. Fusce tempus vitae erat at consequat. Aenean
                  commodo felis odio, ut congue est mollis non. Sed tincidunt.
                </p>
                <div className="name">John Doe</div>
                <div className="profession">Founder, Oxford</div>
              </div>
            </div>
            <div class="item">
              <div className="col-sm-12 col-md-12 col-xs-12 testimonial-grid text-center">
                {' '}
                <img
                  src="images/admin-1.jpg"
                  alt="Testimonials"
                  className="img-responsive"
                />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam lacus lectus a quam eget, fringilla suscipit sapien.
                  Duis aliquet malesuada ipsum non sodales. Suspendisse a
                  consequat leo. Fusce tempus vitae erat at consequat. Aenean
                  commodo felis odio, ut congue est mollis non. Sed tincidunt.
                </p>
                <div className="name">John Doe</div>
                <div className="profession">Founder, Oxford</div>
              </div>
            </div>
            <div className="item">
              <div className="col-sm-12 col-md-12 col-xs-12 testimonial-grid text-center">
                {' '}
                <img
                  src="images/admin-1.jpg"
                  alt="Testimonials"
                  className="img-responsive"
                />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam lacus lectus a quam eget, fringilla suscipit sapien.
                  Duis aliquet malesuada ipsum non sodales. Suspendisse a
                  consequat leo. Fusce tempus vitae erat at consequat. Aenean
                  commodo felis odio, ut congue est mollis non. Sed tincidunt.
                </p>
                <div className="name">John Doe</div>
                <div className="profession">Founder, Oxford</div>
              </div>
            </div>
            <div className="item">
              <div className="col-sm-12 col-md-12 col-xs-12 testimonial-grid text-center">
                {' '}
                <img
                  src="images/admin-1.jpg"
                  alt="Testimonials"
                  className="img-responsive"
                />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam lacus lectus a quam eget, fringilla suscipit sapien.
                  Duis aliquet malesuada ipsum non sodales. Suspendisse a
                  consequat leo. Fusce tempus vitae erat at consequat. Aenean
                  commodo felis odio, ut congue est mollis non. Sed tincidunt.
                </p>
                <div class="name">John Doe</div>
                <div class="profession">Founder, Oxford</div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- end container --> */}
      </section>
      {/* <!-- =-=-=-=-=-=-= PARALLEX TESTIMONILS END =-=-=-=-=-=-= --> */}

      {/* =-=-=-=-=-=-= Blog & News =-=-=-=-=-=-= */}
      <section id="blog" className="custom-padding">
        <div className="container">
          {/* title-section */}
          <div className="main-heading text-center">
            <h2>OUR BLOG</h2>
            <p>
              Cras varius purus in tempus porttitor ut dapibus efficitur
              sagittis cras vitae lacus metus nunc vulputate facilisis nisi{' '}
              <br /> eu lobortis erat consequat ut. Aliquam et justo ante. Nam a
              cursus velit
            </p>
          </div>
          {/* End title-section */}

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
                        top benefits of hiring our trucking service
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
            </div>
          </div>

          {/* Row End */}
        </div>
        {/* end container */}
      </section>
      {/* =-=-=-=-=-=-= Blog & News end =-=-=-=-=-=-= */}

      {/* =-=-=-=-=-=-= Our Clients =-=-=-=-=-=-= */}
      <section className="section-padding-70 services">
        <div className="container">
          {/* title-section */}
          <div className="main-heading text-center">
            <h2>our partners</h2>
            <p>
              Cras varius purus in tempus porttitor ut dapibus efficitur
              sagittis cras vitae lacus metus nunc vulputate facilisis nisi{' '}
              <br /> eu lobortis erat consequat ut. Aliquam et justo ante. Nam a
              cursus velit
            </p>
          </div>
          {/* End title-section */}

          {/* Row */}
          <div className="row">
            <div id="clients" className="text-center">
              {/* Service Item List */}
              <div className="item">
                <div className="clients-grid">
                  {' '}
                  <img
                    className="img-responsive"
                    alt=""
                    src="images/clients/client_5.png"
                  />{' '}
                </div>
              </div>
              <div className="item">
                <div className="clients-grid">
                  {' '}
                  <img
                    className="img-responsive"
                    alt=""
                    src="images/clients/client_5.png"
                  />{' '}
                </div>
              </div>
              <div className="item">
                <div className="clients-grid">
                  {' '}
                  <img
                    className="img-responsive"
                    alt=""
                    src="images/clients/client_5.png"
                  />{' '}
                </div>
              </div>
              <div className="item">
                <div className="clients-grid">
                  {' '}
                  <img
                    className="img-responsive"
                    alt=""
                    src="images/clients/client_5.png"
                  />{' '}
                </div>
              </div>
              <div className="item">
                <div className="clients-grid">
                  {' '}
                  <img
                    className="img-responsive"
                    alt=""
                    src="images/clients/client_5.png"
                  />{' '}
                </div>
              </div>
              <div className="item">
                <div className="clients-grid">
                  {' '}
                  <img
                    className="img-responsive"
                    alt=""
                    src="images/clients/client_5.png"
                  />{' '}
                </div>
              </div>
              <div className="item">
                <div className="clients-grid">
                  {' '}
                  <img
                    className="img-responsive"
                    alt=""
                    src="images/clients/client_5.png"
                  />{' '}
                </div>
              </div>
              <div className="item">
                <div className="clients-grid">
                  {' '}
                  <img
                    className="img-responsive"
                    alt=""
                    src="images/clients/client_5.png"
                  />{' '}
                </div>
              </div>
              <div className="item">
                <div className="clients-grid">
                  {' '}
                  <img
                    className="img-responsive"
                    alt=""
                    src="images/clients/client_5.png"
                  />{' '}
                </div>
              </div>
              <div className="item">
                <div className="clients-grid">
                  {' '}
                  <img
                    className="img-responsive"
                    alt=""
                    src="images/clients/client_5.png"
                  />{' '}
                </div>
              </div>
              <div className="item">
                <div className="clients-grid">
                  {' '}
                  <img
                    className="img-responsive"
                    alt=""
                    src="images/clients/client_5.png"
                  />{' '}
                </div>
              </div>
              <div className="item">
                <div className="clients-grid">
                  {' '}
                  <img
                    className="img-responsive"
                    alt=""
                    src="images/clients/client_5.png"
                  />{' '}
                </div>
              </div>
              {/* Service Item List End */}
            </div>
          </div>
          {/* Row End */}
        </div>
        {/* end container */}
      </section>
      {/* =-=-=-=-=-=-= Our Clients -end =-=-=-=-=-=-= */}

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
      {/* {/* =-=-=-=-=-=-= Quote Modal End =-=-=-=-=-=-= */}
    </>
  );
};
export default Landing;
