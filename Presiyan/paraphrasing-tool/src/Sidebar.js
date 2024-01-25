import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  sidebar: {
    border: "3px solid #e7e7e7",
    backgroundColor: "#fff",
    borderRadius: 7,
    width: 50, // Increased to accommodate icon + padding
    height: "30vh",
    position: "fixed",
    padding: "20px 0", // Top and bottom padding only
    left: "5%",
    top: "20%",
    transition: "width 0.3s ease-in-out",
    overflow: "hidden", // Prevents content from overflowing
    "&:hover": {
      width: 200, // Width expands on hover to fit text
    },
  },
  sidebarNav: {
    listStyleType: "none",
    margin: 0, // Resets default margin
    padding: 0, // Resets default padding
  },
  navItem: {
    display: "flex", // Corrected the typo here
    alignItems: "center",
    padding: "10px 0", // Consistent padding for top and bottom
  },
  navLink: {
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    color: "rgb(0, 0, 0)",
    padding: "0 10px", // Padding inside the link for spacing
  },
  icon: {
    marginRight: 10,
    width: 24,
    height: "auto",
  },
  toolText: {
    opacity: 0,
    transition: "opacity 0.3s ease-in-out",
    whiteSpace: "nowrap",
  },
  sidebarHover: {
    "&:hover $toolText": {
      opacity: 1,
    },
  },
}));

export default function Sidebar() {
  const classes = useStyles();

  return (
    <aside className={`${classes.sidebar} ${classes.sidebarHover}`}>
      <nav>
        <ul className={classes.sidebarNav}>
          <li className={classes.navItem}>
            <a href="#tool" className={classes.navLink}>
              <img
                src="/paraphrase.png"
                alt="Tool Icon"
                className={classes.icon}
              />
              <span className={classes.toolText}>Paraphrase</span>
            </a>
          </li>
          <li className={classes.navItem}>
            <a href="#tool" className={classes.navLink}>
              <img
                src="/summary.png"
                alt="Tool Icon"
                className={classes.icon}
              />
              <span className={classes.toolText}>Summary</span>
            </a>
          </li>
          <li className={classes.navItem}>
            <a href="#tool" className={classes.navLink}>
              <img
                src="/infograph.png"
                alt="Tool Icon"
                className={classes.icon}
              />
              <span className={classes.toolText}>Infogrph</span>
            </a>
          </li>
          <li className={classes.navItem}>
            <a href="#tool" className={classes.navLink}>
              <img src="/photo.png" alt="Tool Icon" className={classes.icon} />
              <span className={classes.toolText}>Image</span>
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
