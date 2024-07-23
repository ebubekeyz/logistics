import { Breadcrumb } from '../component';

const About = () => {
  return (
    <div>
      {' '}
      {/* =-=-=-=-=-=-= PRELOADER =-=-=-=-=-=-= */}
      <div className="preloader">
        <span className="preloader-gif"></span>
      </div>
      <Breadcrumb
        header1="Who we are"
        header2="About our Company"
        link="/about"
        linkText="About Us"
      />
      {/* =-=-=-=-=-=-= About Section =-=-=-=-=-=-= */}
      <section className="padding-top-70" id="about">
        <div className="container">
          <div className="row clearfix">
            {/*Column*/}
            <div className="col-md-7 col-sm-12 col-xs-12 ">
              <div className="about-title">
                <h2>We Provide Services All Over The World</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Praesent congue justo scelerisque mattis iaculis. Maecenas
                  vestibulum faucibus enim scelerisque egestas. Praesent
                  facilisis, tortor vel vehicula imperdiet, felis massa ultrices
                  metus, sed consectetur massa ex vitae sem. Integer eu sodales
                  augue. Suspendisse eget placerat lorem. Phasellus ac hendrerit
                  leo. Morbi quis iaculis eros. Sed tincidunt augue ante, sit
                  amet vehicula odio aliquam quis. Donec at malesuada nisl.
                  Pellentesque eros lorem, aliquet id hendrerit id, hendrerit ac
                  odio. In dui mauris, auctor vel vestibulum vitae, tincidunt id
                  mi.{' '}
                </p>
                <p>
                  Curabitur dictum, sapien eu mattis pretium, ligula lorem
                  sollicitudin mi, in gravida augue magna eu metus. Interdum et
                  malesuada fames ac ante ipsum primis in faucibus. Duis a
                  ultrices tortor. Sed rutrum arcu mi, nec aliquet magna
                  venenatis non. Nullam lectus neque, semper nec accumsan quis,
                  ullamcorper eget risus. Nullam tristique mi nec dui bibendum
                  egestas. Integer libero diam, dictum id faucibus id, lacinia
                  eget lorem. Ut condimentum, lorem at eleifend pharetra, urna
                  turpis ultrices nunc, sit amet suscipit nisl metus sit amet
                  elit. Nam tristique mollis molestie. Maecenas bibendum rhoncus
                  nisi, sit amet blandit tortor placerat nec. Sed nec aliquam
                  tortor, ut vehicula eros. Vestibulum id ligula vel nunc mattis
                  pharetra in non lectus. Etiam quis blandit ante. Donec non
                  hendrerit justo, rhoncus iaculis sem. In varius finibus eros
                  quis dictum tortor eu metus.
                </p>

                <p>
                  Pellentesque pharetra orci quam, vel scelerisque massa semper
                  et. Fusce vel tortor eu metus rhoncus blandit a vel turpis.
                  Suspendisse sed facilisis lacus. Integer mattis interdum
                  neque, non molestie risus facilisis et. Donec gravida luctus
                  laoreet. Curabitur quis iaculis velit. Maecenas ut tincidunt
                  elit, sed ultricies lectus.{' '}
                </p>
              </div>
            </div>

            {/* RIght Grid Form */}
            <div className="col-md-5 col-sm-12 col-xs-12 our-gallery">
              <a className="tt-lightbox" href="images/about-company-1.png">
                {' '}
                <img
                  className="img-responsive margin-bottom-30"
                  alt="Image"
                  src="images/about-company-1.png"
                />
              </a>
              <a className="tt-lightbox" href="images/about-company-2.png">
                {' '}
                <img
                  className="img-responsive margin-bottom-30"
                  alt="Image"
                  src="images/about-company-2.png"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* =-=-=-=-=-=-= About End =-=-=-=-=-=-= */}
      {/* =-=-=-=-=-=-= SEPARATOR Fun Facts =-=-=-=-=-=-= */}
      <div className="parallex section-padding-70 fun-facts-bg text-center">
        <div className="container">
          <div className="row">
            {/* countTo */}
            <div className="col-xs-6 col-sm-3 col-md-3">
              <div className="statistic-percent" data-perc="356">
                <div className="facts-icons">
                  {' '}
                  <span className="flaticon-woman-with-headset"></span>{' '}
                </div>
                <div className="fact">
                  {' '}
                  <span className="percentfactor">356</span>
                  <p>Happy Clients</p>
                </div>
                {/* end fact */}
              </div>
              {/* end statistic-percent */}
            </div>
            {/* end col-xs-6 col-sm-3 col-md-3 */}

            {/* countTo */}
            <div className="col-xs-6 col-sm-3 col-md-3">
              <div className="statistic-percent" data-perc="126">
                <div className="facts-icons">
                  {' '}
                  <span className="flaticon-commercial-delivery-symbol-of-a-list-on-clipboard-on-a-box-package"></span>{' '}
                </div>
                <div className="fact">
                  {' '}
                  <span className="percentfactor">126</span>
                  <p>Order Received</p>
                </div>
                {/* end fact */}
              </div>
              {/* end statistic-percent */}
            </div>
            {/* end col-xs-6 col-sm-3 col-md-3 */}

            {/* countTo */}
            <div className="col-xs-6 col-sm-3 col-md-3">
              <div className="statistic-percent" data-perc="274">
                <div className="facts-icons">
                  {' '}
                  <span className="flaticon-free-delivery-truck"></span>{' '}
                </div>
                <div className="fact">
                  {' '}
                  <span className="percentfactor">274</span>
                  <p>Free Delivery</p>
                </div>
                {/* end fact */}
              </div>
              {/* end statistic-percent */}
            </div>
            {/* end col-xs-6 col-sm-3 col-md-3 */}

            {/* countTo */}
            <div className="col-xs-6 col-sm-3 col-md-3">
              <div className="statistic-percent" data-perc="434">
                <div className="facts-icons">
                  {' '}
                  <span className="flaticon-ocean-transportation"></span>{' '}
                </div>
                <div className="fact">
                  {' '}
                  <span className="percentfactor">434</span>
                  <p>Completed Projects</p>
                </div>
                {/* end fact */}
              </div>
              {/* end statistic-percent */}
            </div>
            {/* end col-xs-6 col-sm-3 col-md-3 */}
          </div>
          {/* End row */}
        </div>
        {/* end container */}
      </div>
      {/* =-=-=-=-=-=-= SEPARATOR END =-=-=-=-=-=-= */}
      {/* =-=-=-=-=-=-= Our Team =-=-=-=-=-=-= */}
      <section id="team" className="custom-padding white">
        <div className="container">
          {/* title-section */}
          <div className="main-heading text-center">
            <h2>our caretakes</h2>
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
            {/* Team Grid */}
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="team-grid">
                <div className="team-image">
                  <img
                    alt=""
                    className="img-responsive"
                    src="images/team/1.jpg"
                  />
                  <div className="team-grid-overlay">
                    <div className="social-media">
                      <a className="facebook" href="#">
                        <i className="fa fa-facebook"></i>
                      </a>
                      <a className="twitter" href="#">
                        <i className="fa fa-twitter"></i>
                      </a>
                      <a className="google" href="#">
                        <i className="fa fa-google-plus"></i>
                      </a>
                      <a className="linkedin" href="#">
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="team-content">
                  <h2>Roman Reigns</h2>
                  <p>Founder</p>
                </div>
              </div>
            </div>
            {/* Team Grid End*/}
            {/* Team Grid */}
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="team-grid">
                <div className="team-image">
                  <img
                    alt=""
                    className="img-responsive"
                    src="images/team/2.jpg"
                  />
                  <div className="team-grid-overlay">
                    <div className="social-media">
                      <a className="facebook" href="#">
                        <i className="fa fa-facebook"></i>
                      </a>
                      <a className="twitter" href="#">
                        <i className="fa fa-twitter"></i>
                      </a>
                      <a className="google" href="#">
                        <i className="fa fa-google-plus"></i>
                      </a>
                      <a className="linkedin" href="#">
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="team-content">
                  <h2>Jean Carron</h2>
                  <p>Director</p>
                </div>
              </div>
            </div>
            {/* Team Grid End*/}
            {/* Team Grid */}
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="team-grid">
                <div className="team-image">
                  <img
                    alt=""
                    className="img-responsive"
                    src="images/team/3.jpg"
                  />
                  <div className="team-grid-overlay">
                    <div className="social-media">
                      <a className="facebook" href="#">
                        <i className="fa fa-facebook"></i>
                      </a>
                      <a className="twitter" href="#">
                        <i className="fa fa-twitter"></i>
                      </a>
                      <a className="google" href="#">
                        <i className="fa fa-google-plus"></i>
                      </a>
                      <a className="linkedin" href="#">
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="team-content">
                  <h2>Arslan Tariq</h2>
                  <p>CEO</p>
                </div>
              </div>
            </div>
            {/* Team Grid End*/}
          </div>
          {/* Row End */}
        </div>
        {/* end container */}
      </section>
      {/* =-=-=-=-=-=-= Our Team End =-=-=-=-=-=-= */}
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
export default About;
