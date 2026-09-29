import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="site-header">
      <NavLink to="/" className="brand">
        Blog & Do&apos;kon
      </NavLink>
      <nav>
        <ul className="nav-links">
          <li>
            <NavLink
              to="/posts"
              className={({ isActive }) =>
                `nav-link ${isActive ? 'is-active' : ''}`
              }
            >
              Postlar
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/users"
              className={({ isActive }) =>
                `nav-link ${isActive ? 'is-active' : ''}`
              }
            >
              Foydalanuvchilar
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                `nav-link ${isActive ? 'is-active' : ''}`
              }
            >
              Savat
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                `nav-link ${isActive ? 'is-active' : ''}`
              }
            >
              Kirish
            </NavLink>
          </li>
          <li>
            <NavLink to="/register" className="nav-link is-primary">
              Ro&apos;yxatdan o&apos;tish
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
