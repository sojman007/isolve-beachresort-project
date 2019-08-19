import React, { Component } from "react";
import Title from "./Title.js";
import { FaHiking, FaBeer, FaShuttleVan, FaCocktail } from "react-icons/fa";

class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free Cocktails",
        content: "some text goes in here"
      },
      {
        icon: <FaHiking />,
        title: "Free Hiking",
        content:
          "kjbadfjbasdfkbsadn ;k f bjjkfasbdfue  ijasdbfkj jafueo'bfa dnm;"
      },
      {
        icon: <FaShuttleVan />,
        title: "Free Shuttling",
        content: "lksahdlkhsadfoeihfsa asjdf kjbsdaf kiewu,sbfe "
      },
      {
        icon: <FaBeer />,
        title: "Strongest of Beers",
        content: "Drink Responsibly"
      }
    ]
  };

  render() {
    const { services } = this.state;
    return (
      <section className="services">
        <Title title="Services" />
        <div className="services-center">
          {services.map((service, index) => {
            return (
              <article key={index} className="service">
                <span>{service.icon}</span>
                <h6>{service.title}</h6>
                <p>{service.content}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}

export default Services;
