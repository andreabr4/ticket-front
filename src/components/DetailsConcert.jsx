import LeafletMap from "./LeafletMap";
import { useState, useContext } from "react";
import UserContext from "../UserContext";
import { useTranslation } from "react-i18next";
import { Link, Navigate, useNavigate } from "react-router-dom";

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
        Authorization: `${token}`,
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

  return (
    <>
      <div className="details-concert-container">
        <h2>{concertContext.musician}</h2>
        <img
          src={concertContext.image}
          alt={`${concertContext.musician} concert`}
        />
        <p>{concertContext.description[i18n.language]}</p>
        <p>
          {t("details_details")}
          <br></br>
          {t("details_place")}{" "}
          {concertContext.place.city + "(" + concertContext.place.country + ")"}
          <br></br>
          {t("details_date")} {concertContext.date.toLocaleString()}
          <br></br>
          {t("details_price")} {concertContext.price} €<br></br>
          <br></br>
          <iframe
            src={`https://open.spotify.com/embed/artist/${concertContext.spotifyID}?utm_source=generator&theme=0`}
            width="75%"
            height="152"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
            loading="lazy"
          ></iframe>{" "}
        </p>
        <div>
          <h2>{t("details_select_n_tickets")}</h2>
          <br></br>
          <div className="ticket-counter">
            <button onClick={decrementTickets} disabled={ticketCount <= 0}>
              -
            </button>

            <span> {ticketCount} </span>

            <button onClick={incrementTickets}>+</button>
          </div>
          <br></br>
          {loginUser === null ? (
            <button disabled>{t("details_pay")}</button>
          ) : (
            <button onClick={goToPayment}>{t("details_pay")}</button>
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
