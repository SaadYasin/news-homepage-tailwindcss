import { RiCompasses2Line, RiMagicLine, RiToolsLine } from "@remixicon/react";

const Steps = () => {
  return (
    <section
      id="how-we-work"
      className="steps bg-orange-100/50 h-content py-16 mt-[80px] xl:mt-[100px] relative z-20"
    >
      <div className="container flex flex-col items-center mx-auto">
        {/* Grid items */}
        <h2 className="text-[36px] text-orange-600 font-semibold text-center mb-8">
          How We Work
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Step 1 start */}
          <div className="steps__step w-[350px] bg-accent-secondary/50 p-4 text-center rounded-md shadow-xl">
            <div className="mb-4">
              <RiCompasses2Line
                size={36} // set custom `width` and `height`
                color="red" // set `fill` color
                className="my-icon text-orange-700 mx-auto " // add custom class name
              />
            </div>
            <h3
              className="h3 font-semibold mb-5 rtl:font-ara"
              data-i18n="step1"
            >
              Project Design & Planning
            </h3>

            <p
              className="text-[18px] text-justify text-gray-800 mb-5 max-w-md mx-auto rtl:font-ara"
              data-i18n="step1_p"
            >
              Our team begins by meticulously designing and planning your
              project, ensuring every detail aligns with your requirements and
              industry standards. We focus on creating efficient and sustainable
              designs that set the foundation for successful execution.
            </p>
          </div>
          {/* Step 1 end */}

          {/* Step 2 start */}
          <div className="steps__step w-[350px] bg-accent-secondary/50 p-4 text-center rounded-md shadow-xl">
            <div className="mb-4">
              <RiMagicLine
                size={36} // set custom `width` and `height`
                color="red" // set `fill` color
                className="my-icon text-orange-700 mx-auto " // add custom class name
              />
            </div>
            <h3
              className="h3 font-semibold mb-5 rtl:font-ara"
              data-i18n="step1"
            >
              Purchasing Materials
            </h3>

            <p
              className="text-[18px] text-justify text-gray-800 mb-5 max-w-md mx-auto rtl:font-ara"
              data-i18n="step1_p"
            >
              We source top-quality materials from trusted suppliers, ensuring
              durability and compliance. Our transparent, efficient purchasing
              process guarantees all materials meet our rigorous standards for
              quality and reliability.
            </p>
          </div>
          {/* Step 2 end */}

          {/* Step 3 start */}
          <div className="steps__step w-[350px] bg-accent-secondary/50 p-4 text-center rounded-md shadow-xl">
            <div className="mb-4">
              <RiToolsLine
                size={36} // set custom `width` and `height`
                color="red" // set `fill` color
                className="my-icon text-orange-700 mx-auto " // add custom class name
              />
            </div>
            <h3
              className="h3 font-semibold mb-5 rtl:font-ara"
              data-i18n="step1"
            >
              Project Execution
            </h3>

            <p
              className="text-[18px] text-justify text-gray-800 mb-5 max-w-md mx-auto rtl:font-ara"
              data-i18n="step1_p"
            >
              With thorough planning and top-quality materials in place, our
              skilled professionals execute the project with precision and
              expertise. We manage every aspect of the construction process,
              delivering exceptional results on time and within budget.
            </p>
          </div>
          {/* Step 3 end */}
        </div>
      </div>
    </section>
  );
};

export default Steps;
