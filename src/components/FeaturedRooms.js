import React, { Component } from "react";
import { RoomContext } from "../Context";
import Title from "../components/Title";
import Loading from "./Loading";
import Room from "./Room";

class FeaturedRooms extends Component {
  static contextType = RoomContext;

  render() {
    let { loading, featuredRooms } = this.context;
    
    featuredRooms = featuredRooms.map(room => {
      return <Room key={room.id} room={room} />;
    });

    return (
      <section className="featured-rooms">
        <Title title="Featured Rooms" />
        <div className="featured-rooms-center">
          {loading ? <Loading /> : featuredRooms}
        </div>
      </section>
    );
  }
}

export default FeaturedRooms;
