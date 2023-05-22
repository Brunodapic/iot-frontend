import styles from "./App.module.css";
import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className={styles.app}>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/create" />

          <Route path="/" />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
