const Footer = ({ FontAwesomeIcon, faCreativeCommons }) => {
  return (
    <footer className="h-16 w-full flex justify-center items-center">
      <FontAwesomeIcon
        id="logo"
        className="transform hover:scale-125 transition mr-1"
        icon={faCreativeCommons}
      />{" "}
      <p className="inline text-base">GULAG ANTHEM</p>
    </footer>
  );
};

export default Footer;
