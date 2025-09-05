const Aboutme = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-black/60 p-8 rounded-2xl max-w-3xl mx-auto text-center text-white">
      <img
        src="https://via.placeholder.com/150"
        alt="Profile"
        className="w-36 h-36 mx-auto rounded-full object-cover border-4 border-white mb-6"
      />
      <h1 className="text-4xl font-bold mb-2">Ansul Uikey</h1>
      <h3 className="text-xl font-light mb-4">
        Full Stack Developer | Music Enthusiast
      </h3>
      <p className="text-base md:text-lg leading-relaxed">
        Hi! I’m Ansul, a passionate developer who loves building amazing web
        applications and exploring new technologies. When I’m not coding, I
        enjoy playing music and creating digital art. My goal is to combine
        creativity and technology to make a meaningful impact.
      </p>
      <button className="mt-6 px-6 py-2 bg-red-500 hover:bg-red-600 transition-colors rounded-lg text-white font-medium">
        Contact Me
      </button>
    </div>
  );
};

export default Aboutme;
