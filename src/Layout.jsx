import { NavLink, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
  <div className='layout-container'>
    <nav className='navbar'>
      <NavLink to='/' className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink>
      <NavLink to='/Price-Checker' className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Price Checker</NavLink>
    </nav>

    <main className='Main-Content'>
      <Outlet />
    </main>
</div>
);
};

export default Layout;