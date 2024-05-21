import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const Error = () => {
  const error = useRouteError();

  let title = 'An error occurred!';
  let message = 'Something went wrong!';

  if (error.status === 500) {
    message = error.data.message;
  }

  if (error.status === 404) {
    title = 'Not found!';
    message = 'Could not find resource or page.';
  }

  return (
    <>
      <div className="flex items-center justify-center flex-col gap-6 py-20">
        <h6 className="font-bold text-red-500">{title}</h6>
        <p>{message}</p>
        <Link to={'/'} className=" rounded-xl border border-zinc-400 p-2">
          Back to Home
        </Link>
      </div>
    </>
  );
};

export default Error;
