import "./Main.scss";

import { data } from "../../helper/data";
import Card from "./Card";

const Main = (index) => {
  return (
    <div className="card-container">
      {data.map((item) => (
        <Card {...item} key={index} />
      ))}
    </div>
  );
};

export default Main;
