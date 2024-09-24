import React from "react";
import { Redirect, useParams } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

function FoodItem({ items, cantFind }) {
  const { id } = useParams(); // Get the id of the item from the URL
  
  // Find the item (drink or snack) in the list by its id
  let item = items.find(item => item.id === id);

  // If the item doesn't exist, redirect to the "can't find" page
  if (!item) return <Redirect to={cantFind} />;

  return (
    <section>
      <Card>
        <CardBody>
          {/* Display the name of the item */}
          <CardTitle className="font-weight-bold text-center">{item.name}</CardTitle>
          {/* Display the description, recipe, and serving instructions */}
          <CardText><strong>Description:</strong> {item.description}</CardText>
          <CardText><strong>Recipe:</strong> {item.recipe}</CardText>
          <CardText><strong>Serve:</strong> {item.serve}</CardText>
        </CardBody>
      </Card>
    </section>
  );
}

export default FoodItem;
