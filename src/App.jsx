import "./i18n";
import GetConcerts from "./components/concert";
import Login from "./components/Login";
import UserContext from "./UserContext";
import Header from "./components/Header";
// import Footer from "./components/Footer";
import PaymentFailure from "./components/PaymentFailure";
import PaymentSuccess from "./components/PaymentSucess";
import Signup from "./components/Signup";
import { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import LeafletMap from "./components/LeafletMap";
import DetailsConcert from "./components/DetailsConcert";
import LanguageSwitcher from "./components/Switcher";
import './index.css'


function App() {
  const [loginUser, setLoginUser] = useState(null);
  const [concertContext, setConcertContext] = useState(null);
  const [token, setToken] = useState(null)

  return (
    <>
      <UserContext.Provider value={{ loginUser, setLoginUser, concertContext, setConcertContext, token, setToken }}>
        <BrowserRouter>
          <Header></Header>
          <Routes>
            <Route path="/" element={<GetConcerts></GetConcerts>} />
            <Route path="/login" element={<Login></Login>}></Route>
            <Route path="/signup" element={<Signup></Signup>} />
            <Route path="/payment-success" element={<PaymentSuccess></PaymentSuccess>} />
            <Route path="/payment-failure" element={<PaymentFailure></PaymentFailure>} />
            <Route path="/details" element={<DetailsConcert></DetailsConcert>}/>
          </Routes>
          {/* <Footer></Footer> */}
          {/* <LanguageSwitcher></LanguageSwitcher> */}
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}

export default App;
