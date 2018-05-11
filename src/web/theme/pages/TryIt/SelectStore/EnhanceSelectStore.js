import { graphql } from "react-apollo";

export default SelectStoreQuery =>
  graphql(SelectStoreQuery, {
    props: ({ data }) => {
      return {
        loading: data.loading,
        stores: data.loading ? null : data.stores,
        addresses: data.loading
          ? null
          : data.stores.map(({ address }) => ({
              value: address,
              label: address
            }))
      };
    }
  });
