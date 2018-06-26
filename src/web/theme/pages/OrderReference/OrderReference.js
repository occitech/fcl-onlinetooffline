import React from "react";
import { H1 } from "theme/ui/atoms/Typography/Heading";
import "./OrderReference.scss";
import Button from "theme/ui/atoms/Button";
import AddToCartMutation from "theme/ui/molecules/AddToCart/AddToCartMutation.gql";
import { Mutation } from "react-apollo";
import EnhanceOrderReference from "./EnhanceOrderReference";
import { CartModal } from "theme/modules/Cart";

const OrderReference = ({ customerOrder, checkCustomerID }) => {
  return (
    <div className="order-reference">
      <div className="order-reference__title">
        <H1>Order Reference</H1>
      </div>
      <div className="order-reference__catch-phrase">
        Your order is waiting for you
      </div>
      <div className="order-reference__instruction">fill your order code</div>
      <div className={actionClassName}>
        <CartModal>
          {openCart => (
            <Mutation mutation={AddToCartMutation} onCompleted={openCart}>
              {(addToCart, { loading }) => (
                <Button
                  onClick={e => {
                    e.preventDefault();
                    setnoProductFound(false);
                    customerOrder.products && customerOrder.products.length > 0
                      ? customerOrder.products.map(product =>
                          addToCart({ variables: { sku: product.sku } })
                        )
                      : setnoProductFound(true);
                  }}
                  status={loading ? "loading" : ""}
                  type="dark"
                >
                  Use your code
                </Button>
              )}
            </Mutation>
          )}
        </CartModal>
        <input onChange={checkCustomerID} type="number" id="customerOrderId" />
      </div>
    </div>
  );
};

OrderReference.propType = {};

export default EnhanceOrderReference()(OrderReference);
