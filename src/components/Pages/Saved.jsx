import React from "react";
import { Header } from "semantic-ui-react";
import Results from "../Page-Layout/Results";

export default function Saved() {
  return (
    <div>
      <Header as="h1">React Google Books Search</Header>
      <Header as="h3">Search for and Save Books of Interest</Header>
      <Results />
    </div>
  );
}
