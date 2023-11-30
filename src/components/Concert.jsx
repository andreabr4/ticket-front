import { useEffect, useState, useContext } from "react";
import UserContext from "../UserContext";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Carrusel from "./Carrusel";

function GetConcerts() {
  const [concerts, setConcerts] = useState([]);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    fetch( process.env.DOMAIN+"/concert/concerts")
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
          <h2 className="text-2xl font-bold mb-10 text-center items-center">
            {t("concerts")}
          </h2>

          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
            {concerts.map((concert, i) => (
              <li key={i} className="flex flex-grow concert-item p-4">
                <div className="card shadow-xl mb-10 items-center text-center">
                  <img
                    src={concert.image}
                    alt={`${concert.musician} concert`}
                  />

                  <div className="card-body text-center items-center">
                    <p className="card-title font-bold text-center items-center">
                      {concert.musician}
                    </p>
                    <br />
                    <p className="items-center text-center">
                      {concert.description[i18n.language]}
                    </p>
                  </div>

                  <div className="card-actions">
                    <button
                      className="btn-lg sm:btn-md text-sm btn-none"
                      onClick={() => handleBuyTickets(concert)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-8 h-8 mb-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
                        />
                      </svg>
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
