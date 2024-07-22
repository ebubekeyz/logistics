import styled from 'styled-components';

const Wrapper = styled.div`
  /* =-=-=-=-=-=-= Top Bar Right Menu =-=-=-=-=-=-= */
  .top-bar .nav-right > li > a {
    display: block;
    padding: 12px 15px;
    position: relative;
    text-align: center;
    color: #323232 !important;
    font-size: 14px;
  }
  .nav-right > li {
    float: left;
  }
  .nav-right > li.nav-profile > a {
    padding: 11px 15px;
  }
  img.resize {
    height: 30px;
    width: 30px;
  }
  li.nav-profile .hidden-xs {
    padding-right: 8px;
  }
  .small-padding {
    padding: 0 5px !important;
  }
  .nav-right > li.nav-profile i {
    font-size: 14px;
    margin-right: 0;
    width: 18px;
    color: #bbb;
  }
  .nav-right li a i {
    margin-right: 5px;
    color: #bbb;
  }
  .nav-right .dropdown-menu {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    margin-top: 0;
  }
  .nav-right .dropdown-menu {
    background-color: #262f36;
    border: medium none;
    padding: 20px 0;
  }
  .nav-right .dropdown-menu li a {
    color: #fff !important;
    font-size: 13px;
    height: 50px;
    line-height: 46px;
    padding-top: 0;
  }
  .nav-right .dropdown-menu li a i {
    color: #fff;
  }
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
  /*** menu hover css ***/
  .navigation .navbar-default .navbar-nav > li > a:focus,
  .navigation .navbar-default .navbar-nav > li > a:hover {
    color: #016db6;
  }
  /*** menu hover 0pen css ***/
  .navigation .navbar-default .navbar-nav > .open > a,
  .navigation .navbar-default .navbar-nav > .open > a:focus,
  .navigation .navbar-default .navbar-nav > .open > a:hover {
    color: #016db6;
    background-color: transparent;
  }
  /**** Dropdown Menu ***/
  .navigation .navbar-right .dropdown-menu {
    right: auto;
    left: 0;
    top: 84px;
  }
  .navigation-2 .navbar-right .dropdown-menu {
    right: auto;
    left: 0;
    top: 73px;
  }
  .navigation .dropdown-menu,
  .navigation-2 .dropdown-menu {
    border: none;
    border-radius: 0px;
    margin: 0px;
    padding: 20px 0px;
    background-color: #262f36;
  }
  .navigation .dropdown-menu > li > a,
  .navigation-2 .dropdown-menu > li > a {
    display: block;
    padding: 10px 20px 10px 20px;
    clear: both;
    line-height: 1.42857143;
    color: #fff !important;
    white-space: nowrap;
    font-size: 14px;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 1px;
  }
  .navigation .dropdown-menu > li > a:hover,
  .navigation-2 .dropdown-menu > li > a:hover {
    color: #fff !important;
    background-color: #016db6;
  }
  /*** Header #2 ****/
  .navbar-top-2 {
    border-top: 3px solid #016db6;
  }
  .navbar-block {
    border-bottom: 1px solid #e0e0e0;
  }
  .navbar-address {
    margin-bottom: 0px;
    text-align: right;
  }
  .navbar-top-2 .welcome-msg,
  .navbar-top-2 .navbar-address {
    color: #8e8e8e;
    margin-bottom: 0px;
    letter-spacing: 1px;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: normal;
    padding-top: 9px;
  }
  .navbar-link-2 ul li a {
    color: #8e8e8e;
    letter-spacing: 1px;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 500;
    padding-top: 9px;
    display: inline-block;
    padding-bottom: 9px;
    border-left: 1px solid #e0e0e0;
    padding-left: 20px;
    padding-right: 20px;
  }
  .navbar-link-2 ul li a:hover {
    color: #016db6;
  }
  .navigation-2 .navbar {
    margin-bottom: 0px;
    min-height: 60px;
  }
  .navigation-2 .navbar-default {
    background-color: #25292f;
    border: none;
    border-radius: 0px;
  }
  .navigation-2 .navbar-default .navbar-nav > li > a {
    font-size: 14px;
    text-transform: uppercase;
    position: relative;
    color: #fff;
    font-weight: 600;
    line-height: 24px;
    display: block;
    letter-spacing: 0;
    padding: 20px;
  }
  /********** menu hover css ********/
  .navigation-2 .navbar-default .navbar-nav > li > a:focus,
  .navigation-2 .navbar-default .navbar-nav > li > a:hover {
    color: #fff;
    background-color: #016db6;
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
  /* =-=-=-=-=-=-= Top Bar =-=-=-=-=-=-= */
  .top-bar.color-scheme {
    border-bottom: 1px solid #204d74;
    background: #016db6;
  }
  .top-bar {
    border-bottom: 1px solid #eaeaea;
    background: #eaeaea;
  }
  .top-bar .left-text p {
    color: #323232;
    font-size: 14px;
    line-height: 50px;
    margin: 0;
  }
  .top-bar .left-text p span {
    color: #323232;
    font-weight: bold;
  }
  .top-bar.color-scheme .left-text p span {
    color: #fff;
    font-weight: bold;
  }
  .top-bar.color-scheme .left-text p {
    color: #fff;
    font-size: 14px;
    line-height: 49px;
    margin: 0;
  }
  .top-bar.color-scheme .nav-right > li > a:hover {
    color: #fff !important;
  }
  .top-bar.color-scheme .nav-right > li > a {
    color: #fff !important;
  }
  .top-bar.color-scheme .nav-right li a i {
    color: #fff;
  }
  .color-scheme .social-icons ul li a i {
    color: #fff !important;
  }
  .color-scheme .social-icons ul li:first-child a {
    border-left: 1px solid #fff;
  }
  .color-scheme .social-icons ul li a {
    border-right: 1px solid #fff !important;
  }
  .color-scheme .social-icons ul li a:hover i {
    color: #323232 !important;
  }
  .color-scheme .social-icons ul li a:hover {
    color: #323232 !important;
  }
  .social-icons ul,
  .social-icons ul li {
    display: inline-block;
    list-style: outside none none;
    margin: 0;
    padding: 0;
  }
  .social-icons ul li:first-child a {
    border-left: 1px solid #ccc;
  }
  .social-icons ul li a {
    border-right: 1px solid #ccc;
    color: #323232;
    display: inline-block;
    font-size: 15px;
    line-height: 48px;
    margin-left: -5px;
    padding: 0 16px;
    text-align: center;
    transition: all 0.3s ease 0s;
    o-transition: all 0.3s ease 0s;
    -ms-transition: all 0.3s ease 0s;
    -moz-transition: all 0.3s ease 0s;
    -webkit-transition: all 0.3s ease 0s;
  }
  .social-icons ul li a i {
    color: #323232;
  }
  .social-icons ul li a:hover i {
    color: #fff !important;
  }
`;

export default Wrapper;
