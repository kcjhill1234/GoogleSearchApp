import React from "react";
import { Segment, Header } from "semantic-ui-react";

class Home extends React.Component {
  render() {
    return (
      <Segment className="home">
        <Header as="h1">React Google Books Search</Header>
        <Header as="h3">Search for and Save Books of Interest</Header>
      </Segment>
    );
  }
}
export default Home;
