import React from "react";
import { Segment, Header } from "semantic-ui-react";
import ResultsTable from "./Results-Table";

export default function Results() {
  return (
    <Segment className>
      <Header as="h4">Results</Header>
      <Segment>
        <ResultsTable />
      </Segment>
    </Segment>
  );
}
