import React from "react";
import { H1 } from "theme/ui/atoms/Typography/Heading";
import "./OrderReference.scss";
import Button from "theme/ui/atoms/Button";
import AddToCartMutation from "./AddToCartMutation.gql";
import { Mutation } from "react-apollo";
import EnhanceOrderReference from "./EnhanceOrderReference";

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
      <div className="order-reference__action">
        <Mutation mutation={AddToCartMutation} onCompleted={() => {}}>
          {(addToCart, { loading }) => (
            <Button
              onClick={e => {
                e.preventDefault();
                customerOrder.products && customerOrder.products.length > 0
                  ? customerOrder.products.map(product =>
                      addToCart({ variables: { sku: product.sku } })
                    )
                  : () => {};
              }}
              status={loading ? "loading" : ""}
              type="dark"
            >
              Use your code
            </Button>
          )}
        </Mutation>

        <input onChange={checkCustomerID} type="number" id="customerOrderId" />
      </div>
    </div>
  );
};

OrderReference.propType = {};

export default EnhanceOrderReference()(OrderReference);
