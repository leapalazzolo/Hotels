import React from "react";
import Moment from "moment";
import _ from "lodash";

import "./App.css";
import logo from "./logo.svg";

import Hero from "./components/Hero";
import Filters from "./components/Filters";
import Hotels from "./components/Hotels";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dateLimits: {
        dateFrom: {
          min: Moment(),
          max: Moment().add(3, "month"),
        },
        dateTo: {
          min: null,
          max: null,
        },
      },
      filters: {
        dateFrom: Moment(),
        dateTo: Moment().add(1, "week"),
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

  updateDateToLimits = () => {
    const { dateFrom } = this.state.filters;
    const dateTo = {
      min: Moment(dateFrom).add(1, "day"),
      max: Moment(dateFrom).add(1, "day").add(3, "month"),
    };
    this.setState((prevState) => ({
      dateLimits: {
        ...prevState.dateLimits,
        dateTo: dateTo,
      },
    }));
  };
  handleFilterChange = (payload) => {
    const { dateTo } = this.state.filters;
    if (Moment(payload.dateFrom).isSameOrAfter(dateTo)) {
      payload.dateTo = Moment(payload.dateFrom).add(1, "day");
    }
    this.setState({
      filters: payload,
    });
    this.updateDateToLimits();
    this.filterHotels();
  };
  filterHotels = () => {
    const { hotels, filters } = this.state;
    const { dateFrom, dateTo, price, country, rooms } = filters;
    const filteredHotelsByDateFrom = dateFrom
      ? hotels.filter((hotel) =>
          Moment(hotel.availabilityFrom).isSameOrBefore(dateFrom, "day")
        )
      : hotels;
    const filteredHotelsByDateTo = dateTo
      ? hotels.filter((hotel) =>
          Moment(hotel.availabilityTo).isSameOrAfter(dateTo, "day")
        )
      : hotels;
    const filteredHotelsByPrice = price
      ? hotels.filter((hotel) => hotel.price === parseInt(price))
      : hotels;
    const filteredHotelsByCountry = country
      ? hotels.filter((hotel) => hotel.country === country)
      : hotels;
    const filteredHotelsByRooms = rooms
      ? hotels.filter((hotel) => hotel.rooms <= parseInt(rooms))
      : hotels;
    this.setState({
      filteredHotels: _.intersection(
        filteredHotelsByDateFrom,
        filteredHotelsByDateTo,
        filteredHotelsByPrice,
        filteredHotelsByCountry,
        filteredHotelsByRooms
      ),
    });
  };
  componentDidMount() {
    this.updateDateToLimits();
    fetch(
      "https://wt-8a099f3e7c73b2d17f4e018b6cfd6131-0.sandbox.auth0-extend.com/acamica"
    )
      .then((hotels) => hotels.json())
      .then((hotels) => {
        const prices = [], countries = [], rooms = [];
        hotels.map((hotel) => {
          if (!prices.includes(hotel.price)) prices.push(hotel.price);
          if (!countries.includes(hotel.country)) countries.push(hotel.country);
          if (!rooms.includes(hotel.rooms)) rooms.push(hotel.rooms);
        });
        this.setState({
          hotels: hotels,
          isAllLoaded: true,
          prices: prices,
          countries: countries,
          rooms: rooms
        });
        this.filterHotels();
      })
      .catch((e) => console.log("Error en la petición..." + e));
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
    const { title, filters, filteredHotels, dateLimits, countries, prices, rooms } = this.state;
    return (
      <div className="App">
        <Hero {...{ title, ...filters }} />
        <Filters
          {...{filters, dateLimits, prices, countries, rooms}}
          onFilterChange={this.handleFilterChange}
        />
        <Hotels data={filteredHotels} />
      </div>
    );
  }
  s;
}

export default App;
