import enhypen from "../assets/enhypen.jpeg";

const HeroBanner = () => {
  return (
    <section className="hero">
      <img
        src={enhypen}
        alt="Enhypen"
        className="hero-image"
      />

      <div className="hero-overlay">
        <h1>ENHYPEN Universe Store</h1>
      </div>
    </section>
  );
};

export default HeroBanner;