import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Signup() {
  const [newUser, setNewUser] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const { t } = useTranslation();

  function handleInput(e) {
    let tempNewUser = { ...newUser };
    tempNewUser[e.target.name] = e.target.value;
    setNewUser(tempNewUser);
  }

  function handleClick(e) {
    e.preventDefault();

    fetch("https://p01--ticket-back--5y4264lh9kc4.code.run/users/signup", {
      method: "POST",
      body: JSON.stringify({
        email: newUser.email,
        password: newUser.password,
        name: newUser.name,
        surname: newUser.surname,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => {
        if (response.status == 201) {
          response.json().then((data) => {
            navigate("/login");
          });
        } else {
          alert(response.statusText);
        }
      })
      .catch((err) => alert(err));
  }

  return (
    <>
      <div className="flex justify-center items-start pt-10">
        <form className="w-full max-w-xs">
          <h2 className="mb-5 font-semibold">{t("signup_title")}</h2>
          <input
            className="input input-bordered input-secondary w-full mb-4"
            onChange={handleInput}
            type="text"
            name="name"
            placeholder={t("introduce_name_signup")}
          ></input>
          <input
            className="input input-bordered input-secondary w-full mb-4"
            onChange={handleInput}
            type="text"
            name="surname"
            placeholder={t("introduce_surname_signup")}
          ></input>
          <input
            className="input input-bordered input-secondary w-full mb-4"
            onChange={handleInput}
            type="text"
            name="email"
            placeholder={t("introduce_email_signup")}
          ></input>
          <input
            className="input input-bordered input-secondary w-full mb-4"
            onChange={handleInput}
            type="password"
            name="password"
            placeholder={t("introduce_password_signup")}
          ></input>
          <button
            onClick={handleClick}
            className="btn btn-xs sm:btn-sm md:btn-md lg:btn btn-default w-full"
          >
            {t("signup")}
          </button>
        </form>
      </div>

      <div className="flex justify-center mt-4">
        <Link to="/login" className="link link-hover">
          {t("signup_to_login")}
        </Link>
      </div>
    </>
  );
}
