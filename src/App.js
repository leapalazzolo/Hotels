import React from "react";
import Moment from "moment";

import "./App.css";
import logo from "./logo.svg";

import Hero from "./components/Hero";
import Filters from "./components/Filters";
import Hotels from "./components/Hotels";
import hotelsData from "./assets/scripts/data";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: {
        dateFrom: Moment(new Date()).format("YYYY-MM-DD"),
        dateTo: Moment().add(1, "month").format("YYYY-MM-DD"),
        country: null,
        price: null,
        rooms: null,
      },
      hotels: [],
      filteredHotels: [],
      isAllLoaded: false,
      title: "Hotels",
      subtitle: "",
    };
  }
  updateSubtitle = () => {
    return `desde el <b>${this.state.filters.dateFrom}</b> hasta el <b>${
      this.state.filters.dateTo
    }</b>
      ${this.state.filters.country ? "en " + this.state.filters.country : ""} ${
      this.state.filters.price ? "por " + this.state.filters.price : ""
    } ${
      this.state.filters.rooms
        ? "de hasta " + this.state.filters.rooms + " habitaciones"
        : ""
    }`;
  };
  handleFilterChange = (payload) => {
    this.setState({
      filters: payload,
    });
  };
  componentDidMount() {
    fetch(
      "https://wt-8a099f3e7c73b2d17f4e018b6cfd6131-0.sandbox.auth0-extend.com/acamica"
    )
      .then((hotels) => hotels.json())
      .then((hotels) => {
        this.setState({
          hotels: hotels,
          isAllLoaded: true,
          filteredHotels: hotels,
        });
        updateSubtitle();
      })
      .catch(() => console.log("Error en la petición..."));
  }
  warning() {
    return (
      <article className="message is-warning">
        <div className="message-body">
          No se han encontrado hoteles con los criterios definidos
        </div>
      </article>
    );
  }
  render() {
    const { title, subtitle, filters, hotels } = this.state;
    return (
      <div className="App">
        <Hero {...{ title, subtitle }} />
        <Filters filters={filters} onFilterChange={this.handleFilterChange} />
        <Hotels data={hotels} />
      </div>
    );
  }
  s;
}

export default App;
