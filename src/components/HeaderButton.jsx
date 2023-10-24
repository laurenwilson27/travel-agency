const HeaderButton = ({ label, onClick }) => {
  // Styles should be part of css, plan with team
  return (
    <>
      <button onClick={onClick} style={{ float: "right" }}>
        {label}
      </button>
    </>
  );
};

export default HeaderButton;
