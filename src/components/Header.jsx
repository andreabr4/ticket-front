import { useState, useContext, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import UserContext from "../UserContext";
import { useTranslation } from "react-i18next";

import LanguageSwitcher from "./Switcher";

function Header() {
  let navigate = useNavigate();
  let location = useLocation();
  const { loginUser, setLoginUser } = useContext(UserContext);

  const { t } = useTranslation();

  function handleLogout() {
    setLoginUser(null);
    navigate("/");
  }

  return (
    <>
      <header className="navbar bg-base-100 bg-black">
        <div className="flex-1">
          <Link to="/">
            <img src="../../images/logoWhite.png" className="w-40 h-auto"></img>
          </Link>
        </div>

        <div>
          <LanguageSwitcher></LanguageSwitcher>
        </div>

        <div className="flex-none">
          {loginUser !== null ? (
            <>
              <span className="text-lg">
                {t("welcome_message")}, {loginUser.email}
              </span>{" "}
              |{" "}
              <span className="btn btn-ghost" onClick={handleLogout}>
                {t("log_out")}
              </span>
            </>
          ) : (
            <div>
              <Link to="/login" className="btn btn-neutral">
                {t("log_in")}
              </Link>
              ("")
              <Link to="/signup" className="btn btn-primary">
                {t("sign_up")}
              </Link>
              ("")
            </div>
          )}
        </div>
      </header>
    </>
  );
}

export default Header;
