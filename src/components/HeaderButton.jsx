import { Link } from "react-router-dom";

const HeaderButton = ({ label, target }) => {
  return (
    <>
      <div className="navbox">
        <Link to={target}>{label}</Link>
      </div>
    </>
  );
};

export default HeaderButton;
