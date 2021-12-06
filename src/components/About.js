const About = ({ FontAwesomeIcon, faInstagram, faTwitter }) => {
  const umbrellaTag = <span className="font-maven uppercase">Umbrella</span>;
  const linkStyle = "text-blue-800 hover:underline";
  const gaTag = <span className="uppercase">gulag anthem</span>;
  const iconStyle = "text-black text-2xl hover: transition mr-6";
  const iconTemplate = (specifiedIcon) => {
    return (
      <a href="" target="_blank" className={iconStyle}>
        <FontAwesomeIcon id="logo" className="test" icon={specifiedIcon} />
      </a>
    );
  };

  return (
    <div id="aboutContainer" className="bg-black h-screen">
      <div id="aboutInner" className="max-w-7xl mx-auto px-20 py-14">
        <h1 className="font-source text-white">
          About{" "}
          <span className={`font-maven uppercase animate-rainbowFlash`}>
            umbrella
          </span>
        </h1>
        <div
          id="aboutContent"
          className="mt-14 flex justify-center bg-gray-200 py-10 rounded"
        >
          <img
            src="./assets/yuri.jpg"
            alt="yuri"
            className="w-1/3 rounded mr-10"
          />
          <section className="ml-10 text-black max-w-lg">
            <p className="mb-10">
              {umbrellaTag} is the first generative art project from digital
              artist {gaTag}. The {umbrellaTag} algorithm uses a react
              integration of{" "}
              <a target="_blank" className={linkStyle} href="https://p5js.org/">
                p5.js
              </a>{" "}
              created by Gherciu Gheorghe that can be found{" "}
              <a
                target="_blank"
                className={linkStyle}
                href="https://github.com/Gherciu/react-p5"
              >
                here
              </a>
              . {umbrellaTag} derives its name from the processes the algorithm
              uses to generate its unique images. For now, the algorithm is
              behind closed doors, but will be open-source in the near future
              for alteration and collaboration.
            </p>
            <p>
              For updates on the {umbrellaTag} project, follow {gaTag} on{" "}
              <a
                target="_blank"
                className={linkStyle}
                href="https://twitter.com/gulaganthem"
              >
                twitter
              </a>
              . Those who do not build must burn.
            </p>
            <div className="mt-4">
              {iconTemplate(faInstagram)}
              {iconTemplate(faTwitter)}
              <a
                className={`${iconStyle} font-jSans`}
                href="https://gulaganthem.com"
                target="_blank"
              >
                GA
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
