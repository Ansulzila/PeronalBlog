const Aboutme = () => {
  return (
    <div className="flex flex-col lg:flex-row items-stretch justify-center gap-8 max-w-6xl mx-auto mt-12 px-4">

      {/* Image Card */}
      <div className="flex bg-black/50 p-8 w-auto rounded-2xl items-center justify-center order-1 lg:order-2">
        <img
          src="https://i.redd.it/z6uvbm01qrz41.png"
          alt="Profile"
          className="w-48 h-48 md:w-52 md:h-52 rounded-2xl object-cover border-4 border-white"
        />
      </div>

      {/* Details Card */}
      <div className="flex-1 flex flex-col bg-black/60 p-8 rounded-2xl text-white gap-6 order-2 lg:order-1">
        <h1 className="text-4xl font-bold mb-2">Ansul Uikey</h1>
        <h3 className="text-xl font-light mb-4">
          Full Stack Developer | Music Enthusiast
        </h3>
        <p className="text-base md:text-lg leading-relaxed">
          Hi! I’m Ansul, a tech enthusiast and lifelong learner from India. I
          love diving into programming, exploring C++, AI, and web development,
          and turning ideas into real projects. Over the years, I’ve built
          full-stack applications, experimented with creative tech projects, and
          shared my learning experiences with others. Through this blog, I aim
          to share tutorials, project walkthroughs, and insights that can help
          fellow learners grow and stay motivated in tech. When I’m not coding,
          you’ll probably find me listening to metal music, sipping too much
          coffee, or tinkering with new side projects. Feel free to connect with
          me—I’d love to hear your thoughts!
        </p>
      </div>

    </div>
  );
};

export default Aboutme;
