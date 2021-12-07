const Header = ({ FontAwesomeIcon, faUmbrella }) => {
  return (
    <div className="border-b border-gray-900">
      <header className="flex justify-center items-center py-4">
        <FontAwesomeIcon
          id="logo"
          className="text-xl text-gray-900 animate-rainbowFlash hover:animate-bounce"
          icon={faUmbrella}
        />
      </header>
    </div>
  );
};

export default Header;
