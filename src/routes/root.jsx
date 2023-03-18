import { Outlet, NavLink, Link } from "react-router-dom";

export default function Root() {
  return (
    <>
      <div id="sidebar">
        <div>
          <Link className="fw-bold text-dark text-decoration-none" to={`/`}>
            <h6>Home</h6>
          </Link>
        </div>
        <nav>
          <ul>
            <li>
              <NavLink to={`components/1`}>1. Hierarchy List</NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
