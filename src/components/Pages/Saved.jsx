import React from "react";
import { Segment, Header } from "semantic-ui-react";

export default function Saved() {
  return (
    <Segment className="saved">
      <Header as="h1">React Google Books Search</Header>
      <Header as="h3">Search for and Save Books of Interest</Header>
    </Segment>
  );
}