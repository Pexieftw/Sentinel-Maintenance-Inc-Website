"use client";

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { useEffect } from 'react'; 
import AOS from 'aos'; 
import 'aos/dist/aos.css';

const NotFound = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, 
    });
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br">
      <div className="w-full max-w-3xl text-center">
        {/* Animate the 404 circle */}
        <div
          className="mb-8 inline-flex items-center justify-center"
          data-aos="fade-down"
        >
          <div className="relative">
            <div className="relative flex h-36 w-36 items-center justify-center rounded-full bg-primary-300 font-mono text-6xl font-bold text-white">
              404
            </div>
          </div>
        </div>

        {/* Animate the heading */}
        <h1
          className="mb-4 text-4xl font-extrabold tracking-tight text-green-900 md:text-5xl"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Page not found
        </h1>

        {/* Animate the paragraph */}
        <p
          className="mb-8 text-lg text-green-800"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          Sorry, we couldn't find the page you're looking for. <br />
          It might have been moved or deleted.
        </p>

        {/* Animate the buttons */}
        <div
          className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <Link
            href="/"
            className="inline-flex items-center justify-center bg-primary-300 px-6 py-3 text-base font-medium text-white transition-colors hover:bg-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 ease 0.3"
            data-aos="zoom-in"
            data-aos-delay="800"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="cursor-pointer inline-flex items-center justify-center border border-primary-300 bg-transparent px-6 py-3 text-base font-medium text-primary-300 transition-colors hover:bg-primary-100 hover:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            data-aos="zoom-in"
            data-aos-delay="1000"
          >
            Go back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;