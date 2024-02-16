import { Link } from "react-router-dom";

const CustomNavBar = () => {
  return (
    <div className="row">
      <div className="col-9 col-lg-11 mainLinks d-none d-md-flex">
        <Link to={"/trending"}>TRENDING</Link>
        <Link to={"/podcast"}>PODCAST</Link>
        <Link to={"/moods"}>MOODS AND GENRES</Link>
        <Link to={"/new"}>NEW RELEASES</Link>
        <Link to={"/discover"}>DISCOVER</Link>
      </div>
    </div>
  );
};
export default CustomNavBar;
