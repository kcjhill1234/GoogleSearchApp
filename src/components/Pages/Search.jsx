import React from "react";
import { Segment } from "semantic-ui-react";
import Header from "../Header/Google.Header";
import BookSearch from "../Header/Book.Search";
export default function Search() {
  return (
    <div>
      {" "}
      <Segment className="search">
        <Header />
      </Segment>
      <Segment>
        <BookSearch />
      </Segment>
    </div>
  );
}
