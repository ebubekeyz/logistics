import styled from 'styled-components';

const Wrapper = styled.div`
  /* =-=-=-=-=-=-= Header =-=-=-=-=-=-= */
  .header-area {
    position: relative;
    left: 0px;
    top: 0px;
    background: #fff;
    z-index: 999;
    width: 100%;
  }
  .header-area .logo-bar {
    position: relative;
    color: #323232;
    padding: 40px 0;
  }
  .header-area .logo-bar .information-content {
    position: relative;
    float: right;
  }
  .header-area .logo-bar .info-box div.text:hover {
    color: #016db6;
    cursor: pointer;
  }
  .header-area .logo-bar .info-box {
    position: relative;
    float: left;
    margin-left: 45px;
    padding-left: 50px;
    line-height: 24px;
  }
  .header-area .logo-bar .social-box {
    padding-left: 0px;
  }
  .header-area .logo-bar .info-box .icon {
    position: absolute;
    left: 0px;
    line-height: 50px;
    font-size: 32px;
    color: #016db6;
  }
  .header-area .logo-bar .info-box div.text {
    color: #323232;
    font-weight: 600;
  }
  .header-area .logo-bar .info-box strong {
    position: relative;
    display: block;
    color: #e4e4e4;
  }
  .header-area .logo-bar .info-box a {
    position: relative;
    color: #6f747d !important;
    font-weight: 600;
  }
  .header-area .logo-bar .info-box .phone {
    font-size: 14px;
  }
  .social-links-one {
    position: relative;
    top: 5px;
  }
  .social-links-one a {
    position: relative;
    display: block;
    float: left;
    text-align: center;
    width: 36px;
    height: 36px;
    line-height: 36px;
    font-size: 14px;
    margin-right: 5px;
    color: #ffffff !important;
    transition: all 500ms ease;
    -webkit-transition: all 500ms ease;
    -ms-transition: all 500ms ease;
    -o-transition: all 500ms ease;
    -moz-transition: all 500ms ease;
  }
  .social-links-one a:hover {
    opacity: 0.7;
  }
  .social-links-one a.facebook {
    background-color: #3b5998;
  }
  .social-links-one a.twitter {
    background-color: #00aced;
  }
  .social-links-one a.google-plus {
    background-color: #dd4b39;
  }
  .social-links-one a.linkedin {
    background-color: #007bb5;
  }
  .social-links-one a.pinterest {
    background-color: #cb2027;
  }
  .social-links-one a.instagram {
    background-color: #125688;
  }
  .header-area .logo-bar .logo {
    position: relative;
    float: left;
  }
  .header-area .logo-bar .logo img {
    max-width: 100%;
    display: block;
  }
  /* =-=-=-=-=-=-= Navigation =-=-=-=-=-=-= */
  .navigation-2 {
    background: #262f36 !important;
  }
  .navigation {
    position: relative;
    z-index: 9995;
  }
  #main-navigation {
    padding-left: 0;
    padding-right: 0;
  }
  #main-navigation .navbar-nav li.active {
    background-color: #016db6;
  }
  .navigation .navbar {
    border-radius: 0px;
    margin-bottom: 0px;
  }
  .navigation .navbar-default {
    background-color: transparent;
    border: none;
  }
  .navigation .navbar-nav {
    margin-top: 15px;
  }
  .navigation .navbar-default .navbar-nav > li > a {
    display: block;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0;
    line-height: 70px;
    padding: 0 20px;
    position: relative;
    text-transform: uppercase;
  }
  /********* menu hover 0pen css ********/
  .navigation-2 .navbar-default .navbar-nav > .open > a,
  .navigation-2 .navbar-default .navbar-nav > .open > a:focus,
  .navigation-2 .navbar-default .navbar-nav > .open > a:hover {
    color: #fff;
    background-color: #016db6;
  }
  .navigation-2 .navbar-toggle {
    position: relative;
    float: right;
    padding: 9px 10px;
    margin-top: 12px;
    margin-right: 15px;
    margin-bottom: 8px;
    background-color: #fff;
    background-image: none;
    border-radius: 0;
    border: medium none;
  }
  .navigation-2 .navbar-default .navbar-toggle .icon-bar {
    background-color: #016db6;
  }
  .navbar {
    border: 1px solid transparent;
    margin-bottom: 0;
    position: relative;
  }
  .navbar-brand {
    padding: 10px !important;
  }
  .navbar-nav {
    margin-left: 45px;
  }
  .navbar-default {
    background-color: transparent !important;
    border-color: transparent !important;
  }
  .navbar-fixed-top {
    border-width: 0;
    top: 0;
  }
  .navigation-2 .navbar-nav li a {
    color: #fff !important;
    font-size: 16px;
    padding-bottom: 25px;
    padding-top: 22px;
  }
  .navbar-nav li a {
    color: #323232 !important;
    font-size: 16px;
    padding-bottom: 25px;
    padding-top: 22px;
  }
  .navbar-nav .dropdown-menu li a {
    line-height: 46px;
    height: 50px;
    padding-top: 0;
    color: #fff !important;
    font-size: 13px;
  }
  .navbar-right li.dropdown a span {
    text-align: center;
  }
  .dropdown-menu {
    border: 0 !important;
    padding: 0 !important;
  }
  .dropdown-submenu {
    position: relative;
  }
  .dropdown-submenu > .dropdown-menu {
    top: 0;
    left: 100%;
    margin-top: -6px;
    margin-left: -1px;
  }
  .dropdown-submenu:hover > .dropdown-menu {
    display: block;
  }
  .dropdown-submenu > a:after {
    display: block;
    content: ' ';
    float: right;
    width: 0;
    height: 0;
    border-color: transparent;
    border-style: solid;
    border-width: 5px 0 5px 5px;
    border-left-color: #ccc;
    margin-top: 20px;
    margin-right: -10px;
  }
  .dropdown-submenu:hover > a:after {
    border-left-color: #fff;
  }
  .dropdown-submenu.pull-left {
    float: none;
  }
  .dropdown-submenu.pull-left > .dropdown-menu {
    left: -100%;
    margin-left: 10px;
  }
  .navbar-default .navbar-nav > .open > a,
  .navbar-default .navbar-nav > .open > a:hover,
  .navbar-default .navbar-nav > .open > a:focus {
    background-color: transparent;
    color: #000;
  }
  .navbar-fixed-top,
  .navbar-fixed-bottom {
    position: fixed !important;
  }
  .navbar-brand {
    float: none;
  }
  .navbar-default .navbar-nav > .active > a,
  .navbar-default .navbar-nav > .active > a:hover,
  .navbar-default .navbar-nav > .active > a:focus {
    background-color: inherit !important;
  }
  @media (min-width: 320px) and (max-width: 767px) {
    .top-bar .left-text {
      display: none;
    }
    .social-icons {
      float: none !important;
      text-align: center;
    }
    .social-icons ul li a {
      border-top: 1px solid #eaeaea;
      margin-left: -4px;
    }
    .header-area .logo-bar .info-box {
      margin-left: 3px;
      margin-bottom: 15px;
    }
    .header-area .logo-bar .information-content {
      margin-top: 15px;
    }
    .navbar-nav {
      margin: 0 !important;
    }
    .navbar-nav .dropdown-menu li a {
      line-height: 40px !important;
      height: 50px;
    }
    .navigation-2 a.btn-primary {
      float: none !important;
      display: block;
    }
    .navigation-2 #main-navigation .navbar-toggle {
      position: relative;
      float: right;
      padding: 9px 10px;
      margin-top: 8px;
      margin-right: 15px;
      margin-bottom: 8px;
      background-color: transparent;
      background-image: none;
      border: 1px solid transparent;
      border-radius: 4px;
    }
    .navigation .navbar-toggle {
      position: absolute;
      padding: 9px 10px;
      top: 33px !important;
      margin-right: 15px;
      background-color: #ddd;
      background-image: none;
      border: 1px solid transparent;
      border-radius: 4px;
      right: 0;
    }
    .navigation .dropdown-menu > li > a {
      color: #000 !important;
    }
    .navigation .navbar-default .navbar-toggle .icon-bar {
      background-color: #fff;
    }
    .slider-grids .tt-slider-small-text {
      display: none !important;
    }
    .slider-grids .tt-slider-subtitle {
      font-size: 18px !important;
    }
    .page-heading h2 {
      color: #fff;
      font-size: 24px;
    }
    .breadcrumbs {
      display: none;
    }
    .breadcrumbs-area {
      padding: 30px 0;
    }
    .parallex-text h4 {
      font-size: 23px;
      text-align: center;
      line-height: 36px;
    }
    .parallex-small .btn {
      margin-top: 10px !important;
    }
    .parallex-button {
      text-align: center;
    }
    .more-about a.btn {
      display: block;
    }
    .btn-lg {
      letter-spacing: 1px;
      padding: 10px 25px;
    }
    .choose-title h2 {
      font-size: 22px;
    }
    .quote .quotation-box {
      margin-top: 0;
    }
    .no-extra {
      padding-left: 0 !important;
      padding-right: 0 !important;
    }
    .our-gallery {
      margin-top: 40px;
    }
    .custom-button {
      display: block;
      text-align: center;
    }
    .news-detail > h2 {
      font-size: 22px;
    }
    .post-like,
    .post-comment,
    .post-share {
      display: inline-block;
      margin-left: 5px;
    }
    .testimonial-grid {
      padding: 0 !important;
    }
    .clients-grid {
      display: table !important;
      margin: 0 auto !important;
    }
    #clients .item {
      display: table !important;
      margin: 0 auto !important;
    }
    .main_title {
      color: #fff;
      font-size: 16px;
      font-weight: 400;
      text-transform: uppercase;
    }
    .post-bottom .tag_cloud a {
      font-size: 13px;
      padding: 0 10px;
    }
    .post-bottom .share-items {
      display: none;
    }
    .comment-info .author-desc {
      margin-left: 0;
    }
    .comment-list .children {
      list-style: outside none none;
      padding-left: 20px;
    }
    .post-bottom {
      margin: 0;
    }
    .transparent-header .custom-nav {
      background-color: #fff !important;
    }
    .transparent-header .navbar-nav li a {
      color: #323232 !important;
    }
    #banner.hero-3 .form input {
      margin-bottom: 5px;
      width: 100%;
    }
    #banner.hero-3 h2 {
      font-size: 30px;
      padding-right: 0;
    }
    #banner.hero-3 p {
      margin-bottom: 40px;
      padding-right: 0;
    }
    .our-process.process-steps li {
      width: 100%;
    }
    .our-process ul::before {
      border-top: medium none;
    }
    .our-app .img-absolute {
      left: 0;
      margin: 0 auto;
      position: relative;
      right: 0;
      top: 0;
    }
    #banner.hero-3 .form button {
      width: 100%;
    }
    #order-tracking {
      background: transparent;
      background-color: #fff;
    }
  }
`;

export default Wrapper;
