import { useState, useContext, useMemo } from "react";
import UserContext from "../UserContext";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Login() {
  const [user, setUser] = useState({ email: "", password: ""});
  const { loginUser, setLoginUser } = useContext(UserContext);
  const {token, setToken} = useContext(UserContext);
  const navigate = useNavigate();
  const { t } = useTranslation();

  function handleClick(e) {
    e.preventDefault();
    fetch("https://p01--ticket-back--5y4264lh9kc4.code.run/login", {
      method: "POST",
      body: JSON.stringify({
        email: user.email,
        password: user.password
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((res) => {
      console.log(res);
      if (res.status >= 400) {
        alert(res.statusText);
      } else {
        res.json().then((data) => {
          setToken(data.access_token)
          user.name = data.user_name
          setLoginUser(user);
          navigate("/");
        });
      }
    });
  }

  function handleInput(e) {
    let userTemp = user;
    userTemp[e.target.name] = e.target.value;
    setUser(userTemp);
  }

  return (
    <>
      <div className="flex justify-center items-start pt-10">
        {" "}
        <form className="w-full max-w-xs">
          <h2 className="mb-5 font-semibold">{t("login_title")}</h2>
          <input
            className="input input-bordered input-secondary w-full mb-4"
            onChange={handleInput}
            type="text"
            name="email"
            placeholder={t("introduce_email_login")}
          ></input>
          <input
            className="input input-bordered input-secondary w-full mb-4"
            onChange={handleInput}
            type="password"
            name="password"
            placeholder={t("introduce_password_login")}
          ></input>
          <button
            onClick={handleClick}
            className="btn btn-xs sm:btn-sm md:btn-md lg:btn btn-default w-full"
          >
            {t("btn_login")}
          </button>
        </form>
      </div>

      <div className="flex justify-center mt-4">
        <Link to="/signup" className="link link-hover">
          {t("register")}
        </Link>
      </div>
    </>
  );
}

export default Login;
