import React from "react";
import { Header } from "semantic-ui-react";
import ResultsTable from "./Results-Table";

export default function Results() {
  return (
    <div>
      {" "}
      <Header as="h4">Results</Header>
      <ResultsTable />
    </div>
  );
}
