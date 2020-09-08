import React from "react";
import { Button, Card, Image } from "semantic-ui-react";

export default function ResultsTable() {
  return (
    <Card.Group>
      <Card fluid>
        <Card.Content extra>
          <div className="two buttons">
            <Card.Header children>Book info</Card.Header>
            <Button floated="right" basic color="green">
              View
            </Button>
            <Button floated="right" basic color="red">
              Save
            </Button>
          </div>
        </Card.Content>
        <Card.Content>
          <Image floated="left" size="small" src="/Saved.png" />
          <Card.Description textAlign="center">
            Book Description
          </Card.Description>
        </Card.Content>
      </Card>
    </Card.Group>
  );
}
