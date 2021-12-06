const About = ({ FontAwesomeIcon, faInstagram, faTwitter }) => {
  const umbrellaTag = <span className="font-maven uppercase">Umbrella</span>;
  const linkStyle = "text-blue-600 hover:underline";
  const gaTag = <span className="uppercase">gulag anthem</span>;

  return (
    <div id="aboutContainer" className="bg-black h-screen">
      <div id="aboutInner" className="max-w-7xl mx-auto px-20 py-14">
        <h1 className="font-source uppercase text-white">
          about{" "}
          <span className={`${umbrellaTag} animate-rainbowFlash`}>
            umbrella
          </span>
        </h1>
        <div id="aboutContent" className="mt-28 flex justify-center">
          <img
            src="./assets/yuri.jpg"
            alt="yuri"
            className="w-1/3 rounded-full mr-10"
          />
          <section className="ml-10 text-white max-w-lg">
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
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
