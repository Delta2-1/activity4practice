import { Link, Outlet } from 'react-router-dom';

const Layout = () => (
  <div>
    <nav>
      <Link to="/">Home</Link> | <Link to="/price-checker">Price Checker</Link>
    </nav>
    <hr />
    <Outlet />
  </div>
);

export default Layout;
