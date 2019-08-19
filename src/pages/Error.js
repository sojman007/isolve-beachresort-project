import React from "react";
import Hero from "../components/Hero.js";
import Banner from "../components/Banner.js";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <Hero>
      <Banner
        title="ERROR 404"
        subtitle="The page you requested does not exist"
      >
        <Link className="btn-primary" to="/">
          Return Home
        </Link>
      </Banner>
    </Hero>
  );
};

export default Error;
