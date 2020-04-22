import React from "react";
import Moment from "moment";
import _ from "lodash";

import "./App.css";
import logo from "./logo.svg";

import Hero from "./components/Hero";
import Filters from "./components/Filters";
import Hotels from "./components/Hotels";
import Loader from "./components/Loader";
import Error from "./components/Error";

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
      options: {
        countries: [],
        prices: [],
        rooms: [],
      },
      filteredHotels: [],
      errorApi: null,
      errors: {
        danger: {
          message: "Error obteniendo hoteles. Vuelva más tarde.",
          type: "danger",
        },
        warning: {
          message:
            "No se han encontrado hoteles que coincidan con los parámetros de búsqueda.",
          type: "warning",
        },
      },

      isAllLoaded: false,
      title: "Hotels",
    };
  }
  generateOptions = () => {
    const { countries, prices } = this.state;

    const roomsFilter = [
      { value: null, name: "Cualquier tamaño" },
      { value: 10, name: "Hotel pequeño" },
      { value: 20, name: "Hotel mediano" },
      { value: 30, name: "Hotel grande" },
    ];

    const countriesFilter = countries.sort().map((country) => {
      return {
        name: country,
        value: country,
      };
    });
    const pricesFilter = prices.sort().map((price) => {
      return {
        value: price,
        name: "$".repeat(price),
      };
    });

    pricesFilter.unshift({ value: 0, name: "Cualquier precio" });
    countriesFilter.unshift({ value: 0, name: "Todos los países" });
    this.setState({
      options: {
        countries: countriesFilter,
        prices: pricesFilter,
        rooms: roomsFilter,
      },
    });
  };

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
        const prices = [],
          countries = [];
        hotels.map((hotel) => {
          if (!prices.includes(hotel.price)) prices.push(hotel.price);
          if (!countries.includes(hotel.country)) countries.push(hotel.country);
        });
        this.setState({
          hotels: hotels,
          isAllLoaded: true,
          prices: prices,
          countries: countries,
        });
        this.filterHotels();

        this.generateOptions();
      })
      .catch((e) => {
        this.setState({
          error: true,
        });
      });
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
    const {
      title,
      filters,
      filteredHotels,
      dateLimits,
      isAllLoaded,
      options,
      errors,
      errorApi,
    } = this.state;
    return (
      <div className="App">
        <Hero {...{ title, ...filters }} />
        <Filters
          {...{ filters, dateLimits, ...options }}
          onFilterChange={this.handleFilterChange}
        />
        {!isAllLoaded ? (
          !errorApi ? (
            <Loader />
          ) : (
            <Error {...errors.danger} />
          )
        ) : filteredHotels.length ? (
          <Hotels data={filteredHotels} />
        ) : (
          <Error {...errors.warning} />
        )}
      </div>
    );
  }
}

export default App;
