import { Outlet, useNavigation } from 'react-router-dom';

import { Footer, Header, Loading, Slider } from '../component';

const HomeLayout = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === 'loading';

  return (
    <>
      {isPageLoading ? (
        <Loading />
      ) : (
        <div>
          <Header />
          <Outlet />
          <Footer />
        </div>
      )}
    </>
  );
};
export default HomeLayout;
