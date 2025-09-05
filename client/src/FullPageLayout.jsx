import bg from "./assets/bg.jpg";

const FullPageLayout = ({ children }) => {
  return (
    <div
      className="min-h-screen w-full bg-cover bg-center bg-fixed flex items-center justify-center px-4"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="rounded-2xl shadow-lg max-w-md w-full bg-black/60 p-8 backdrop-blur-sm">
        {children}
      </div>
    </div>
  );
};

export default FullPageLayout;
