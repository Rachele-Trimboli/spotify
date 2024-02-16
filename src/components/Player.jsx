import { Link } from "react-router-dom";
import shuffleImage from "../assets/playerbuttons/shuffle.png";
import prevImage from "../assets/playerbuttons/prev.png";
import playImage from "../assets/playerbuttons/play.png";
import nextImage from "../assets/playerbuttons/next.png";
import repeatImage from "../assets/playerbuttons/repeat.png";
import { useSelector } from "react-redux";
import { Spinner } from "react-bootstrap";

const Player = () => {
  const inPlayer = useSelector((state) => state.player.inPlayer);
  console.log(inPlayer);

  return (
    <div className="container-fluid fixed-bottom bg-container pt-1">
      <div
        className={
          inPlayer
            ? "row h-100 align-items-center"
            : "row h-100 align-items-center"
        }
      >
        <div className="col-lg-10 offset-lg-2">
          <div className="row justify-content-evenly align-items-center">
            {inPlayer[0] ? (
              <div className="col-4 d-flex justify-content-between align-items-center">
                <img src={inPlayer[0].album.cover} alt="foto" />
                <span className="text-white fw-semibold">
                  {inPlayer[0].title}
                </span>
              </div>
            ) : (
              ""
            )}
            <div className="col-8 col-md-4 playerControls d-flex align-items-center">
              <div className="d-flex w-100 justify-content-evenly">
                <img
                  src={shuffleImage}
                  alt="shuffle"
                  style={{ width: "20px" }}
                />

                <img src={prevImage} alt="prev" style={{ width: "20px" }} />

                <img src={playImage} alt="play" style={{ width: "20px" }} />

                <img src={nextImage} alt="next" style={{ width: "20px" }} />

                <img src={repeatImage} alt="repeat" style={{ width: "20px" }} />
              </div>
              <div className="progress mt-3">
                {inPlayer[0] ? (
                  <div role="progressbar">{inPlayer[0].preview}</div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Player;
