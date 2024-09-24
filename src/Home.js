import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";

function Home({ snacks, drinks }) {
  return (
    <section className="text-center">
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <h3 className="font-weight-bold">
              Welcome to Silicon Valley's premier dive cafe!
            </h3>
            <p>We have {snacks.length} snacks and {drinks.length} drinks available!</p>
          </CardTitle>
        </CardBody>
      </Card>
    </section>
  );
}

export default Home;
