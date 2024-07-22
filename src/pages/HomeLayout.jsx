import { Outlet, useNavigation } from 'react-router-dom';

import { Header, Loading } from '../component';

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
        </div>
      )}
    </>
  );
};
export default HomeLayout;
