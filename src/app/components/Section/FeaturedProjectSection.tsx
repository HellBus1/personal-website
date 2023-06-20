"use client";

import Project from "@/app/model/project";
import Image from "next/image";
import {
  SiAndroidstudio,
  SiBootstrap,
  SiDart,
  SiFlutter,
  SiKotlin,
  SiLaravel,
  SiPhp,
} from "react-icons/si";

const iconMapper: Record<string, JSX.Element> = {
  flutter: <SiFlutter size={20} />,
  laravel: <SiLaravel size={20} />,
  kotlin: <SiKotlin size={20} />,
  "android studio": <SiAndroidstudio size={20} />,
  bootstrap: <SiBootstrap size={20} />,
  php: <SiPhp size={20} />,
  dart: <SiDart size={20} />,
};

const FeaturedProjectSection = () => {
  const datas: Project[] = [
    {
      id: "id",
      name: "VentNote",
      shortDescription: "Ventnote is note taking app",
      banner:
        "https://firebasestorage.googleapis.com/v0/b/personalwebsite-af6e7.appspot.com/o/projects%2Fsasrabahu.png?alt=media&token=eb996cb3-8529-4b8c-9cf0-b54f68189ad6",
      path: "/a/a",
      createdAt: { seconds: 1680714000, nanoseconds: 384000000 },
      stacks: ["laravel", "bootstrap", "php"],
    },
    {
      id: "id",
      name: "VentFit",
      shortDescription: "Ventnote is bmi calculator",
      banner:
        "https://firebasestorage.googleapis.com/v0/b/personalwebsite-af6e7.appspot.com/o/projects%2Fventfit_banner.jpg?alt=media&token=cebdda28-17a3-4077-bae6-9f024a6054a3",
      path: "/a/a",
      createdAt: { seconds: 1680714000, nanoseconds: 384000000 },
      stacks: ["flutter", "dart", "android studio"],
    },
    {
      id: "id",
      name: "VentFit",
      shortDescription: "Ventnote is bmi calculator",
      banner:
        "https://firebasestorage.googleapis.com/v0/b/personalwebsite-af6e7.appspot.com/o/projects%2Fventnote_banner.jpg?alt=media&token=ea2b43b4-8020-431a-9e8b-ee20339b7eb9",
      path: "/a/a",
      createdAt: { seconds: 1680714000, nanoseconds: 384000000 },
      stacks: ["kotlin", "android studio"],
    },
  ];

  return (
    <section className="flex flex-col py-40">
      <div className="mx-40">
        <p className="text-neutral-content text-4xl font-bold">
          Featured Projects
        </p>
        <p className="text-xl mt-3">
          Explore the most cutting-edge ventures showcased in my collection of
          projects.
        </p>
      </div>

      <div className="mx-40 mt-10">
        <div className="carousel w-full space-x-8">
          {datas?.map((item, index) => {
            return (
              <div
                key={`${item.id}-${index}`}
                className="card card-compact carousel-item w-96"
              >
                <figure>
                  <Image
                    alt=""
                    src={item.banner}
                    width={window.innerWidth}
                    height={200}
                    className="rounded-lg w-full h-48 object-cover"
                  />
                </figure>
                <div>
                  <div className="text-base flex flex-row mt-4 mb-2 space-x-2 items-center">
                    {item.stacks.map((item, index) => {
                      return <div key={index}>{iconMapper[item]}</div>;
                    })}
                  </div>
                  <div className="text-lg line-clamp-2 text-neutral-content font-bold">
                    {item.name}
                  </div>
                  <div className="text-base line-clamp-3">
                    {item.shortDescription}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mx-40 mt-4">
        <button className="btn btn-outline text-neutral-content mt-8 w-52 capitalize">
          See more project
        </button>
      </div>
    </section>
  );
};

export default FeaturedProjectSection;
