import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Room = ({ room }) => {
  const { images, name, slug, price } = room;

  return (
    <article className="room">
      <div className="img-container">
        <img src={images[0]} alt="Single Featured Room" />
        <div className="price-top">
          <h6>${price}</h6>
          <p>Per Night</p>
        </div>
        <Link to={`/rooms/${slug}`} className="btn-primary room-link">
          Features
        </Link>
        <p className="room-info">{name}</p>
      </div>
    </article>
  );
};

Room.propTypes = {
  room: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired
  })
};

export default Room;
