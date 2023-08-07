import React from "react";
import Image from "next/image";
import Twitter from "../../public/assets/social_twitter.png";
import Facebook from "../../public/assets/social_facebook.png";
import Instagram from "../../public/assets/social_instagram.png";

type Props = {
  isDark?: boolean;
};

const Footer = ({ isDark = false }: Props) => {
  return (
    <footer className="bg-black text-wh-50 py-10 px-10">
      <div className="justify-between mx-auto gap-16 sm:flex">
        {/* FIRST COLUMN */}
        <div className="mt-16 basis-1/2 sm:mt-0">
          <h4 className="font-bold">BLOG OF THE FUTURE</h4>
          <div className="my-5">
            The "Blog of the Future" is a revolutionary concept that envisions
            the evolution of traditional blogs into interactive, immersive, and
            personalized platforms.
          </div>
          <div>© Blog of the Future All Rights Reserved.</div>
        </div>
        {/* SECOND COLUMN */}
        <div className="mt-16 basis-1/4 sm:mt-0">
          <h4 className="font-bold">Links</h4>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            className="flex hover:font-bold my-5"
          >
            <Image
              className={`${isDark ? "brightness-0" : ""} hover:opacity-50`}
              alt="twitter"
              src={Twitter}
              width={20}
              height={20}
            />

            <div className="mx-2">Visit to Twitter page</div>
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            className="flex hover:font-bold my-5"
          >
            <Image
              className={`${isDark ? "brightness-0" : ""} hover:opacity-50`}
              alt="facebook"
              src={Facebook}
              width={20}
              height={20}
            />
            <div className="mx-2">Visit to Facebook page</div>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="flex hover:font-bold my-5"
          >
            <Image
              className={`${isDark ? "brightness-0" : ""} hover:opacity-50`}
              alt="instagram"
              src={Instagram}
              width={20}
              height={20}
            />
            <div className="mx-2">Visit to Instagram page</div>
          </a>
        </div>
        {/* THIRD COLUMN */}
        <div className="mt-16 basis-1/4 sm:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <div className="flex my-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>

            <div className="inline-flex mx-2">abcdef@gmail.com</div>
          </div>
          <div className="flex my-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              />
            </svg>

            <div className="inline-flex mx-2">(333)444-5555</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
