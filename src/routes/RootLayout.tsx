import {Outlet} from 'react-router-dom';

import classes from './RootLayout.module.css';
import MainHeader from "../components/MainHeader.tsx";

export const RootLayout = () => {
  return (
    <>
        <main className={classes.page}>
            <MainHeader/>
            <Outlet/>
        </main>
    </>
  );
};

export default RootLayout;
