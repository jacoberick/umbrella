const About = ({ FontAwesomeIcon, faInstagram, faTwitter }) => {
  const umbrellaTag = <span className="font-maven uppercase">Umbrella</span>;
  const linkStyle = "text-blue-500 hover:underline";
  const gaTag = <span className="uppercase">gulag anthem</span>;
  const iconStyle = "text-gray-200 text-2xl mx-6";
  const pTagDropShadow = "shadow-coldwar p-5 rounded border-4 border-gray-700";
  const descriptionStyle = "b850:text-sm b750:text-xs";

  // templating function for icons
  const iconTemplate = (specifiedIcon, link) => {
    return (
      <a rel="noreferrer" href={link} target="_blank" className={iconStyle}>
        <FontAwesomeIcon
          id="logo"
          className="transform hover:scale-125 transition"
          icon={specifiedIcon}
        />
      </a>
    );
  };

  return (
    <div id="aboutContainer" className="bg-gray-900 pb-14">
      <div id="aboutInner" className="max-w-7xl mx-auto px-20 py-14 b675:px-6">
        <h1 className="font-rbto text-white b1000:text-6xl b850:text-5xl">
          About{" "}
          <span className={`font-maven uppercase animate-rainbowFlash`}>
            umbrella
          </span>
        </h1>
        <div
          id="aboutContent"
          className="mt-14 flex justify-center items-center bg-gray-800 py-10 rounded px-10 b1000:flex-col b675:px-6 b675:py-5"
        >
          <div className="w-1/2 mr-10 b1250:mr-5 b1000:mr-0 b1000:w-3/4 b750:w-full">
            <img
              src="./assets/yuri.jpg"
              alt="yuri"
              className="w-full h-auto rounded shadow-coldwar border-4 border-gray-700"
            />
          </div>
          <section className="ml-10 text-gray-200 w-1/2 b1250:ml-5 b1000:ml-0 b1000:mt-8 b1000:w-3/4 b750:w-full">
            <p className={`${pTagDropShadow} ${descriptionStyle} mb-8`}>
              {umbrellaTag} is the first generative art project from digital
              artist {gaTag}. The {umbrellaTag} algorithm uses a react
              integration of{" "}
              <a
                rel="noreferrer"
                target="_blank"
                className={linkStyle}
                href="https://p5js.org/"
              >
                p5.js
              </a>{" "}
              created by Gherciu Gheorghe that can be found{" "}
              <a
                rel="noreferrer"
                target="_blank"
                className={linkStyle}
                href="https://github.com/Gherciu/react-p5"
              >
                here
              </a>
              . {umbrellaTag} derives its name from the processes the algorithm
              employs to generate its unique images.
            </p>
            <p className={`${pTagDropShadow} ${descriptionStyle}`}>
              Generated images are free for non-commercial use. For updates on
              the {umbrellaTag} project, follow {gaTag} on{" "}
              <a
                rel="noreferrer"
                target="_blank"
                className={linkStyle}
                href="https://twitter.com/gulaganthem"
              >
                twitter
              </a>
              .
            </p>
            <div className="mt-8 flex justify-center">
              {iconTemplate(
                faInstagram,
                "https://www.instagram.com/gulaganthem/"
              )}
              {iconTemplate(faTwitter, "https://twitter.com/gulaganthem")}
              <a
                rel="noreferrer"
                className={`${iconStyle}`}
                href="https://gulaganthem.com"
                target="_blank"
              >
                <p
                  className={`transition transform hover:scale-125 font-jSans inline-block text-2xl`}
                >
                  GA
                </p>
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
