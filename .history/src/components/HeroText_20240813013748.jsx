
const HeroText = () => {
  return (
    <div>
      <div className="bg-black/30 absolute top-[150px] p-6 rounded-md sm:top-[250px] start-10 sm:start-40 ">
        {/* Hero title */}
        <h1 className="text-[20px] lg:text-[28] font-primary text-white font-bold w-[300px] sm:w-[600px] mb-8">
          Expertise in Design, Construction, and Full Labor Camps Facility
          Management, Steel Frames & All Types of Buildings
        </h1>

        {/* Hero description */}
        <p
          id="pargr1"
          className="text-[1.125rem] w-[320px] sm:w-[600px] rtl:text-[1rem] xl:text-[20px] text-white mb-8 rtl:font-ara"
          data-i18n="pargr1"
        >
          Welcome to BAIDER ALYAKUT, where we excel in designing, constructing,
          running, and maintaining high-standard labor camps. Our expertise
          includes also all types of steel structures and concrete structures,
          interiors, exteriors as well as all types of construction. Trust us to
          deliver comprehensive solutions.
        </p>

      {/* Action button */}
          <a href="#contact"
            className="h-[45px] text-[18px] rtl:font-ara xl:text-[20px] xl:h-[65px] transition-all duration-300 text-white rounded-[8px] flex items-center gap-2 btn-primary"
            id="but1">
            Contact Us Now
          </a>
      </div>

    </div>
  );
}

export default HeroText