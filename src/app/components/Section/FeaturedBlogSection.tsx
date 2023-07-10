"use client";

import { getFeaturedBlogs } from "@/app/lib/fetcher/blog";
import Blog from "@/app/model/blog";
import RequestStatus from "@/app/model/status";
import Image from "next/image";
import useSWR from "swr";

const FeaturedBlogSection = () => {
  // const datas: Blog[] = [
  //   {
  //     id: "3wfFqAnkLXDDAe2MmSZj",
  //     title:
  //       "Exploring the Latest Jetpack Compose Preview — A Deep Dive into Android`s UI Toolkit",
  //     description:
  //       "Recently, there have been some exciting new trends in Jetpack Compose development, including the release of Jetpack Compose Preview, a powerful tool that allows developers to see their UI changes in real time as they code. If you have ever built mobile apps using cross-platform frameworks like Flutter or React Native, you will be familiar with this functionality.",
  //     banner:
  //       "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*cwImR3AqDJLX94tKd4LDKQ.jpeg",
  //     link: "https://medium.com/@syubbanfakhriya/exploring-the-latest-jetpack-compose-preview-a-deep-dive-into-androids-ui-toolkit-ccae158f2254",
  //     tags: ["jetpack compose", "android", "kotlin"],
  //     createdAt: { seconds: 1680714000, nanoseconds: 384000000 },
  //   },
  //   {
  //     id: "3wfFqAnkLXDDAe2MmSZj",
  //     title: "Exploring the Latest Jetpack",
  //     description:
  //       "Recently, there have been some exciting new trends in Jetpack Compose development, including the release of Jetpack Compose Preview, a powerful tool that allows developers to see their UI changes in real time as they code. If you have ever built mobile apps using cross-platform frameworks like Flutter or React Native, you will be familiar with this functionality.",
  //     banner:
  //       "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*cwImR3AqDJLX94tKd4LDKQ.jpeg",
  //     link: "https://medium.com/@syubbanfakhriya/exploring-the-latest-jetpack-compose-preview-a-deep-dive-into-androids-ui-toolkit-ccae158f2254",
  //     tags: ["jetpack compose", "android", "kotlin"],
  //     createdAt: { seconds: 1680714000, nanoseconds: 384000000 },
  //   },
  //   {
  //     id: "3wfFqAnkLXDDAe2MmSZj",
  //     title:
  //       "Exploring the Latest Jetpack Compose Preview — A Deep Dive into Android`s UI Toolkit",
  //     description:
  //       "Recently, there have been some exciting new trends in Jetpack Compose development, including the release of Jetpack Compose Preview, a powerful tool that allows developers to see their UI changes in real time as they code. If you have ever built mobile apps using cross-platform frameworks like Flutter or React Native, you will be familiar with this functionality.",
  //     banner:
  //       "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*cwImR3AqDJLX94tKd4LDKQ.jpeg",
  //     link: "https://medium.com/@syubbanfakhriya/exploring-the-latest-jetpack-compose-preview-a-deep-dive-into-androids-ui-toolkit-ccae158f2254",
  //     tags: ["jetpack compose", "android", "kotlin"],
  //     createdAt: { seconds: 1680714000, nanoseconds: 384000000 },
  //   },
  //   {
  //     id: "3wfFqAnkLXDDAe2MmSZj",
  //     title:
  //       "Exploring the Latest Jetpack Compose Preview — A Deep Dive into Android`s UI Toolkit",
  //     description:
  //       "Recently, there have been some exciting new trends in Jetpack Compose development, including the release of Jetpack Compose Preview, a powerful tool that allows developers to see their UI changes in real time as they code. If you have ever built mobile apps using cross-platform frameworks like Flutter or React Native, you will be familiar with this functionality.",
  //     banner:
  //       "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*cwImR3AqDJLX94tKd4LDKQ.jpeg",
  //     link: "https://medium.com/@syubbanfakhriya/exploring-the-latest-jetpack-compose-preview-a-deep-dive-into-androids-ui-toolkit-ccae158f2254",
  //     tags: ["jetpack compose", "android", "kotlin"],
  //     createdAt: { seconds: 1680714000, nanoseconds: 384000000 },
  //   },
  // ];

  // const data = {
  //   data: datas,
  // };

  const {
    data,
    mutate,
    isLoading,
    error,
  } = useSWR<RequestStatus<Blog[]>, Error>("/api/blog?limit=4", getFeaturedBlogs, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  if (!data) {
    return <></>;
  }

  return (
    <section className="flex flex-col bg-neutral py-40">
      <div className="mx-40">
        <p className="text-neutral-content text-4xl font-bold">
          Featured Blog Posts
        </p>
        <p className="text-xl mt-3">
          Discover the latest insights and inspiration in my newest posts.
        </p>
      </div>

      <div className="mx-40 mt-10">
        <div className="carousel w-full space-x-8 bg-neutral">
          {data.data?.map((item, index) => {
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
                    className="rounded-lg w-full h-48 object-cover z-0"
                  />
                </figure>
                <div>
                  <div className="text-base flex flex-row mt-4 mb-2">
                    {/* <p>
                      {new Date(item.createdAt.seconds * 1000).toLocaleString(
                        "en-US",
                        { year: "numeric", month: "long", day: "numeric" }
                      )}
                    </p> */}
                    <p className="mx-2">{"•"}</p>
                    {/* <p>{item.tags[0]}</p> */}
                  </div>
                  <div className="text-lg line-clamp-3 text-neutral-content font-bold">
                    {item.title}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mx-40 mt-4">
        <button className="btn btn-outline text-neutral-content mt-8 w-52 capitalize">
          See more post
        </button>
      </div>
    </section>
  );
};

export default FeaturedBlogSection;
