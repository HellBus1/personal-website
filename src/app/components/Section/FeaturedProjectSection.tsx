"use client";

import Project from "@/app/model/project";
import Image from "next/image";

const iconMapper = {

}

const FeaturedProjectSection = () => {
    const datas: Project[] = [
        {
            id: "id",
            name: "VentNote",
            shortDescription: "Ventnote is note taking app",
            banner: "https://firebasestorage.googleapis.com/v0/b/personalwebsite-af6e7.appspot.com/o/projects%2Fventnote_banner.jpg?alt=media&token=9308f455-7f1e-49a8-aac8-0fdc7835bff3",
            path: "/a/a",
            createdAt: { seconds: 1680714000, nanoseconds: 384000000 },
            stacks: ["kotlin", "android studio"]
        },
        {
            id: "id",
            name: "VentFit",
            shortDescription: "Ventnote is bmi calculator",
            banner: "https://firebasestorage.googleapis.com/v0/b/personalwebsite-af6e7.appspot.com/o/projects%2Fventfit_banner.jpg?alt=media&token=a62cdc3f-e08b-4618-aaf5-ec4ed2d2e7f5",
            path: "/a/a",
            createdAt: { seconds: 1680714000, nanoseconds: 384000000 },
            stacks: ["flutter", "android studio"]
        },
        {
            id: "id",
            name: "VentFit",
            shortDescription: "Ventnote is bmi calculator",
            banner: "https://firebasestorage.googleapis.com/v0/b/personalwebsite-af6e7.appspot.com/o/projects%2Fventfit_banner.jpg?alt=media&token=a62cdc3f-e08b-4618-aaf5-ec4ed2d2e7f5",
            path: "/a/a",
            createdAt: { seconds: 1680714000, nanoseconds: 384000000 },
            stacks: ["flutter", "android studio"]
        },{
            id: "id",
            name: "VentNote",
            shortDescription: "Ventnote is note taking app",
            banner: "https://firebasestorage.googleapis.com/v0/b/personalwebsite-af6e7.appspot.com/o/projects%2Fventnote_banner.jpg?alt=media&token=9308f455-7f1e-49a8-aac8-0fdc7835bff3",
            path: "/a/a",
            createdAt: { seconds: 1680714000, nanoseconds: 384000000 },
            stacks: ["kotlin", "android studio"]
        },
    ]

    return <section className="flex flex-col py-36">
      <div className="mx-40">
        <p className="text-neutral-content text-4xl font-bold">
          Featured Projects
        </p>
        <p className="text-xl mt-3">
        Explore the most cutting-edge ventures showcased in my collection of projects.
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
                    className="rounded-lg"
                  />
                </figure>
                <div>
                  <div className="text-base flex flex-row mt-4 mb-2">
                    
                  </div>
                  <div className="text-lg line-clamp-3 text-neutral-content font-bold">{item.name}</div>
                  <div className="text-base line-clamp-3">{item.shortDescription}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>;
};

export default FeaturedProjectSection;