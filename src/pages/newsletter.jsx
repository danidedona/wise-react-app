const Newsletter = () => {
  return (
    <div className="mt-[-150px] w-screen h-screen flex flex-col items-center justify-center bg-white overflow-hidden">
      <iframe
        src="https://wiseatbrown.substack.com/embed"
        className="w-full h-full"
        style={{ border: "none" }}
        title="WiSE Substack Newsletter"
      ></iframe>
    </div>
  );
};

export default Newsletter;
