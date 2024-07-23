import { Breadcrumb } from '../component';

const Profile = () => {
  return (
    <div>
      {/* =-=-=-=-=-=-= PRELOADER =-=-=-=-=-=-= */}
      <div className="preloader">
        <span className="preloader-gif"></span>
      </div>

      <Breadcrumb
        header1="My Account"
        header2="My Profile"
        link="/profile"
        linkText="Profile"
      />

      {/* =-=-=-=-=-=-= Blog & News =-=-=-=-=-=-= */}
      <section id="blog" className="custom-padding">
        <div className="container">
          {/* Row */}
          <div className="row">
            <div className="col-sm-12 col-xs-12 col-md-4">
              {/* sidebar */}
              <div className="profile-sidebar">
                <form>
                  <div className="form-group">
                    <div className="input-group">
                      <span className="input-group-btn">
                        <span className="btn btn-default btn-file">
                          Browse… <input type="file" id="imgInp" />
                        </span>
                      </span>
                      <input type="text" className="form-control" readonly />
                    </div>
                    <img
                      id="img-upload"
                      className="img-responsive"
                      src="images/avatar.png"
                      alt=""
                    />
                  </div>
                </form>

                {/* SIDEBAR MENU */}
                <div className="profile-usermenu">
                  <ul className="nav">
                    <li className="active">
                      <a href="#">
                        <i className="glyphicon glyphicon-home"></i>
                        Overview{' '}
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="glyphicon glyphicon-user"></i>
                        Account Settings{' '}
                      </a>
                    </li>
                    <li>
                      <a target="_blank" href="#">
                        <i className="glyphicon glyphicon-ok"></i>
                        Tasks{' '}
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="glyphicon glyphicon-flag"></i>
                        Help{' '}
                      </a>
                    </li>
                  </ul>
                </div>
                {/* END MENU */}
              </div>
              {/* sidebar end */}
            </div>

            <div className="col-sm-12 col-xs-12 col-md-8">
              <div className="row">
                <div className="profile-section margin-bottom-20">
                  <div className="profile-tabs">
                    <ul className="nav nav-justified nav-tabs">
                      <li className="active">
                        <a href="#profile" data-toggle="tab">
                          Profile
                        </a>
                      </li>
                      <li>
                        <a href="#edit" data-toggle="tab">
                          Edit Profile
                        </a>
                      </li>
                      <li>
                        <a href="#payment" data-toggle="tab">
                          Payment Options
                        </a>
                      </li>
                      <li>
                        <a href="#settings" data-toggle="tab">
                          Notification Settings
                        </a>
                      </li>
                    </ul>
                    <div className="tab-content">
                      <div
                        className="profile-edit tab-pane fade in active"
                        id="profile"
                      >
                        <h2 className="heading-md">
                          Manage your Name, ID and Email Addresses.
                        </h2>
                        <p>
                          Below are the name and email addresses on file for
                          your account.
                        </p>
                        <br />
                        <dl className="dl-horizontal">
                          <dt>
                            <strong>Your name </strong>
                          </dt>
                          <dd>Muhammad Umair</dd>
                          <hr />
                          <dt>
                            <strong>Your ID </strong>
                          </dt>
                          <dd>UZ1-23456</dd>
                          <hr />
                          <dt>
                            <strong>Company name </strong>
                          </dt>
                          <dd>Scripts Bundle</dd>
                          <hr />
                          <dt>
                            <strong>Email Address </strong>
                          </dt>
                          <dd>contact@scriptsbundle.com</dd>
                          <hr />
                          <dt>
                            <strong>Phone Number </strong>
                          </dt>
                          <dd>(0423) 12-2345-789</dd>
                          <hr />
                          <dt>
                            <strong>Office Number </strong>
                          </dt>
                          <dd>(+92) 12-3456-789</dd>
                          <hr />
                          <dt>
                            <strong>Address </strong>
                          </dt>
                          <dd>Lahore, PK</dd>
                          <hr />
                        </dl>
                        <button
                          className="btn btn-sm btn-default"
                          type="button"
                        >
                          Cancel
                        </button>
                        <button
                          className="btn btn-sm btn-primary"
                          type="button"
                        >
                          Save Changes
                        </button>
                      </div>

                      <div className="profile-edit tab-pane fade" id="edit">
                        <h2 className="heading-md">
                          Manage your Security Settings
                        </h2>
                        <p>Change your password.</p>
                        <br />
                        <form>
                          <label>Your Name </label>
                          <input
                            type="text"
                            className="form-control margin-bottom-20"
                          />

                          <label>
                            Email Address <span className="color-red">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control margin-bottom-20"
                          />

                          <label>
                            Contact Number <span className="color-red">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control margin-bottom-20"
                          />

                          <label>
                            Address <span className="color-red">*</span>
                          </label>
                          <textarea
                            className="form-control margin-bottom-20"
                            rows="3"
                          ></textarea>

                          <div className="row">
                            <div className="col-md-8 col-sm-8 col-xs-12">
                              <div className="checkbox checkbox-primary">
                                <input
                                  type="checkbox"
                                  checked=""
                                  id="checkbox2"
                                />
                                <label for="checkbox2">
                                  I read <a href="#">Terms and Conditions</a>
                                </label>
                              </div>
                            </div>

                            <div className="col-md-4 col-sm-4 col-xs-12 text-right">
                              <button
                                type="submit"
                                className="btn btn-primary btn-sm"
                              >
                                Update My Info
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>

                      <div className="profile-edit tab-pane fade" id="payment">
                        <h2 className="heading-md">
                          Manage your Payment Settings
                        </h2>
                        <p>Below are the payment options for your account.</p>
                        <br />
                        <form
                          action="#"
                          id="sky-form"
                          className="sky-form"
                          novalidate
                        >
                          {/*Checkout-Form*/}

                          <div className="payment-group margin-bottom-30">
                            <div className="radio radio-info radio-inline">
                              <input
                                type="radio"
                                id="inlineRadio1"
                                defaultValue="option1"
                                name="radioInline"
                                checked=""
                              />
                              <label for="inlineRadio1"> Visa</label>
                            </div>
                            <div className="radio radio-info radio-inline">
                              <input
                                type="radio"
                                id="inlineRadio2"
                                defaultValue="option1"
                                name="radioInline"
                              />
                              <label for="inlineRadio2"> MasterCard </label>
                            </div>
                            <div className="radio radio-info radio-inline">
                              <input
                                type="radio"
                                id="inlineRadio3"
                                defaultValue="option1"
                                name="radioInline"
                              />
                              <label for="inlineRadio3"> PayPal </label>
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-sm-9 col-md-9">
                              <input
                                type="text"
                                className="form-control margin-bottom-20"
                                placeholder="Card number"
                                id="card"
                                name="card"
                              />
                            </div>
                            <div className="col-sm-3 col-md-3">
                              <input
                                type="text"
                                className="form-control margin-bottom-20"
                                placeholder="CVV2"
                                id="cvv"
                                name="cvv"
                              />
                            </div>
                          </div>

                          <div className="row">
                            <label className="col-md-4">
                              <span className="expiration-date">
                                Expiration Date
                              </span>{' '}
                              <span className="color-red">*</span>
                            </label>

                            <div className="col-md-5 ">
                              <select name="month" className="form-control ">
                                <option
                                  defaultValue="0"
                                  selected=""
                                  disabled=""
                                >
                                  Month
                                </option>
                                <option defaultValue="1">January</option>
                                <option defaultValue="1">February</option>
                                <option defaultValue="3">March</option>
                                <option defaultValue="4">April</option>
                                <option defaultValue="5">May</option>
                                <option defaultValue="6">June</option>
                                <option defaultValue="7">July</option>
                                <option defaultValue="8">August</option>
                                <option defaultValue="9">September</option>
                                <option defaultValue="10">October</option>
                                <option defaultValue="11">November</option>
                                <option defaultValue="12">December</option>
                              </select>
                            </div>
                            <div className="col col-md-3">
                              <label className="input">
                                <input
                                  type="text"
                                  className="form-control margin-bottom-20"
                                  name="year"
                                  id="year"
                                  placeholder="Year"
                                />
                              </label>
                            </div>
                          </div>
                          <button
                            className="btn btn-sm btn-default"
                            type="button"
                          >
                            Cancel
                          </button>
                          <button
                            type="submit"
                            className="btn btn-sm btn-primary"
                          >
                            Save Changes
                          </button>
                          {/*End Checkout-Form*/}
                        </form>
                      </div>

                      <div className="profile-edit tab-pane fade" id="settings">
                        <h2 className="heading-md">
                          Manage your Notifications.
                        </h2>
                        <p>Below are the notifications you may manage.</p>
                        <br />
                        <form>
                          <div className="checkbox checkbox-info checkbox-circle">
                            <input type="checkbox" checked="" id="c1" />
                            <label for="c1">
                              Send me email notification when when order is
                              processed
                            </label>
                          </div>
                          <hr />
                          <div className="checkbox checkbox-info checkbox-circle">
                            <input type="checkbox" checked="" id="c2" />
                            <label for="c2">
                              Send me email notification when when order is
                              delivered
                            </label>
                          </div>
                          <hr />
                          <div className="checkbox checkbox-info checkbox-circle">
                            <input type="checkbox" checked="" id="c3" />
                            <label for="c3">
                              Send me email notification for the latest update
                            </label>
                          </div>
                          <hr />
                          <div className="checkbox checkbox-info checkbox-circle">
                            <input type="checkbox" checked="" id="c4" />
                            <label for="c4">
                              Receive our monthly newsletter
                            </label>
                          </div>
                          <hr />
                          <div className="checkbox checkbox-info checkbox-circle">
                            <input type="checkbox" checked="" id="c5" />
                            <label for="c5">Email notification</label>
                          </div>
                          <hr />

                          <div className="button-group margin-top-20">
                            <button
                              className="btn btn-sm btn-default"
                              type="button"
                            >
                              Reset
                            </button>
                            <button
                              type="submit"
                              className="btn btn-sm btn-primary"
                            >
                              Save Changes
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Row End */}
        </div>
        {/* end container */}
      </section>
      {/* =-=-=-=-=-=-= Blog & News end =-=-=-=-=-=-= */}

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
      {/* =-=-=-=-=-=-= Quote Modal End =-=-=-=-=-=-= */}
    </div>
  );
};
export default Profile;
