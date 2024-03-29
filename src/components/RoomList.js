import React from "react";
import Room from "./Room";

const RoomList = ({ rooms }) => {
  console.log("Rooms sent to List: ", rooms);
  if (rooms.length === 0) {
    return (
      <div className="empty-search">
        <h3>Unfortunately no rooms matched your search parameters</h3>
      </div>
    );
  }
  return (
    <section className="roomslist">
      <div className="roomslist-center">
        {rooms.map((room, index) => {
          return <Room key={index} room={room} />;
        })}
      </div>
    </section>
  );
};

export default RoomList;
