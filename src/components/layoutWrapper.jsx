const LayoutWrapper = ({ children }) => {
  return (
    <div
      className="flex flex-col items-center min-h-screen w-screen px-4 sm:px-10 md:px-20 lg:px-36 sm:py-2 md:py-18 lg:py-20"
      style={{ fontFamily: "'Atteron', serif" }}
    >
      {children}
    </div>
  );
};

export default LayoutWrapper;
