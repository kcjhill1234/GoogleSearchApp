import React from "react";
import { Input, Form, Button } from "semantic-ui-react";

export default function BookSearch() {
  return (
    <Form>
      <h4>Book Search</h4>
      <h5>Book</h5>
      <Input fluid size="large" focus placeholder="Search..." icon="search" />
      <Button>Search</Button>
    </Form>
  );
}
