import LeafletMap from "./LeafletMap";
import { useState, useContext } from "react";
import UserContext from "../UserContext";
import { useTranslation } from "react-i18next";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { format } from 'date-fns';

function DetailsConcert() {
  const { concertContext } = useContext(UserContext);
  const [ticketCount, setTicketCount] = useState(1);
  const { loginUser, setLoginUser } = useContext(UserContext);
  const { token } = useContext(UserContext);
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const incrementTickets = () => {
    setTicketCount((prevCount) => prevCount + 1);
  };

  const decrementTickets = () => {
    setTicketCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
  };

  const goToPayment = () => {
    fetch("http://localhost:3000/order/create", {
      method: "POST",
      body: JSON.stringify({
        email: loginUser.email,
        productID: concertContext.productID,
        priceID: concertContext.priceID,
        quantity: ticketCount,
      }),
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((res) => {
      if (res.status >= 400) {
        alert(res.statusText);
      } else {
        res.json().then((data) => {
          window.location.href = data.uri;
        });
      }
    });
  };

  if (!concertContext) {
    return (
      <>
        <h3>{t("concerts_not_selected")}</h3>

        <Link to="/">{t("go_back_concerts")}</Link>
      </>
    );
  }

  const formattedDate = format(new Date(concertContext.date), 'PPpp');


  return (
    <>
      <div className="details-concert-container text-center items-center">
        <h1 className="text-4xl font-bold mt-10 mb-10">
          {concertContext.musician}
        </h1>
        <img
          className="mx-auto block max-w-5xl rounded-lg shadow-lg"
          src={concertContext.image}
          alt={`${concertContext.musician} concert`}
        />
       
        <p className="mr-80 ml-80 mt-20 text-xl">
          {concertContext.description[i18n.language]}
        </p>
        <h2 className="font-bold text-lg ml-80 mr-80 mt-20">{t("details_details")}</h2>
        <br></br>
        <p className="text-lg ml-80 mr-80 mt-2">
        <p className="text-lg text-blue-700 font-bold mt-4">{t("details_place")}{" "}</p>
        {concertContext.place.city + " (" + concertContext.place.country + ")"}
        <br></br>
        {t("details_date")} {formattedDate}
        <br></br>
        <p className="text-lg text-blue-700 font-bold mt-4">{t("details_price")}</p>{concertContext.price} €
        <br></br>
        </p>
        <br></br>
        <iframe className="text-center items-center ml-40"
          src={`https://open.spotify.com/embed/artist/${concertContext.spotifyID}?utm_source=generator&theme=0`}
          width="75%"
          height="152"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
          loading="lazy"
        ></iframe>{" "}
        <div className="text-center items-center font-bold mt-20">
          <h2>{t("details_select_n_tickets")}</h2>
          <br></br>
          <div className="ticket-counter">
            <button className="btn btn-square btn-sm mr-3 btn-secondary" 
            onClick={decrementTickets} disabled={ticketCount <= 0}>
              -
            </button>

            <span className="font-bold"> {ticketCount} </span>

            <button className="btn btn-square btn-sm ml-3 btn-secondary font-bold"
            onClick={incrementTickets}>+</button>
          </div>
          <br></br>
          {loginUser === null ? (
            <button className="btn btn-ghost btn-sm mb-20 font-bold"
            disabled>{t("details_pay")}</button>
          ) : (
            <button className="btn btn-primary btn-sm mb-20"
            onClick={goToPayment}>{t("details_pay")}</button>
          )}
          <br></br>
          <LeafletMap
            latitude={concertContext.place.latitude}
            longitude={concertContext.place.longitude}
          ></LeafletMap>
        </div>
      </div>
    </>
  );
}

export default DetailsConcert;
