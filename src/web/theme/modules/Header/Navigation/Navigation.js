import React from "react";
import { CartModal } from "../../Cart";
import Button from "theme/ui/atoms/Button";
import { IconButton } from "theme/ui/atoms/Icon";
import ReactModal from "react-modal";
import Link from "theme/ui/atoms/Typography/Link";
import ModalContext from "theme/ui/templates/Modal/ModalContext";
import { compose, withState, withHandlers } from "recompose";
import "./Navigation.scss";

const Navigation = ({ isNavigationOpened, toggleNavigation }) => {
  const navigationClasses = `navigation--${
    isNavigationOpened ? "open" : "close"
  }`;
  return (
    <nav className={navigationClasses}>
      <IconButton onClick={toggleNavigation} icon="menu" />
      <ModalContext.Provider value={toggleNavigation}>
        <ReactModal
          bodyOpenClassName="body--modal-opened"
          className="modal__navigation"
          overlayClassName="modal__overlay"
          closeTimeoutMS={200}
          isOpen={isNavigationOpened}
          onRequestClose={toggleNavigation}
        >
          <div className="navigation__linklist">
            <div className="navigation__linklist__label">
              <CartModal>
                {openCart => (
                  <Button type="simple" onClick={openCart}>
                    Cart
                  </Button>
                )}
              </CartModal>
            </div>
            <div className="navigation__linklist__label">
              <Link to="/orderreference" type="simple">
                Order Reference
              </Link>
            </div>
            <div className="navigation__linklist__label">
              <Link type="simple" to="/">
                Home
              </Link>
            </div>
          </div>
        </ReactModal>
      </ModalContext.Provider>
    </nav>
  );
};

export default compose(
  withState("isNavigationOpened", "toggleNavigation", false),
  withHandlers({
    toggleNavigation: props => () =>
      props.toggleNavigation(!props.isNavigationOpened)
  })
)(Navigation);
