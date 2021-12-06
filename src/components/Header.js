const Header = ({ FontAwesomeIcon, faUmbrella }) => {
  return (
    <div className="border-b border-black">
      <header className="flex justify-center items-center py-5">
        <FontAwesomeIcon
          id="logo"
          className="text-xl text-black animate-rainbowFlash hover:animate-bounce"
          icon={faUmbrella}
        />
      </header>
    </div>
  );
};

export default Header;
