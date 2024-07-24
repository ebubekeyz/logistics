const Blog = () => {
  return (
    <div>
      {' '}
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
    </div>
  );
};
export default Blog;
