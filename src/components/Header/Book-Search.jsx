import React from "react";
import { Input, Form } from "semantic-ui-react";

export default function BookSearch() {
  return (
    <Form>
      <h4>Book Search</h4>
      <h5>Book</h5>
      <Input size="huge" focus placeholder="Search..." icon="search" />
      <Form.Button>Submit</Form.Button>
    </Form>
  );
}
