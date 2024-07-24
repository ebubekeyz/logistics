const CallToAction = ({ text, text2, link }) => {
  return (
    <div>
      {/* =-=-=-=-=-=-= Call To Action =-=-=-=-=-=-= */}
      <div className="parallex-small ">
        <div className="container">
          <div className="row custom-padding-20 ">
            <div className="col-md-8 col-sm-8">
              <div className="parallex-text">
                <h4>{text}</h4>
              </div>
              {/* end subsection-text */}
            </div>
            {/* end col-md-8 */}

            <div className="col-md-4 col-sm-4">
              <div
                data-target="#request-quote"
                data-toggle="modal"
                className="parallex-button "
              >
                {' '}
                <a href={link} className="page-scroll btn btn-lg btn-clean">
                  {text2} <i className="fa fa-angle-double-right "></i>
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
    </div>
  );
};
export default CallToAction;
