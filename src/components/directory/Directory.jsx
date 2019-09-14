import React, { useState } from "react";
import "./Directory.scss";
import MenuItem from "../menu-item/MenuItem";
import sections from "../../data/DirectoryData"

const Directory = () => {
  const [menu, setMenu] = useState(sections);
  return (
    <div className="directory-menu">
      {menu.map(section => (
        <MenuItem {...section} key={section.id} />
      ))}
    </div>
  );
};

export default Directory;
