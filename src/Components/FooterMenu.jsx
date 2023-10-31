import React, { useState, useEffect } from "react";
import demoData from "../../demoData.json";
import { NavLink } from "react-router-dom";

const FooterMenu = () => {
  const navData = demoData.navigation;
  const [WindowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  console.log(WindowWidth);

  return (
    <div>
      {/*PC Screen Navbar*/}
      {WindowWidth > 580 && (
        <div className="Navbar-footer">
          {navData.map((data) => (
            <div key={data.slug}>
              <NavLink to={data.slug}>{data.name}</NavLink>
            </div>
          ))}
        </div>
      )}
      {/*Mobile screen Menu*/}
      {WindowWidth < 580 && <div></div>}
    </div>
  );
};

export default FooterMenu;
