const HeaderButton = ({ label, onClick }) => {
  // Styles should be part of css, plan with team
  return (
    <>
      <div onClick={onClick} className="navbox">
        {label}
      </div>
    </>
  );
};

export default HeaderButton;
