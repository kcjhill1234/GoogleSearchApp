import React from "react";
import { Segment } from "semantic-ui-react";
import Header from "../Header/Google.Header";

class Home extends React.Component {
  render() {
    return (
      <Segment className="home">
        <Header />
      </Segment>
    );
  }
}
export default Home;
