const Process = () => {
  return (
    <div>
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
    </div>
  );
};
export default Process;
