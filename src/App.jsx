import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Router from "./Router";

function App() {
  return (
    <>
      <div className="Main-Page">
        <Header />
        <Router />
        <Footer />
      </div>
    </>
  );
}

export default App;
