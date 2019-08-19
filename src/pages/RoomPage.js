import React from "react";
import defaultImage from "../images/defaultBcg.jpeg";
import Banner from "../components/Banner.js";
import { Link } from "react-router-dom";
import { RoomContext } from "../Context.js";
import StyledHero from "../components/StyledHero";

class RoomPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultImage
    };
  }
  static contextType = RoomContext;

  render() {
    let { getRoom } = this.context;
    const room = getRoom(this.state.slug);
    console.log(room);
    if (!room) {
      return (
        <div className="error">
          <h3>No Such Room Could Be Found...</h3>
          <Link to="/rooms" className="btn-primary">
            Back To Rooms
          </Link>
        </div>
      );
    }
    /**
     * if room does does not exist or is undefined, render above
     * other wise, access the properties of the room for rendering
     */
    const {
      name,
      price,
      size,
      pets,
      capacity,
      images,
      breakfast,
      extras,
      description
    } = room;
    const [mainImg, ...others] = images;

    return (
      <>
        <StyledHero img={mainImg || this.state.defaultImage}>
          <Banner title={`${name}`}>
            <Link to="/rooms" className="btn-primary">
              Back to Rooms
            </Link>
          </Banner>
        </StyledHero>
        <section className="single-room">
          <div className="single-room-images">
            {others.map((image, index) => {
              return <img key={index} src={image} alt={name} />;
            })}
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3>Details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>Info</h3>
              <h6>Price: ${price}</h6>
              <h6>Size: {size} SQFT</h6>
              <h6>Pets: {pets ? "Allowed" : "Not Allowed"}</h6>
              <h6>
                max capacity:{" "}
                {capacity < 2 ? capacity + " person" : capacity + " people"}
              </h6>
              <h6>
                Breakfast:{" "}
                {breakfast
                  ? "Free Breakfast Included"
                  : "Free breakfast not included"}
              </h6>
            </article>
          </div>
        </section>
        <section className="room-extras">
          <h6>Extras</h6>
          <ul className="extras">
            {extras.map((item, index) => {
              return <li key={index}>- {item}</li>;
            })}
          </ul>
        </section>
      </>
    );
  }
}

export default RoomPage;
