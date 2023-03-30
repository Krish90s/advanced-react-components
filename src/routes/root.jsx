import { Outlet, NavLink, Link } from "react-router-dom";

export default function Root() {
  const menuList = [
    { id: 1, label: "Hierarchy List" },
    { id: 2, label: "Navbar Multiselect Dropdown" },
  ];
  return (
    <>
      <div id="sidebar">
        {/* <div>
          <Link className="fw-bold text-dark text-decoration-none" to={`/`}>
            <h6>Home</h6>
          </Link>
        </div> */}
        <nav>
          <ul>
            {menuList.map((item) => (
              <li key={item.id}>
                <NavLink to={`components/${item.id}`}>
                  {`${item.id}. ${item.label}`}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div id="detail">
        <nav className="navbar bg-dark sticky-top" data-bs-theme="dark">
          <div className="container-fluid">
            <span className="navbar-brand mb-0 h1">React</span>
          </div>
        </nav>
        <Outlet />
      </div>
    </>
  );
}
