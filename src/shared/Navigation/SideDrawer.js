import React from "react";
import classes from "./SideDrawer.module.css";
import { createPortal } from "react-dom";
import { CSSTransition } from "react-transition-group";

export default function SideDrawer(props) {
  const content = (
    <CSSTransition
      in={props.show}
      timeout={200}
      classNames="slide-in-left"
      mountOnEnter
      unmountOnExit
    >
      <aside className={classes.side_drawer} onClick={props.onClick}>
        {props.children}
      </aside>
    </CSSTransition>
  );

  return createPortal(content, document.getElementById("drawer-hook"));
}
