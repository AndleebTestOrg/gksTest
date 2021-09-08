import React, { useState } from "react";
// import { Link } from "react-router-dom";
import Header from "../../components/Header";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
// import { Swiper } from "swiper/react/swiper";
// import { SwiperSlide } from "swiper/react/swiper-slide";

import moviePhoto from "../../images/movie.jpg";

import "swiper/swiper.min.css";
// import "swiper/css/navigation";
import "swiper/components/navigation/navigation.min.css";
SwiperCore.use([Navigation]);

// https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg

import "../../styles/seating.css";
import Seat from "../../components/Seating/Seat";

export default function Seating() {
  const [requiredSeats, setRequiredSeats] = useState(1);
  return (
    <div className="seating-wrapper">
      <Header />
      <div className="main-content">
        <div className="movie-ticket-wrapper">
          <div className="movie-section">
            <img
              className="movie-section__photo"
              src={moviePhoto}
              alt=""
              srcSet=""
            />
            <div className="movie-section__details">
              <div className="movie-headline">
                <div className="movie-genre">ACTION / SCI-FI</div>
                <div className="movie-title">Incpetion</div>
              </div>
              <div className="movie-ticket-info">
                <div className="movie-showtime">
                  <div className="movie-showtime__header">SHOWTIME</div>
                  <div className="movie-showtime__details">
                    <span className="movie-showtime__cinema">
                      Abc Cinema Palace &#10072;
                    </span>
                    <span className="movie-showtime__time">
                      <span className="date"> Mar 8, 6:00pm</span>
                    </span>
                  </div>
                  <button className="btn btn--sm btn--outlined btn--rounded btn--blue movie-showtime__btn">
                    Change
                  </button>
                </div>
                <div className="movie-seats-required">
                  <div className="seats-required__header">SEATS REQUIRED</div>
                  <div className="seats-required__content">
                    <div className="seats-required-desc">
                      Select number of seats required
                    </div>
                    <Swiper
                      slidesPerView={5}
                      navigation={true}
                      spaceBetween={1}
                      pagination={{ clickable: true }}
                      className="seats-carousel"
                    >
                      {Array.from(Array(10).keys()).map((n) => (
                        <SwiperSlide
                          onClick={() => setRequiredSeats(n + 1)}
                          key={"no" + n}
                          className={
                            requiredSeats === n + 1
                              ? "seat-slide active"
                              : "seat-slide"
                          }
                        >
                          {n + 1}
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="seating">
          <div className="seating__header">
            <div className="seat-legend">
              <Seat variant="vip" seatNo={1} />
              <Seat variant="regular" seatNo={2} />
              <Seat variant="unavailable" seatNo={3} />
              <Seat variant="available" seatNo={4} />
              <Seat variant="selected" seatNo={5} />
            </div>
          </div>
        </div>
      </div>
      <div className="seats-footer"></div>
    </div>
  );
}
