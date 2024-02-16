import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Song from "./Song";

const Main = (props) => {
  const [canzoni, setCanzoni] = useState([]);

  const dispatch = useDispatch();

  const musicFetch = () => {
    fetch(
      "https://striveschool-api.herokuapp.com/api/deezer/search?q=" +
        props.genere
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error();
        }
      })
      .then((songs) => {
        console.log(songs.data);
        setCanzoni(songs.data);
      })
      .catch((errore) => {
        console.log("errore nella chiamata", errore);
      });
  };

  useEffect(() => {
    musicFetch();
  }, []);

  return (
    <div className="row">
      <div className="col-10">
        <div id="rock">
          <h2>{props.genere.toUpperCase()}</h2>
          <div
            className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
            id="rockSection"
          >
            {canzoni ? (
              canzoni.slice(0, 4).map((canzone) => {
                return <Song canzone={canzone}></Song>;
              })
            ) : (
              <Spinner variant="success"></Spinner>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Main;
