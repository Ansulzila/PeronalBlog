import { FaTwitter, FaLinkedin, FaGithub, FaInstagram, FaReddit } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center md:items-start min-h-screen px-4 py-12 gap-8 max-w-6xl mx-auto">

      {/* Contact Form */}
      <div className="flex-1 bg-black/60 p-8 rounded-2xl text-white w-full">
        <h1 className="text-3xl font-bold mb-6 text-center md:text-left">Contact Me</h1>

        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 rounded-lg bg-black/40 border border-gray-600 text-white focus:outline-none focus:border-orange-500 transition"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 rounded-lg bg-black/40 border border-gray-600 text-white focus:outline-none focus:border-orange-500 transition"
          />
          <textarea
            rows="5"
            placeholder="Your Message"
            className="p-3 rounded-lg bg-black/40 border border-gray-600 text-white focus:outline-none focus:border-orange-500 transition resize-none"
          ></textarea>

          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 transition-colors text-white py-3 rounded-lg font-bold"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Social Media Links */}
      <div className="flex-1 bg-black/60 p-8 rounded-2xl text-white w-full">
        <h2 className="text-2xl font-semibold mb-4 text-center md:text-left">Connect with me</h2>

        <div className="flex flex-col gap-4">
          {[
            { icon: <FaTwitter size={24} />, name: "Twitter", link: "https://twitter.com/yourhandle" },
            { icon: <FaLinkedin size={24} />, name: "LinkedIn", link: "https://linkedin.com/in/yourhandle" },
            { icon: <FaGithub size={24} />, name: "GitHub", link: "https://github.com/yourhandle" },
            { icon: <FaInstagram size={24} />, name: "Instagram", link: "https://instagram.com/yourhandle" },
            { icon: <FaReddit size={24} />, name: "Reddit", link: "https://reddit.com/user/yourhandle" },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col sm:flex-row items-center sm:justify-between gap-3 bg-black/40 p-3 rounded-lg hover:bg-orange-500 transition"
            >
              <div className="flex items-center gap-3">
                {item.icon}
                <span>{item.name}</span>
              </div>
              <span className="text-sm text-gray-300 sm:text-right">@yourhandle</span>
            </a>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Contact;
