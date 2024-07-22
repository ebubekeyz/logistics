import Wrapper from '../assets/wrapper/Header';

const Header = () => {
  return (
    <Wrapper>
      <section className="top-bar">
        <div className="container">
          <div className="left-text nav-left pull-left">
            <p>
              <span>Opening Hours :</span> Monday to Saturday - 8am to 5pm
            </p>
          </div>
          {/* <!-- /.left-text --> */}
          <ul className="nav-right pull-right list-unstyled">
            <li>
              <a href="login.html">
                <i class="bi bi-lock-fill"></i> Login{' '}
              </a>
            </li>
            <li>
              {' '}
              <a href="sign-up.html">
                <i class="bi bi-person-fill"></i> Sign Up{' '}
              </a>
            </li>
            <li className="dropdown nav-profile">
              <a
                class="dropdown-toggle"
                data-hover="dropdown"
                data-toggle="dropdown"
                data-animations="fadeInUp"
              >
                <img className="img-circle resize" alt="" src="/avatar.jpg" />
                <span className="hidden-xs small-padding">
                  {' '}
                  <span>Umair</span> <i className="bi bi-caret-down-fill"></i>
                </span>
              </a>
              <ul className="dropdown-menu with-arrow pull-right">
                <li>
                  {' '}
                  <a href="profile.html">
                    {' '}
                    <i class="bi bi-person-fill"></i> <span>My Profile</span>{' '}
                  </a>{' '}
                </li>
                <li>
                  {' '}
                  <a href="history.html">
                    {' '}
                    <i class="bi bi-check"></i> <span>Tracking History</span>{' '}
                  </a>{' '}
                </li>
                <li>
                  {' '}
                  <a href="javascript:void(0)">
                    {' '}
                    <i class="bi bi-lock-fill"></i> <span>Payment Setting</span>{' '}
                  </a>{' '}
                </li>
                <li>
                  {' '}
                  <a href="javascript:void(0)">
                    {' '}
                    <i class="bi bi-box-arrow-right"></i> <span>Log Out</span>{' '}
                  </a>{' '}
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </section>
    </Wrapper>
  );
};
export default Header;
