import React from "react";
import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";

function NotFoundPage() {
  return (
    <section className="text-black dark:text-white text-center flex flex-col justify-center items-center gap-3 bg-[#f8f6f3] dark:bg-black h-[72vh]">
      <FaExclamationTriangle className="text-yellow-400 text-8xl animate-pulse" />
      <h1 className="text-3xl font-bold ">404 Page Not Found</h1>
      <p className="text-lg text-[#333] dark:text-white">This page does not exist</p>
      <Link
        to="/"
        className=" bg-green-700 hover:bg-green-900 rounded-md py-2 px-4 text-white"
      >
        Go Back
      </Link>
    </section>
  );
}

export default NotFoundPage;