import NavLink from "./components/NavLink";

const Navbar = () => {
  const links = ["/", "/blog", "/project", "/about"];

  const renderLink = (link: string) => {
    const linkText =
      link === "/"
        ? "Home"
        : link.replace("/", "").charAt(0).toUpperCase() + link.slice(2);
    
    return (
        <NavLink url={link} text={linkText}/>
    );
  };

  return (
    <nav className="sticky top-0 navbar bg-neutral">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links.map((link) => renderLink(link))}
          </ul>
        </div>

        <ul className="menu menu-horizontal px-1 hidden lg:flex">
          {links.map((link) => renderLink(link))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
