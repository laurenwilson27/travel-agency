import HeaderButton from "./HeaderButton";

const HeaderNav = () => {
  // Styles should be part of css, plan with team
  return (
    <div style={{ backgroundColor: "#000", color: "#fff" }}>
      Logo and stuff
      <HeaderButton label="Destination" />
      <HeaderButton label="Book a Trip" />
    </div>
  );
};

export default HeaderNav;
