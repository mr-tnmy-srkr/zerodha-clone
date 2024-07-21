const Hero = () => {
  return (
    <div>
      <div>
        <img className="mb-12" src="https://i.ibb.co/6vf9PpR/landing.png" alt="Hero Image" />
        <div className="text-center">
          <h1 className="text-5xl font-medium">Invest in everything</h1>
          <p className="text-2xl pt-3 pb-8">
            Online platform to invest in stocks, derivatives, mutual funds, and
            more
          </p>
          <button className="btn btn-primary text-xl px-10 bg-[#387ed1] text-white border-none hover:bg-black hover:border-none ">Signup Now</button>
        </div>
      </div>
    </div>
  );
};
export default Hero;
