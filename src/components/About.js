const About = ({ FontAwesomeIcon, faInstagram, faTwitter }) => {
  const umbrellaTag = <span className="font-maven uppercase">Umbrella</span>;
  const linkStyle = "text-blue-800 hover:underline";
  const gaTag = <span className="uppercase">gulag anthem</span>;
  const iconStyle = "text-black text-2xl mr-6";
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
    <div id="aboutContainer" className="bg-black pb-14">
      <div id="aboutInner" className="max-w-7xl mx-auto px-20 py-14">
        <h1 className="font-rbto text-white">
          About{" "}
          <span className={`font-maven uppercase animate-rainbowFlash`}>
            umbrella
          </span>
        </h1>
        <div
          id="aboutContent"
          className="mt-14 flex justify-center bg-gray-200 py-10 rounded px-10"
        >
          <div className="w-1/2 mr-10">
            <img
              src="./assets/yuri.jpg"
              alt="yuri"
              className="w-full h-auto rounded mr-10"
            />
          </div>
          <section className="ml-10 text-black w-1/2">
            <p className="mb-8">
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
              employs to generate its unique images. For now, the algorithm is
              behind closed doors, but will be open-source in the near future
              for alteration and collaboration.
            </p>
            <p>
              For updates on the {umbrellaTag} project, follow {gaTag} on{" "}
              <a
                rel="noreferrer"
                target="_blank"
                className={linkStyle}
                href="https://twitter.com/gulaganthem"
              >
                twitter
              </a>
              . Those who do not build must burn.
            </p>
            <div className="mt-4">
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
                <p className="transition transform hover:scale-125 font-jSans inline-block text-2xl">
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
