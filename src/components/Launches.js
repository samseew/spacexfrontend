import React, { Component } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";

//below is the query you used to summon data using graph ql
const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_date_local
      launch_success
    }
  }
`;

export class Launches extends Component {
  render() {
    return (
      <div>
        <h1 className="display-4 my-3">Launches</h1>
        <Query query={LAUNCHES_QUERY}>
          {({ loading, error, data }) => {
            if (loading) return <h4>Loading..</h4>;
            if (error) console.log(error);
            console.log(data);

            return <h1>Test</h1>;
          }}
        </Query>
      </div>
    );
  }
}

export default Launches;
