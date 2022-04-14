import { Outlet } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import Container from '../Container/Container';
import s from './Layout.module.css';

const Layout = () => {
  return (
    <>
      <header className={s.header}>
        <Navigation />
      </header>
      <Container>
        <Outlet />
      </Container>
    </>
  );
};

export default Layout;
