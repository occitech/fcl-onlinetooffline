import React from "react";
import HomeQuery from "./HomeQuery.gql";
import EnhanceHome from "./EnhanceHome";
import ProductList from "theme/modules/ProductList";
import LoadingArea from "theme/ui/molecules/LoadingArea";
import Page from "theme/ui/templates/Page";

const Home = ({ store, category, loading }) => (
  <Page>
    {loading ? (
      <LoadingArea>Loading products…</LoadingArea>
    ) : (
      <ProductList products={category.layer.products} />
    )}
  </Page>
);

export default EnhanceHome(HomeQuery)(Home);
