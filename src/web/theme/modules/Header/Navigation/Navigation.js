import React from "react";
import { CartModal } from "../../Cart";
import Button from "theme/ui/atoms/Button";
import { IconButton } from "theme/ui/atoms/Icon";
import ReactModal from "react-modal";
import Link from "theme/ui/atoms/Typography/Link";
import ModalContext from "theme/ui/templates/Modal/ModalContext";
import { compose, withState, withHandlers } from "recompose";
import "./Navigation.scss";

const Navigation = ({ isNavigationOpened, setOpenStateNavigation }) => {
  const navigationClasses = `navigation--${
    isNavigationOpened ? "open" : "close"
  }`;
  return (
    <nav className={navigationClasses}>
      <IconButton onClick={setOpenStateNavigation} icon="menu" />
      <ModalContext.Provider value={setOpenStateNavigation}>
        <ReactModal
          bodyOpenClassName="body--modal-opened"
          className="modal__navigation"
          overlayClassName="modal__overlay"
          closeTimeoutMS={200}
          isOpen={isNavigationOpened}
          onRequestClose={setOpenStateNavigation}
        >
          <div className="navigation__linklist">
            <div className="navigation__linklist__label">
              <CartModal>
                {openCart => (
                  <Button type="invisible" onClick={openCart}>
                    Cart
                  </Button>
                )}
              </CartModal>
            </div>
            <div className="navigation__linklist__label">
              <Link to={"/orderreference"} type="simple">
                Order Reference
              </Link>
            </div>
          </div>
        </ReactModal>
      </ModalContext.Provider>
    </nav>
  );
};

export default compose(
  withState("isNavigationOpened", "setOpenStateNavigation", false),
  withHandlers({
    setOpenStateNavigation: props => () =>
      props.setOpenStateNavigation(!props.isNavigationOpened)
  })
)(Navigation);
