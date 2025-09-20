const Clients = () => {
  return (
    <section className=" pt-[200%] md:pt-0 md:mb-10 trusted-section max-w-7xl mx-auto ">
      <p className=" font-bold text-base md:text-2xl text-center ">
        Trusted by Global Innovators & Leading Brands
      </p>
      {/* LIGHT MODE 
      desktop version*/}
      <div className="hidden sm:block grayscale item-center mx-auto md:w-[100%] dark:hidden">
        <img
          src="/clients-logo.png"
          alt="clientslogo"
          className="hidden sm:block grayscale item-center mx-auto md:w-[100%] dark:hidden "
        />
      </div>

      {/*  mobile version */}
      <div className="block sm:hidden w-full h-24 overflow-hidden mx-auto dark:hidden ">
        <img className="grayscale" src="/trustedby.png" alt="mediapartner" />
      </div>

      {/*  DARK MODE  */}
      {/*  desktop  */}
      <div className="hidden w-full h-24  mx-auto dark:md:block ">
        <img
          className="grayscale"
          src="/trustedby-darkpc.png"
          alt="mediapartner"
        />
      </div>
      {/*  mobile */}
      <div className="hidden dark:block md:hidden md:dark:!hidden w-full h-24 mx-auto  ">
        <img
          className="grayscale"
          src="/trustedby-darkmobile.png"
          alt="mediapartner"
        />
      </div>
    </section>
  );
};

// input image

export default Clients;
