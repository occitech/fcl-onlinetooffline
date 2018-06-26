import { graphql } from "react-apollo";
import compose from "recompose/compose";
import withState from "recompose/withState";
import withHandlers from "recompose/withHandlers";

const orders = [
  { id: 468513544, products: [{ sku: "epi_guitar" }] },
  { id: 123456789, products: [{ sku: "epi_guitar" }, { sku: "epi_guitar02" }] },
  {
    id: 987654321,
    products: [
      { sku: "epi_guitar" },
      { sku: "epi_guitar02" },
      { sku: "epi_guitar" },
      { sku: "epi_guitar02" }
    ]
  },
  {
    id: 654987321,
    products: [
      { sku: "epi_guitar" },
      { sku: "epi_guitar" },
      { sku: "epi_guitar" },
      { sku: "epi_guitar" }
    ]
  },
  {
    id: 654321987,
    products: [
      { sku: "epi_guitar" },
      { sku: "epi_guitar" },
      { sku: "epi_guitar" }
    ]
  }
];

export default () =>
  compose(
    withState("customerOrder", "setCustomerOrder", { id: 0 }),
    withState("noProductFound", "setnoProductFound", false),
    withHandlers({
      checkCustomerID: props => e =>
        orders.filter(order => order.id == e.target.value).length > 0
          ? props.setCustomerOrder(
              orders.filter(order => order.id == e.target.value)[0]
            )
          : props.setCustomerOrder({ id: 0 })
    })
  );
