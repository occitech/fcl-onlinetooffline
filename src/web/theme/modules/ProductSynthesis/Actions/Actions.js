import React from "react";
import AddToCart from "theme/ui/molecules/AddToCart";
import { CartModal } from "../../Cart";
import Link from "theme/ui/atoms/Typography/Link";

const Actions = ({ product }) => {
  return (
    <div className="product-actions">
      <CartModal>
        {openCart => (
          <AddToCart sku={product.sku} onAdded={openCart}>
            Add to cart
          </AddToCart>
        )}
      </CartModal>
      <Link to={`/tryit/${product.sku}`} type="dark">
        Try it first in our store
      </Link>
    </div>
  );
};

export default Actions;
