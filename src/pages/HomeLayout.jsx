import { Outlet, useNavigation } from 'react-router-dom';

import { Header, Header2, Loading, Slider } from '../component';

const HomeLayout = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === 'loading';

  return (
    <>
      {isPageLoading ? (
        <Loading />
      ) : (
        <div>
          <Outlet />
        </div>
      )}
    </>
  );
};
export default HomeLayout;
