import { Breadcrumb, CallToAction } from '../component';

const Services = () => {
  return (
    <div>
      {/* =-=-=-=-=-=-= PRELOADER =-=-=-=-=-=-= */}
      <div className="preloader">
        <span className="preloader-gif"></span>
      </div>

      <Breadcrumb
        header1="Our Expertise"
        header2="Our Services"
        link="/services"
        linkText="Our Services"
      />

      {/* =-=-=-=-=-=-= Our Services =-=-=-=-=-=-= */}
      <section className="custom-padding services">
        <div className="container">
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
              <div className="col-md-4 col-xs-12 col-sm-6">
                {/* services grid */}

                <div className="services-grid">
                  <div className="icons">
                    {' '}
                    <i className="flaticon-view-symbol-on-delivery-opened-box"></i>
                  </div>
                  <h4>ware housing</h4>
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
                    <i className="flaticon-sea-ship-with-containers"></i>
                  </div>
                  <h4>Sea Freight</h4>
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
                    <i className="flaticon-delivery-truck-with-packages-behind"></i>
                  </div>
                  <h4>Door To Door Devivery </h4>
                  <p>
                    We have the right caring, experience and dedicated
                    professional for you.
                  </p>
                </div>
              </div>
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

      <CallToAction
        text="Not sure which solution fits you business needs?"
        text2="Get a quote"
        link="javascript:void(0)"
      />

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
export default Services;
