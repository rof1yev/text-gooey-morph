"use client";

import Image from "next/image";
import Link from "next/link";
import { BsInstagram, BsTwitterX } from "react-icons/bs";
import { FaGithub, FaTelegram, FaFacebook } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="relative bg-neutral-200 border-t grid grid-cols-1 sm:grid-cols-2">
      <div className="relative h-64 sm:h-full">
        <Image
          fill
          src="/rof1yev-1.jpg"
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      <div className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8">
          <div>
            <p>
              <span className="text-xs tracking-wide text-gray-500 uppercase">
                Call us
              </span>

              <Link
                href="tel:+998505829080"
                target="_blank"
                className="block text-2xl font-medium text-gray-900 hover:opacity-75 sm:text-3xl"
              >
                +998 50 582 90 80
              </Link>
            </p>

            <ul className="mt-8 space-y-1 text-sm text-gray-700">
              <li>Monday to Friday: 10am - 5pm</li>
              <li>Weekend: 10am - 3pm</li>
            </ul>

            <ul className="mt-8 flex gap-6">
              {[FaFacebook, BsInstagram, BsTwitterX, FaGithub, FaTelegram].map(
                (Icon, idx) => (
                  <li key={idx}>
                    <Link
                      href="#"
                      rel="noreferrer"
                      target="_blank"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      <span className="sr-only">Social</span>
                      <Icon size={24} />
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-100 pt-12">
          <div className="sm:flex sm:items-center sm:justify-between">
            <ul className="flex flex-wrap gap-4 text-xs">
              {["Terms & Conditions", "Privacy Policy", "Cookies"].map(
                (text, idx) => (
                  <li key={idx}>
                    <a
                      href="#"
                      className="text-gray-500 transition hover:opacity-75"
                    >
                      {text}
                    </a>
                  </li>
                )
              )}
            </ul>

            <p className="mt-8 text-xs text-gray-500 sm:mt-0">
              &copy; {new Date().getFullYear()}. Company Name. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
