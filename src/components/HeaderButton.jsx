const HeaderButton = ({ label, onClick }) => {
  return (
    <>
      <div onClick={onClick} className="navbox">
        {label}
      </div>
    </>
  );
};

export default HeaderButton;
