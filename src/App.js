import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Insight from "./pages/Insight";
import DashBoard from "./pages/DashBoard";
import Landing from "./pages/Landing";
import SignOn from "./pages/SignOn";
import Wallet from "./pages/Wallet";
import Login from "./pages/Login";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard":
        title = "";
        metaDescription = "";
        break;
      case "/landing":
        title = "";
        metaDescription = "";
        break;
      case "/signon":
        title = "";
        metaDescription = "";
        break;
      case "/wallet":
        title = "";
        metaDescription = "";
        break;
      case "/login":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Insight />} />
      <Route path="/dashboard" element={<DashBoard />} />
      <Route path="/landing" element={<Landing />} />
      <Route path="/signon" element={<SignOn />} />
      <Route path="/wallet" element={<Wallet />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
export default App;
