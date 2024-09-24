import React from "react";
import "./FoodMenu.css";
import { Link } from "react-router-dom";
import { Card, CardBody, CardTitle, ListGroup, ListGroupItem } from "reactstrap";


function FoodMenu({ items, title }) {
  return (
    <section className="text-center">
      <Card>
        <CardBody>
          {/* Display the title of the menu (either Snacks or Drinks) */}
          <CardTitle className="font-weight-bold text-center">{title}</CardTitle>
          <ListGroup>
            {/* Loop over the items (snacks or drinks) and display each one */}
            {items.map(item => (
              <ListGroupItem key={item.id}>
                {/* Link each item to its own detail page */}
                <Link to={`/${title.toLowerCase()}/${item.id}`}>
                  {item.name} {/* Display the name of the item */}
                </Link>
              </ListGroupItem>
            ))}
          </ListGroup>
        </CardBody>
      </Card>
    </section>
  );
}

export default FoodMenu;
