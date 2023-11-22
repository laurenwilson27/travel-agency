const HeaderButton = ({ label, onClick }) => {
  return (
    <>
      <div className="navbox">
        <a href="/">{label}</a>
      </div>
    </>
  );
};

export default HeaderButton;
