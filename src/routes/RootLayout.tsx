import {Outlet} from 'react-router-dom';

import MainHeader from '../components/MainHeader.tsx';

import classes from './RootLayout.module.css';

export const RootLayout = () => {
  return (
    <>
      <main
        className={classes.page}
      >
        <MainHeader/>
        <Outlet/>
      </main>
    </>
  );
};

export default RootLayout;
