import React from 'react';

const Common = ({ title }) => {
  return (
    <div className="Common-background z-40 bg-cover bg-no-repeat bg-center py-14 xs:py-18 sm:py-20 md:py-24 w-full">
      <h2 className="container text-zinc-100 font-RocknRoll text-xl xs:text-2xl sm:text-3xl md:text-4xl">
        {title}
      </h2>
    </div>
  );
};

export default Common;
