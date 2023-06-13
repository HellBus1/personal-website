'use client';

import BaseLayout from "./components/Layout/BaseLayout";
import Typewriter from "typewriter-effect";

export default function Page() {
  return (
    <BaseLayout>
      <section className="h-screen flex flex-col justify-center items-center">
        <div>
          <p className="text-neutral-content text-center text-xl font-medium">
            Hello, I'm Syubban Fakhriya
          </p>
          {/* <p className="text-neutral-content text-center">
            IT Enthusiast & Content Writer
          </p> */}
          <Typewriter
            options={{
              strings: ["IT Enthusiast", "Content Writer"],
              autoStart: true,
              loop: true,
              wrapperClassName: "text-4xl font-bold"
            }}
          />
        </div>

        <div>
          <p>
            I am a Software Developer who specializes in utilizing Kotlin,
            Flutter, and the React ecosystem.
          </p>
          <p>Open for collaboration</p>
        </div>
      </section>
    </BaseLayout>
  );
}
