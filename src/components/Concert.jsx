import { useEffect, useState, useContext } from "react";
import UserContext from "../UserContext";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Carrusel from "./Carrusel";

function GetConcerts() {
  const [concerts, setConcerts] = useState([]);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    fetch("http://localhost:3000/concert/concerts")
      .then((res) => res.json())
      .then((data) => {
        let newConcerts = [];
        data.forEach((concert) => {
          newConcerts.push(concert);
        });

        setConcerts(newConcerts);
      });
  }, []);

  const navigate = useNavigate();
  const { setConcertContext } = useContext(UserContext);

  const handleBuyTickets = (concert) => {
    setConcertContext(concert);
    navigate("/details");
  };

  return (
    <>
      <Carrusel></Carrusel>
      <div className="flex justify-center items-start pt-10">
        {" "}
        <div className="concerts-container">
          <h2 className="text-2xl font-bold mb-10 text-center items-center">{t("concerts")}</h2>
     
     
          <ul className="grid grid-cols-3 auto-cols-max w-100 gap-6">
            {concerts.map((concert, i) => (
              <li key={i} className="concert-item ">
                <div className="card shadow-xl mb-10 items-center text-center">
                  <img
                    src={concert.image}
                    alt={`${concert.musician} concert`}
                  />

                  <div className="card-body text-center items-center">
                    <p className="card-title font-bold text-center items-center">
                      {concert.musician}
                    </p>
                    <br/>
                    <p className="items-center text-center">
                      {concert.description[i18n.language]}
                    </p>
                  </div>


                  <div className="card-actions">
                    <button
                      className="btn-lg btn-none items-right text-right"
                      onClick={() => handleBuyTickets(concert)}
                    >
                      <img
                        src="../../images/play_icon.png"
                        className="btn-white btn-circle w-8 h-8"
                      ></img>
                      {/* ▶ */}
                      {/* ► */}
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default GetConcerts;
