import React, { Component } from "react";
import Client from "./Contentful";

/**
 * Docs
 * After creating the context, we create the provider and consumer
 */
const RoomContext = React.createContext();
const RoomProvider = RoomContext.Provider;
const RoomConsumer = RoomContext.Consumer;

class RoomContextProvider extends Component {
  state = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
    type: "any",
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false
  };
  getData = async () => {
    try {
      let response = await Client.getEntries({
        content_type: "beachResortRoom",
        order: "sys.createdAt"
      });
      console.log("response from contentful :=> ", response.items);
      const rooms = this.formatData(response.items);

      let featuredRooms = rooms.filter(room => room.featured === true);
      let maxPrice = Math.max(...rooms.map(room => room.price));
      let maxSize = Math.max(...rooms.map(room => room.size));

      this.setState({
        rooms,
        featuredRooms,
        sortedRooms: rooms,
        loading: false,
        price: maxPrice,
        maxPrice,
        maxSize
      });
    } catch (error) {
      console.log(error);
    }
  };
  componentDidMount() {
    this.getData();
  }

  handleChange = event => {
    const target = event.target;
    const name = event.target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;
    this.setState(
      {
        [name]: value
      },
      this.filterRooms
    );
    console.log("App state after changing :=> ", this.state);
  };

  filterRooms = () => {
    /**
     * here we first destructure the state.. and then use conditionals to work out the filtering
     */

    let {
      rooms,
      type,
      capacity,
      price,
      minSize,
      maxSize,
      breakfast,
      pets
    } = this.state;
    //get all rooms
    let tempRooms = [...rooms];
    //transform values
    capacity = parseInt(capacity);
    price = parseInt(price);
    //filter by type
    if (type === "all") {
      tempRooms = [...rooms];
    }
    if (type !== "all") {
      tempRooms = tempRooms.filter(room => room.type === type);
      console.log("temp rooms from filter by type,: ", tempRooms);
    }

    //filter by capacity
    if (capacity !== 1) {
      tempRooms = tempRooms.filter(room => room.capacity >= capacity);
      console.log("temp rooms from filter by Capacity: ", tempRooms);
    }
    //filter by price range
    tempRooms = tempRooms.filter(room => room.price <= price);
    console.log("temp rooms from filter by price: ", tempRooms);
    //filter by size
    tempRooms = tempRooms.filter(
      room => room.size > minSize && room.size < maxSize
    );

    //filter by breakfast
    if (breakfast) {
      tempRooms = tempRooms.filter(room => room.breakfast === breakfast);
    }
    //filter by pets
    if (pets) {
      tempRooms = tempRooms.filter(room => room.pets === pets);
    } //change state

    this.setState({
      sortedRooms: tempRooms
    });
  };

  formatData(items) {
    let tempItems = items.map(item => {
      let id = item.sys.id;
      let images = item.fields.images.map(image => image.fields.file.url);
      let room = { ...item.fields, images, id };
      /**
       * this is where we have access to the slug.. after destructuring the item.fields} object
       * every tempItem is mapped so as to have a "rooms {which also is mapped to get its own properties }" ,
       *  property assigned to it.
       * in summary tempItems is an array of Rooms.
       */
      return room;
    });
    return tempItems;
  }

  getRoom = slug => {
    let tempRooms = [...this.state.rooms];
    const room = tempRooms.find(room => room.slug === slug);
    return room;
    /**
     * here we are making use of getRoom to get a particular room by providing its slug propery as an argument
     * this is because in the app, a single room will be rendered on the rooms page and the link
     *  to that exact room points to the slug that comes with it
     */
  };
  render() {
    return (
      <RoomProvider
        value={{
          ...this.state,
          getRoom: this.getRoom,
          handleChange: this.handleChange
        }}
      >
        {this.props.children}
      </RoomProvider>
    );
  }
}

/**
 * ALTERNATIVE METHOD TO USE CONTEXT
 *  export function HigherOrderComponent(Component){
 *      return function ConsumerWrapper(props){
 *          return <RoomConsumer>
 *      {value=> <Component {...props} context={value} />
 *
 *
 *
 * }
 *
 * </RoomConsumer>
 *   }
 * }
 *
 */
export { RoomContextProvider, RoomConsumer, RoomContext };
