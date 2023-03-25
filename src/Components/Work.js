import React from "react";

function Work({ position, name, link }) {
  return (
    <article className="pt-8 border-b-2 border-dark-content pb-5 dark:border-light-content border-opacity-20 dark:border-opacity-20">
      <div className="flex justify-between items-center">
        <h2 className="md:text-lg lg:text-xl">{position} : {name}</h2>
        <a href={link}> 主页Go ➡️</a>
      </div>
      <div className="flex justify-between pt-2">
        <div className="flex flex-col md:flex-row">
        </div>
      </div>
    </article>
  );
}

export default Work;
