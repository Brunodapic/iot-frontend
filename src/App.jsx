import styles from "./App.module.css";
import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Actuate from "./pages/actuate/Actuate";
import GraphPage from "./pages/GraphPage/GraphPage";

const App = () => {
  return (
    <div className={styles.app}>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/graph" element={<GraphPage />} />
          <Route path="/actuate" element={<Actuate />} />
          <Route path="/" />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
