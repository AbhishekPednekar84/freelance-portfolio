import React, { Fragment } from "react";
import Image from "next/image";
import { heroImage, heroImageBlur } from "../../utils/images";

const Hero = () => {
  return (
    <Fragment>
      <div className="flex flex-col-reverse justify-center lg:flex-row lg:justify-evenly items-center h-full p-7 lg:p-5 lg:pt-16">
        <div>
          <h1>
            Abhishek <span className="text-blue-600">Pednekar</span>
          </h1>
          <p className="font-gilroy text-xl lg:text-2xl font-semibold  pt-5">
            Take your business to the next level by boosting your{" "}
            <br className="hidden lg:block" />
            online presence
          </p>

          <div className="flex flex-col lg:flex-row justify-between pt-5 lg:pt-10">
            <button className="btn-primary mb-5 lg:mb-0">
              Let's work together
            </button>
            <button className="btn-secondary">Get a free consultation</button>
          </div>
        </div>
        <div className="mb-5 lg:mb-0 lg:ml-10">
          <Image
            src={heroImage + "?tr=w-500"}
            alt="Abhishek Pednekar"
            height={500}
            width={500}
            placeholder="blur"
            blurDataURL={heroImageBlur}
            priority={true}
            className="rounded-xl"
          />
        </div>
      </div>
    </Fragment>
  );
};

export default Hero;
