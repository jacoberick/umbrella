const Footer = ({ FontAwesomeIcon, faCreativeCommons }) => {
  const pTagStyle = "text-base b675:text-sm";
  return (
    <footer className="h-16 w-full">
      <div
        id="innerFooter"
        className="flex justify-between max-w-7xl px-20 mx-auto items-center h-full b675:px-6 b440:flex-col b440:justify-center"
      >
        <div className="flex items-center">
          <FontAwesomeIcon
            id="logo"
            className="transform hover:scale-125 transition mr-1 b675:text-sm"
            icon={faCreativeCommons}
          />{" "}
          <p className={`${pTagStyle} inline`}>GULAG ANTHEM</p>
        </div>
        <p className={`${pTagStyle}`}>those who do not build must burn.</p>
      </div>
    </footer>
  );
};

export default Footer;
