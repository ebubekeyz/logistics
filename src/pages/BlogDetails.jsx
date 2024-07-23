import { Breadcrumb } from '../component';

const BlogDetails = () => {
  return (
    <div>
      {/* =-=-=-=-=-=-= PRELOADER =-=-=-=-=-=-= */}
      <div className="preloader">
        <span className="preloader-gif"></span>
      </div>

      <Breadcrumb
        header1="Our Feeds"
        header2="Latest News"
        link="/blog-details"
        linkText="Blog"
      />

      {/* =-=-=-=-=-=-= Blog & News =-=-=-=-=-=-= */}
      <section id="blog" className="custom-padding">
        <div className="container">
          {/* Row */}
          <div className="row">
            {/* Left Content Area */}
            <div className="col-sm-12 col-xs-12 col-md-8">
              {/* blog-grid */}
              <div className="news-box no-space">
                {/* post image */}
                <div className="news-thumb">
                  {/* slider post */}
                  <div id="post-slider" className="owl-carousel owl-theme">
                    <div className="item">
                      <img
                        className="img-responsive"
                        src="images/blog/detail-1.jpg"
                        alt=""
                      />
                    </div>
                    <div className="item">
                      <img
                        className="img-responsive"
                        src="images/blog/detail-2.jpg"
                        alt=""
                      />
                    </div>
                    <div className="item">
                      <img
                        className="img-responsive"
                        src="images/blog/detail-3.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                  {/* slider post end */}
                  <div className="date">
                    {' '}
                    <strong>21</strong>
                    <span>Jun</span>{' '}
                  </div>
                </div>
                {/* post image end */}

                {/* blog detail */}
                <div className="news-detail single">
                  <h2>
                    <a title="" href="blog-detail.html">
                      top benefits of hiring our logistics service
                    </a>
                  </h2>

                  <p>
                    Phasellus nec mattis purus, vel varius lorem. Mauris enim
                    nisl, malesuada non tincidunt efficitur, malesuada in
                    tellus. Curabitur risus eros, porta vitae tristique rhoncus,
                    eleifend vitae felis. Ut iaculis sapien lacus, vitae varius
                    neque fringilla non. Proin vitae lacus quis eros rhoncus
                    pharetra sed ut mauris. Fusce vel lobortis lacus.
                    Pellentesque enim lectus, tincidunt sit amet mi vel, egestas
                    viverra libero. In vel eros a sapien vehicula tempor.
                    Suspendisse congue dui ut tortor egestas, id malesuada lacus
                    consectetur. In blandit ipsum nec rutrum finibus. Ut
                    scelerisque, est sed ornare interdum, ligula turpis
                    condimentum diam, quis hendrerit nulla neque in nibh. Proin
                    lectus libero, lobortis quis pellentesque eu, tincidunt vel
                    tortor. Fusce consectetur placerat tellus malesuada
                    fermentum. Aliquam ut semper velit. Quisque condimentum
                    viverra posuere.{' '}
                  </p>

                  <blockquote>
                    1984 saw a severe downturn in the fish industry, which led
                    the company to diversify again into the oil industry. The
                    cold store side of the business was sold in 1988 to
                    concentrate on the oil and paper industries throughout the
                    UK and Europe.
                  </blockquote>

                  <p>
                    Sed nec leo quam. Proin convallis diam ac eros gravida
                    tincidunt. Quisque sollicitudin, nunc in luctus pharetra,
                    dolor massa vehicula massa, sed feugiat dui purus semper
                    neque. Vivamus interdum nunc id justo convallis, eget auctor
                    est eleifend. Fusce in dui aliquet, congue lorem id, congue
                    diam. Maecenas elementum urna lobortis venenatis tincidunt.
                    Suspendisse ac pulvinar est. Phasellus at neque justo.
                  </p>

                  <p>
                    Pellentesque malesuada fringilla elit, vitae aliquam lectus
                    posuere ac. Suspendisse suscipit diam vel tortor mollis
                    fermentum non quis tellus. Nulla facilisi. Integer placerat
                    elit ante
                  </p>

                  <h2>
                    <a title="" href="blog-detail.html">
                      top benefits of hiring our logistics service
                    </a>
                  </h2>

                  <p>
                    Pellentesque malesuada fringilla elit, vitae aliquam lectus
                    posuere ac. Suspendisse suscipit diam vel tortor mollis
                    fermentum non quis tellus. Nulla facilisi. Integer placerat
                    elit ante
                  </p>
                  <p>
                    Sed nec leo quam. Proin convallis diam ac eros gravida
                    tincidunt. Quisque sollicitudin, nunc in luctus pharetra,
                    dolor massa vehicula massa, sed feugiat dui purus semper
                    neque. Vivamus interdum nunc id justo convallis, eget auctor
                    est eleifend. Fusce in dui aliquet, congue lorem id, congue
                    diam. Maecenas elementum urna.
                  </p>

                  <ul>
                    <li>
                      Proin quis lacinia leo, vel suscipit metus. Vivamus
                      dapibus porttitor risus.
                    </li>
                    <li>
                      Quisque sit amet egestas ipsum. Aliquam eleifend volutpat
                      felis vel euismod. Integer lobortis lorem vel magna
                      tempor.
                      <ol>
                        <li>
                          Nulla facilisi. Pellentesque malesuada fringilla elit,
                          vitae aliquam lectus posuere ac
                        </li>
                        <li>
                          Praesent rhoncus efficitur nibh, commodo interdum ex
                          lacinia ac. Ut viverra volutpat lorem, non varius erat
                          mattis in.{' '}
                        </li>
                        <li>
                          Sed eu rutrum enim. Nunc eleifend neque eu odio
                          maximus faucibus vel et odio. Phasellus eu lorem et
                          velit dapibus tristique sit amet vitae magna. In at
                          diam eu
                        </li>
                      </ol>
                    </li>
                    <li>
                      Proin quis lacinia leo, vel suscipit metus. Vivamus
                      dapibus porttitor risus.
                    </li>
                    <li>
                      Sed nec leo quam. Proin convallis diam ac eros gravida
                      tincidunt. Quisque sollicitudin, nunc in luctus pharetra,
                      dolor massa vehicula massa.
                    </li>
                  </ul>
                  <p>
                    Pellentesque malesuada fringilla elit, vitae aliquam lectus
                    posuere ac. Suspendisse suscipit diam vel tortor mollis
                    fermentum non quis tellus. Nulla facilisi. Integer placerat
                    elit ante
                  </p>
                  <div className="row">
                    <div className="col-md-6 col-sm-6">
                      <a className="tt-lightbox" href="images/blog/5.jpg">
                        <img
                          alt="foto"
                          src="images/blog/5.jpg"
                          className="post-img img-responsive"
                        />
                      </a>
                    </div>
                    <div className="col-md-6 col-sm-6">
                      <a className="tt-lightbox" href="iimages/blog/6.html">
                        <img
                          alt="foto"
                          src="images/blog/6.jpg"
                          className="post-img img-responsive"
                        />
                      </a>
                    </div>
                  </div>

                  <p>
                    Pellentesque malesuada fringilla elit, vitae aliquam lectus
                    posuere ac. Suspendisse suscipit diam vel tortor mollis
                    fermentum non quis tellus. Nulla facilisi. Integer placerat
                    elit ante
                  </p>

                  <div className="post-bottom clearfix">
                    <div className="tag_cloud">
                      <a href="#.">Hair</a>
                      <a href="#.">Waxing</a>

                      <a href="#.">Curling</a>
                      <a href="#.">Makeup</a>
                    </div>
                    <div className="share-items pull-right">
                      <ul className="social-icons unstyled">
                        <li>
                          <a
                            title=""
                            data-placement="top"
                            data-toggle="tooltip"
                            target="_blank"
                            href="#"
                            data-original-title="Facebook"
                          >
                            <i className="fa fa-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            title=""
                            data-placement="top"
                            data-toggle="tooltip"
                            target="_blank"
                            href="#"
                            data-original-title="Twitter"
                          >
                            <i className="fa fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            title=""
                            data-placement="top"
                            data-toggle="tooltip"
                            target="_blank"
                            href="#"
                            data-original-title="Instagram"
                          >
                            <i className="fa fa-instagram"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            title=""
                            data-placement="top"
                            data-toggle="tooltip"
                            target="_blank"
                            href="#"
                            data-original-title="Pinterest"
                          >
                            <i className="fa fa-pinterest"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* blog detail end */}
              </div>
              {/* blog-grid end */}

              <div className="clearfix"></div>

              {/* blog-comment section */}

              <div className="blog-section">
                <div className="custom-heading">
                  <h2>Comments (20)</h2>
                </div>

                <ol className="comment-list">
                  {/* comment-list    */}
                  <li className="comment">
                    <div className="comment-info">
                      <img
                        alt="author"
                        src="images/blog/comment.png"
                        className="pull-left hidden-xs"
                      />
                      <div className="author-desc">
                        <div className="author-title">
                          <strong>Arslan Tariq</strong>
                          <ul className="list-inline pull-right">
                            <li>
                              <a href="#">22 Feb 2016</a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-reply"></i> Reply
                              </a>
                            </li>
                          </ul>
                        </div>
                        <p>
                          You wanna be where everyboody knows Your name. And a
                          we knooow Flipper lives in a world full of wonder
                          flying there-under under the sea creepy and kooky
                        </p>
                      </div>
                    </div>
                    <ol className="children">
                      <li className="comment">
                        <div className="comment-info">
                          <img
                            alt="author"
                            src="images/blog/comment.png"
                            className="pull-left hidden-xs"
                          />
                          <div className="author-desc">
                            <div className="author-title">
                              <strong>John Cena</strong>
                              <ul className="list-inline pull-right">
                                <li>
                                  <a href="#">22 Feb 2016</a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fa fa-reply"></i> Reply
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <p>
                              The first mate and his Skipper too this is will do
                              their very best to make the most others
                              comfortable in their tropic lives in a world of
                              wonder.
                            </p>
                          </div>
                        </div>
                        {/* .comment-info */}
                      </li>
                    </ol>
                    {/* .children */}
                  </li>
                  {/* comment */}
                  <li className="comment">
                    <div className="comment-info">
                      <img
                        alt="author"
                        src="images/blog/comment.png"
                        className="pull-left hidden-xs"
                      />
                      <div className="author-desc">
                        <div className="author-title">
                          <strong>Roman Smith</strong>
                          <ul className="list-inline pull-right">
                            <li>
                              <a href="#">18 Jan 2016</a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-reply"></i> Reply
                              </a>
                            </li>
                          </ul>
                        </div>
                        <p>
                          You wanna be where everyboody knows Your name. And a
                          we knooow Flipper lives in a world full of wonder
                          flying there-under under the sea creepy and kooky
                        </p>
                      </div>
                    </div>
                    {/* .comment-info */}
                  </li>
                  {/* .comment */}
                </ol>
              </div>
              {/* blog-comment section end*/}

              {/* blog-comment feedback */}
              <div className="blog-section">
                <div className="custom-heading">
                  <h2>Post Your Comments</h2>
                </div>

                <form
                  action="#"
                  method="post"
                  id="commentform"
                  name="commentform"
                >
                  <div className="row">
                    <div className="col-sm-6">
                      {/* Name */}
                      <div className="form-group">
                        <label for="author">
                          Name<span className="required">*</span>
                        </label>
                        <input
                          type="text"
                          name="author"
                          className="form-control"
                          id="author"
                          placeholder="Name"
                        />
                      </div>
                    </div>
                    {/* End col-sm-6 */}

                    <div className="col-sm-6">
                      {/* Email */}
                      <div className="form-group">
                        <label for="email">
                          Email<span className="required">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          className="form-control"
                          id="email"
                          placeholder="Email"
                        />
                      </div>
                    </div>
                    {/* End col-sm-6 */}

                    <div className="col-sm-12">
                      {/* Comment */}
                      <div className="form-group">
                        <label for="comment">
                          Comment<span className="required">*</span>
                        </label>
                        <textarea
                          className="form-control"
                          name="comment"
                          id="comment"
                          rows="10"
                        ></textarea>
                      </div>
                    </div>
                    {/* End col-sm-12 */}

                    <div className="col-sm-6">
                      <button
                        type="submit"
                        id="send"
                        className="btn btn-primary"
                      >
                        Post your comment
                      </button>
                    </div>
                    {/* End col-sm-6 */}
                  </div>
                  {/* End row */}
                </form>
              </div>
              {/* blog-comment feedback end */}
            </div>
            {/* Left Content Area */}

            {/* Right Sidebar Area */}
            <div className="col-sm-12 col-xs-12 col-md-4">
              {/* sidebar */}
              <div className="side-bar">
                {/* widget */}
                <div className="search">
                  <div className="widget">
                    <form>
                      <input type="text" placeholder="SEARCH BLOG" />
                      <button type="submit">
                        {' '}
                        <i className="fa fa-search"></i>
                      </button>
                    </form>
                  </div>
                </div>
                {/* widget end */}

                {/* widget */}
                <div className="widget">
                  <div className="latest-news">
                    <h2>Latest News</h2>

                    <div className="post">
                      <figure className="post-thumb">
                        <img alt="" src="images/blog/small-1.png" />
                      </figure>
                      <h4>
                        <a href="#">
                          Differentiate Yourself And Attract More Attention{' '}
                        </a>
                      </h4>
                      <div className="post-info">1 hour ago</div>
                    </div>

                    <div className="post">
                      <figure className="post-thumb">
                        <img alt="" src="images/blog/small-2.png" />
                      </figure>
                      <h4>
                        <a href="#">
                          Differentiate Yourself And Attract More Attention{' '}
                        </a>
                      </h4>
                      <div className="post-info">1 hour ago</div>
                    </div>

                    <div className="post">
                      <figure className="post-thumb">
                        <img alt="" src="images/blog/small-3.png" />
                      </figure>
                      <h4>
                        <a href="#">
                          Differentiate Yourself And Attract More Attention{' '}
                        </a>
                      </h4>
                      <div className="post-info">1 hour ago</div>
                    </div>

                    <div className="post">
                      <figure className="post-thumb">
                        <img alt="" src="images/blog/small-4.png" />
                      </figure>
                      <h4>
                        <a href="#">
                          Differentiate Yourself And Attract More Attention{' '}
                        </a>
                      </h4>
                      <div className="post-info">1 hour ago</div>
                    </div>
                  </div>
                </div>
                {/* widget end */}

                {/* widget */}
                <div className="widget">
                  <div className="category">
                    <h2>Category</h2>
                    <ul>
                      <li>
                        <a href="#">Web Design </a>{' '}
                      </li>
                      <li>
                        <a href="#">Graphic Design</a>
                      </li>
                      <li>
                        <a href="#">App Development</a>
                      </li>
                      <li>
                        <a href="#">3D Design</a>
                      </li>
                      <li>
                        <a href="#">Plugin Development</a>
                      </li>
                      <li>
                        <a href="#">Expert Review</a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* widget end */}

                {/* widget */}
                <div className="widget">
                  <div className="gallery">
                    <h2>Gallery</h2>

                    <div className="gallery-image">
                      <a href="#">
                        <img alt="" src="images/blog/small-5.png" />
                      </a>
                      <a href="#">
                        <img alt="" src="images/blog/small-6.png" />
                      </a>
                      <a href="#">
                        <img alt="" src="images/blog/small-7.png" />
                      </a>
                      <a href="#">
                        <img alt="" src="images/blog/small-8.png" />
                      </a>
                      <a href="#">
                        <img alt="" src="images/blog/small-9.png" />
                      </a>
                      <a href="#">
                        <img alt="" src="images/blog/small-10.png" />
                      </a>
                      <a href="#">
                        <img alt="" src="images/blog/small-1.png" />
                      </a>
                      <a href="#">
                        <img alt="" src="images/blog/small-2.png" />
                      </a>
                      <a href="#">
                        <img alt="" src="images/blog/small-3.png" />
                      </a>
                      <a href="#">
                        <img alt="" src="images/blog/small-4.png" />
                      </a>
                      <a href="#">
                        <img alt="" src="images/blog/small-11.png" />
                      </a>
                      <a href="#">
                        <img alt="" src="images/blog/small-12.png" />
                      </a>
                    </div>
                  </div>
                </div>
                {/* widget end */}

                {/* widget */}
                <div className="widget">
                  <div className="archive">
                    <h2>Archives</h2>
                    <ul>
                      <li>
                        <a href="#">August 2016</a>
                      </li>
                      <li>
                        <a href="#">July 2016</a>
                      </li>
                      <li>
                        <a href="#">June 2016 </a>
                      </li>
                      <li>
                        <a href="#">May 2016 </a>
                      </li>
                      <li>
                        <a href="#">April 2014 </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* widget end */}

                {/* widget */}
                <div className="widget">
                  <div className="widget_tag_cloud">
                    <h2>Tags cloud</h2>
                    <div className="tag_cloud">
                      <a href="#.">Hair</a>
                      <a href="#.">Waxing</a>
                      <a href="#.">Body</a>
                      <a href="#.">Oil</a>
                      <a href="#.">Facials</a>
                      <a href="#.">Cutting</a>

                      <a href="#.">Blowouts</a>
                      <a href="#.">Curling</a>
                      <a href="#.">Makeup</a>
                    </div>
                  </div>
                </div>
                {/* widget end */}
              </div>
              {/* sidebar end */}
            </div>
            {/* Right Sidebar Area End */}
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
export default BlogDetails;
