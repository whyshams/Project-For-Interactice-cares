import React, { useState, useEffect } from "react";
import demoData from "../../demoData.json";
import { NavLink } from "react-router-dom";
import { HiMenuAlt2, HiMenuAlt3 } from "react-icons/hi";
const Navbar = () => {
  const navData = demoData.navigation;
  const [WindowWidth, setWindowWidth] = useState(window.innerWidth);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function menuClick() {
    setMenuOpen(!menuOpen);
  }
  console.log(WindowWidth);

  return (
    <div>
      {/*PC Screen Navbar*/}
      {WindowWidth > 580 && (
        <div className="Navbar">
          {navData.map((data) => (
            <div key={data.slug}>
              <NavLink to={data.slug}>{data.name}</NavLink>
            </div>
          ))}
        </div>
      )}
      {/*Mobile screen Menu*/}
      {WindowWidth < 580 && (
        <div className="mobile-menu">
          <div onClick={menuClick}>
            {menuOpen ? <HiMenuAlt2 /> : <HiMenuAlt3 />}
          </div>
          <div>
            {menuOpen && (
              <div className="mobile-link">
                {navData.map((data) => (
                  <div key={data.slug}>
                    <NavLink to={data.slug}>{data.name}</NavLink>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
