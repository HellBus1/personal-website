"use client";

import Link from "next/link";
import Typewriter from "typewriter-effect";
import {
  GithubOutlined,
  MediumCircleFilled,
  TwitterCircleFilled,
} from "@ant-design/icons";

const OverviewSection = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center">
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
          <GithubOutlined className="text-xl" />
          <p className="text-neutral-content mt-1 ms-2">HellBus1</p>
        </Link>

        <div className="border-l mx-4"></div>

        <Link
          className="flex flex-row items-center justify-center"
          href={"https://medium.com/@syubbanfakhriya"}
        >
          <MediumCircleFilled className="text-xl" />
          <p className="text-neutral-content mt-1 ms-2">@syubbanfakhriya</p>
        </Link>

        <div className="border-l mx-4"></div>

        <Link
          className="flex flex-row items-center justify-center"
          href={"https://twitter.com/Syubban5"}
        >
          <TwitterCircleFilled className="text-xl" />
          <p className="text-neutral-content ms-2">@Syubban5</p>
        </Link>
      </div>

      <button className="btn btn-outline btn-neutral-content rounded-full mt-8">
        Download Resume
      </button>
    </section>
  );
};

export default OverviewSection;
