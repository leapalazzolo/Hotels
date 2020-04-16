import React from "react";
import Moment from "moment";

import "./App.css";
import logo from "./logo.svg";

import Hero from "./components/Hero";
import Filters from "./components/Filters";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: {
        dateFrom: Moment(new Date()).format("YYYY-MM-DD"),
        dateTo: Moment().add(1, "month").format("YYYY-MM-DD"),
        country: "select",
        price: "select",
        rooms: "select",
      },
      hotels: [],
      filteredHotels: [],
      isAllLoaded: false,
      title: "Hotels",
      searchDescription: "",
    };
  }
  updateSearchDescription = () => {
    this.setState({
      searchDescription:
        "Hoteles desde el martes, 1 de enero de 2019 hasta el miércoles, 2 de enero de 2019 en Argentina por $$ de hasta 10 habitaciones.",
    });
  };
  handleFilterChange = (payload) => {
    this.setState({
      filters: payload
    })
  }
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
        this.updateSearchDescription();
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
    const { title, searchDescription, filters } = this.state;
    //      <Hero filters={ filters } />
    //      <Filters filters={ filters } />
    return (
      <div className="App">
        <Hero {...filters} />
        <Filters {...filters} onFilterChange={this.handleFilterChange}/>
      </div>
    );
  }
  s;
}

export default App;
