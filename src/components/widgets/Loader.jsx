import TextType from "@/text/TextType/TextType";

const Loader = () => {
  return (
    <section className="flex justify-center overflow-hidden h-screen  items-center">
      <div className=" absolute">
        <TextType
          text={["T", "N", "I", "t", "n", "i"]}
          deletingSpeed={50}
          pauseDuration={100}
          cursorClassName="text-white"
          loop={true}
          textColors={("black", "blue")}
          className="text-4xl md:text-6xl"
        />
      </div>
    </section>
  );
};

export default Loader;
