import React, { Fragment } from "react";
import Hero from "../components/Hero.js";
import Banner from "../components/Banner.js";
import FeaturedRooms from "../components/FeaturedRooms";
import { Link } from "react-router-dom";
import Services from "../components/Services";

const Home = () => {
  return (
    <Fragment>
      <Hero>
        <Banner
          title="Luxurious rooms"
          subtitle="Deluxe rooms starting at $299"
        >
          <Link className="btn-primary" to="/rooms">
            Our Rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms />
    </Fragment>
  );
};

export default Home;
