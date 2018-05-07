import { graphql } from "react-apollo";

export default SelectStoreQuery =>
  graphql(SelectStoreQuery, {
    props: ({ data }) => {
      return {
        loading: data.loading,
        store: data.loading ? null : data.store
      };
    }
  });
