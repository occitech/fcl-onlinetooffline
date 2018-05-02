import React from "react";
import { CartModal } from "../../Cart";
import Button from "theme/ui/atoms/Button";
import { IconButton } from "theme/ui/atoms/Icon";
import ReactModal from "react-modal";
import Link from "theme/ui/atoms/Typography/Link";
import ModalContext from "theme/ui/templates/Modal/ModalContext";
import { withState, withHandlers } from "recompose";
import compose from "recompose/compose";
import "./Navigation.scss";

const Navigation = ({ isNavigationOpened, setOpenStateNavigation }) => {
  const navigationClasses = `navigation--${
    isNavigationOpened ? "open" : "close"
  }`;
  console.log(navigationClasses);
  return (
    <nav className={navigationClasses}>
      <IconButton onClick={setOpenStateNavigation} icon="menu" />
      <ModalContext.Provider
        value={() => {
          console.log("requestClose");
          setOpenStateNavigation();
        }}
      >
        <ReactModal
          bodyOpenClassName="body--modal-opened"
          className="modal__navigation"
          overlayClassName="modal__overlay"
          closeTimeoutMS={200}
          isOpen={isNavigationOpened}
          onRequestClose={() => {
            console.log("requestClose");
            setOpenStateNavigation();
          }}
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
              <Link to={`orderreference`} type="simple">
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
