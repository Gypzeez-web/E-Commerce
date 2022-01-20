import React from "react";
import "./topBar.css";

import { NotificationsNone, Search } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Gypzeez</span>
        </div>

        <div className="topRight">
          <div className="topbarIconContainer">
            <Search />
          </div>
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
        </div>
      </div>
    </div>
  );
}
