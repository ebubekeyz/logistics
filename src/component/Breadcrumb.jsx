const Breadcrumb = ({ header1, header2, link, linkText }) => {
  return (
    <div>
      {/* =-=-=-=-=-=-= PAGE BREADCRUMB =-=-=-=-=-=-= */}
      <section className="breadcrumbs-area parallex">
        <div className="container">
          <div className="row">
            <div className="page-title">
              <div className="col-sm-12 col-md-6 page-heading text-left">
                <h3>{header1}</h3>
                <h2>{header2}</h2>
              </div>
              <div className="col-sm-12 col-md-6 text-right">
                <ul className="breadcrumbs">
                  <li>
                    <a href="/">home</a>
                  </li>

                  <li>
                    <a href={link}>{linkText}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* =-=-=-=-=-=-= PAGE BREADCRUMB END =-=-=-=-=-=-= */}
    </div>
  );
};
export default Breadcrumb;
