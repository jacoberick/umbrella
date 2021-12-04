const Header = ({ FontAwesomeIcon, faUmbrella }) => {
  return (
    <div className="bg-white">
      <header className="flex justify-center items-center py-4">
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
