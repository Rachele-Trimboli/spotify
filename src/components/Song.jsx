import { useDispatch, useSelector } from "react-redux";
import {
  addToFavourites,
  addToPlayer,
  removeToFavourites,
} from "../redux/actions";
import { useState } from "react";

const Song = (props) => {
  const [clicked, setClicked] = useState(false);
  const dispatch = useDispatch();

  return (
    <div className="col text-center" key={props.canzone.id}>
      <img
        className="img-fluid"
        src={props.canzone.album.cover_medium}
        alt="track"
        onClick={() => dispatch(addToPlayer(props.canzone))}
      />
      <p>
        Track: "{props.canzone.title}" Artist:{props.canzone.artist.name}
      </p>
      <i
        className="bi bi-heart fw-semibold"
        style={clicked ? { color: "green" } : { color: "white" }}
        onClick={() => {
          setClicked(!clicked);

          clicked === false
            ? dispatch(addToFavourites(props.canzone))
            : dispatch(removeToFavourites(props.canzone));
        }}
      ></i>
    </div>
  );
};
export default Song;
