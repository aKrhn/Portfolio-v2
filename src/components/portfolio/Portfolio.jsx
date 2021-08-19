import { useEffect, useState } from "react";
import ProjectList from "../projectList/ProjectList";
import "./portfolio.scss";
import {
  htmlCss,
  reactJS,
  pureJS,
  laravelPHP,
} from "../../data";
   
export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "HTML/CSS",
      title: "HTML/CSS",
    },
    {
      id: "JS/React",
      title: "JS/React",
    },
    {
      id: "PureJS",
      title: "PureJS",
    },
    {
      id: "PHP/Laravel",
      title: "PHP/Laravel",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "HTML/CSS":
        setData(htmlCss);
        break;
      case "JS/React":
        setData(reactJS);
        break;
      case "PureJS":
        setData(pureJS);
        break;
      case "PHP/Laravel":
        setData(laravelPHP);
        break;
      default:
        setData(reactJS);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <ProjectList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <img
              src={d.img}
              alt=""
            />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
