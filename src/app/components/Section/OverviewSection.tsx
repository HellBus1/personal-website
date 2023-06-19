"use client";

import Link from "next/link";
import Typewriter from "typewriter-effect";
import {
  SiLinkedin,
  SiMedium,
  SiTwitter
} from "react-icons/si";
import Image from "next/image";

const OverviewSection = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <div className="avatar mb-8">
          <div className="w-52 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <Image
              alt=""
              src={'/image/avatar.jpg'}
              fill={true}
              style={{
                objectFit: 'cover',
              }}
              className="rounded-full"
            />
          </div>
        </div>
        <p className="text-neutral-content text-xl font-medium mb-3">
          Hello, I&apos;m Syubban Fakhriya
        </p>
        <Typewriter
          options={{
            strings: ["IT Enthusiast", "Content Writer"],
            autoStart: true,
            loop: true,
            wrapperClassName: "text-neutral-content text-4xl font-bold",
            cursorClassName: "text-neutral-content text-4xl",
          }}
        />
      </div>

      <div className="text-center mt-4">
        <p>
          I am a Developer who focusing in mobile & web stuff based in
          Indonesia.
        </p>
        <p>Utilize Kotlin, Flutter, and the React ecosystem</p>
      </div>

      <div className="flex flex-row mt-4">
        <Link
          className="flex flex-row items-center justify-center"
          href={"https://github.com/HellBus1"}
        >
          <SiLinkedin className="text-xl" />
          <p className="text-base-content mt-1 ms-2">HellBus1</p>
        </Link>

        <div className="border-l mx-4"></div>

        <Link
          className="flex flex-row items-center justify-center"
          href={"https://medium.com/@syubbanfakhriya"}
        >
          <SiMedium className="text-xl" />
          <p className="text-base-content mt-1 ms-2">@syubbanfakhriya</p>
        </Link>

        <div className="border-l mx-4"></div>

        <Link
          className="flex flex-row items-center justify-center"
          href={"https://twitter.com/Syubban5"}
        >
          <SiTwitter className="text-xl" />
          <p className="text-base-content ms-2">@Syubban5</p>
        </Link>
      </div>

      <button className="btn btn-outline text-neutral-content rounded-full mt-8">
        Download Resume
      </button>
    </section>
  );
};

export default OverviewSection;
