import "./sideBar.css";
import {
  LineStyle,
  Security,
  ContactMail,
  ContactSupport,
  Settings,
} from "@material-ui/icons";

import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <ul className="sidebarList">
            <Link to="/" className="link">
              <div>
                <img
                  src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
                  className="topAvatar"
                />
                <div>
                  <span>Elankumaran</span>
                  <br />
                  <span>siva98kumarane@gmail.com</span>
                </div>
              </div>
            </Link>
            <Link to="/" className="link">
              <li className="sidebarListItem active">
                <Security className="sidebarIcon" />
                Super Admin
              </li>
            </Link>
            <Link to="/" className="link">
              <li className="sidebarListItem active">
                <Security className="sidebarIcon" />
                Admin
              </li>
            </Link>
            <Link to="/" className="link">
              <li className="sidebarListItem active">
                <ContactSupport className="sidebarIcon" />
                Customer Service
              </li>
            </Link>
            <Link to="/" className="link">
              <li className="sidebarListItem active">
                <ContactMail className="sidebarIcon" />
                Accountent
              </li>
            </Link>
            <Link to="/" className="link">
              <li className="sidebarListItem active">
                <LineStyle className="sidebarIcon" />
                Content
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <Settings className="sidebarIcon" />
              Settings
            </li>
            
          </ul>
        </div>
      </div>
    </div>
  );
}
