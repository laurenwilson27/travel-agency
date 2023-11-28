import { Link } from "react-router-dom";

const HeaderButton = ({ label, target }) => {
  return (
    <Link to={target}>
      <div className="navbox">{label}</div>
    </Link>
  );
};

export default HeaderButton;
