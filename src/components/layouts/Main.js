import "../css/Main.css";
import Header from "./Header";
import Nav from "./Nav";
import Tweets from "./Tweets";

const Main = () => {
  return (
    <div className="container">
      <Nav />
      <Header />
      <Tweets />
    </div>
  );
};

export default Main;
