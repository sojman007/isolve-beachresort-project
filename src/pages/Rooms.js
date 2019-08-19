import React from "react";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Hero from "../components/Hero.js";
import RoomsContainer from "../components/RoomsContainer.js";
const Rooms = () => {
  return (
    <>
      <Hero hero="roomsHero">
        <Banner title="Our Rooms">
          <Link to="/" className="btn-primary">
            Return Home
          </Link>
        </Banner>
      </Hero>
      <RoomsContainer />
    </>
  );
};

export default Rooms;
