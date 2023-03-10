import React from "react";
import MainHeader from "./MainHeader";
import classes from "./MainNavigation.module.css";
import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";
import { useState } from "react";
import Backdrop from "../components/UIElements/Backdrop";

export default function MainNavagation(props) {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const openDrawerHanlder = () => {
    setDrawerIsOpen(true);
  };

  const closeDrawerHandler = () => {
    setDrawerIsOpen(false);
  };
  return (
    <>
      {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}

      <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
        <nav className={classes.main_navigation_drawer_nav}>
          <NavLinks />
        </nav>
      </SideDrawer>

      <MainHeader>
        <button
          className={classes.main_navigation_menu_btn}
          onClick={openDrawerHanlder}
        >
          <span />
          <span />
          <span />
        </button>
        <h1 className={classes.main_navigation_title}>
          <Link to={"/"}>Your Places</Link>
        </h1>
        <nav className={classes.main_navigation_header_nav}>
          <NavLinks />
        </nav>
      </MainHeader>
    </>
  );
}
