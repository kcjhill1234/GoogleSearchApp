import React from "react";
import { Header } from "semantic-ui-react";
import BookSearch from "../Page-Layout/Book-Search";
import Results from "../Page-Layout/Results";

export default function Search() {
  return (
    <div>
      {" "}
        <Header as="h1">React Google Books Search</Header>
        <Header as="h3">Search for and Save Books of Interest</Header>
      <BookSearch />
      <Results />
    </div>
  );
}
