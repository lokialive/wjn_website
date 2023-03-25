import React from "react";
import Work from "../Components/Work";
import Edu from "../Components/Edu";
import { personalDetails, workDetails, eduDetails } from "../Details";


function About() {
  return (
    <main className="container mx-auto max-width pt-10 pb-20 ">
      <section>
        <h1 className="text-xl text-dark-heading dark:text-light-heading md:text-3xl xl:text-4xl xl:leading-tight font-bold">
          关于我
        </h1>
        <h2 className="py-8 text-xl lg:max-w-4xl">{personalDetails.about}</h2>
      </section>
      <br></br>
      <section>
        <h1 className="text-xl text-dark-heading dark:text-light-heading md:text-3xl xl:text-4xl xl:leading-tight font-bold">
          主要平台
        </h1>
        {React.Children.toArray(
          workDetails.map(({ Position, Name, Link }) => (
            <Work
              position={Position}
              name={Name}
              link={Link}
            />
          ))
        )}
      </section>
      <br></br>
      <section>
        <h1 className="text-xl pt-10 text-dark-heading dark:text-light-heading md:text-3xl xl:text-4xl xl:leading-tight font-bold">
          学习经历
        </h1>
        {React.Children.toArray(
          eduDetails.map(({ Position, Company, Location, Type, Duration }) => (
            <Edu
              position={Position}
              company={Company}
              location={Location}
              type={Type}
              duration={Duration}
            />
          ))
        )}
      </section>
    </main>
  );
}

export default About;
