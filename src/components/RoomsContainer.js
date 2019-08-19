import React from "react";
import RoomsFilter from "./RoomsFilter";
import RoomList from "./RoomList";
import { RoomConsumer } from "../Context";
import Loading from "./Loading";

/**
 * ALTERNATIVE IMPLEMENTATION TO USING CONTEXT
 * import {HigherOrderComponent} from "../context";
 * import React from "react";
 * import RoomsFilter from "./RoomsFilter";
 * import RoomList from "./RoomList";
 *  
 * const RoomsContainer=({context})=>{
 *  const { loading, sortedRooms, rooms } = context;
 * 
 *  if(loading){
 *  
 *  return <Loading />;
 * }
 * return (
*       <div>
            Hello From Rooms Container
            <RoomList rooms={sortedRooms} />
            <RoomsFilter rooms={rooms} />
        </div>
 * 
 * );
 * 
 * }
 * 
 * export default HigherOrderComponent(RoomsContainer) 
 * 
 */

const RoomsContainer = () => {
  return (
    <RoomConsumer>
      {value => {
        const { loading, sortedRooms, rooms } = value;
        /**
         * the aim is to pass the sorted Rooms to the rooms list
         * while we can pass the rooms array to the filter
         */
        if (loading) {
          return <Loading />;
        }
        return (
          <div>
            <RoomsFilter rooms={rooms} />
            <RoomList rooms={sortedRooms} />
          </div>
        );
      }}
    </RoomConsumer>
  );
};

export default RoomsContainer;
