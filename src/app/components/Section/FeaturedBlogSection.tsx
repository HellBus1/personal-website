"use client";

import { getFeaturedBlogs } from "@/app/lib/fetcher/blog";
import Blog from "@/app/model/blog";
import Image from "next/image";
import useSWR from "swr";

const FeaturedBlogSection = () => {
  const datas: Blog[] = [
    {
      id: "3wfFqAnkLXDDAe2MmSZj",
      title:
        "Exploring the Latest Jetpack Compose Preview — A Deep Dive into Android`s UI Toolkit",
      description:
        "Recently, there have been some exciting new trends in Jetpack Compose development, including the release of Jetpack Compose Preview, a powerful tool that allows developers to see their UI changes in real time as they code. If you have ever built mobile apps using cross-platform frameworks like Flutter or React Native, you will be familiar with this functionality.",
      banner:
        "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*cwImR3AqDJLX94tKd4LDKQ.jpeg",
      link: "https://medium.com/@syubbanfakhriya/exploring-the-latest-jetpack-compose-preview-a-deep-dive-into-androids-ui-toolkit-ccae158f2254",
      tags: ["jetpack compose", "android", "kotlin"],
      createdAt: { seconds: 1680714000, nanoseconds: 384000000 },
    },
    {
      id: "3wfFqAnkLXDDAe2MmSZj",
      title: "Exploring the Latest Jetpack",
      description:
        "Recently, there have been some exciting new trends in Jetpack Compose development, including the release of Jetpack Compose Preview, a powerful tool that allows developers to see their UI changes in real time as they code. If you have ever built mobile apps using cross-platform frameworks like Flutter or React Native, you will be familiar with this functionality.",
      banner:
        "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*cwImR3AqDJLX94tKd4LDKQ.jpeg",
      link: "https://medium.com/@syubbanfakhriya/exploring-the-latest-jetpack-compose-preview-a-deep-dive-into-androids-ui-toolkit-ccae158f2254",
      tags: ["jetpack compose", "android", "kotlin"],
      createdAt: { seconds: 1680714000, nanoseconds: 384000000 },
    },
    {
      id: "3wfFqAnkLXDDAe2MmSZj",
      title:
        "Exploring the Latest Jetpack Compose Preview — A Deep Dive into Android`s UI Toolkit",
      description:
        "Recently, there have been some exciting new trends in Jetpack Compose development, including the release of Jetpack Compose Preview, a powerful tool that allows developers to see their UI changes in real time as they code. If you have ever built mobile apps using cross-platform frameworks like Flutter or React Native, you will be familiar with this functionality.",
      banner:
        "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*cwImR3AqDJLX94tKd4LDKQ.jpeg",
      link: "https://medium.com/@syubbanfakhriya/exploring-the-latest-jetpack-compose-preview-a-deep-dive-into-androids-ui-toolkit-ccae158f2254",
      tags: ["jetpack compose", "android", "kotlin"],
      createdAt: { seconds: 1680714000, nanoseconds: 384000000 },
    },
    {
      id: "3wfFqAnkLXDDAe2MmSZj",
      title:
        "Exploring the Latest Jetpack Compose Preview — A Deep Dive into Android`s UI Toolkit",
      description:
        "Recently, there have been some exciting new trends in Jetpack Compose development, including the release of Jetpack Compose Preview, a powerful tool that allows developers to see their UI changes in real time as they code. If you have ever built mobile apps using cross-platform frameworks like Flutter or React Native, you will be familiar with this functionality.",
      banner:
        "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*cwImR3AqDJLX94tKd4LDKQ.jpeg",
      link: "https://medium.com/@syubbanfakhriya/exploring-the-latest-jetpack-compose-preview-a-deep-dive-into-androids-ui-toolkit-ccae158f2254",
      tags: ["jetpack compose", "android", "kotlin"],
      createdAt: { seconds: 1680714000, nanoseconds: 384000000 },
    },
    {
      id: "3wfFqAnkLXDDAe2MmSZj",
      title:
        "Exploring the Latest Jetpack Compose Preview — A Deep Dive into Android`s UI Toolkit",
      description:
        "Recently, there have been some exciting new trends in Jetpack Compose development, including the release of Jetpack Compose Preview, a powerful tool that allows developers to see their UI changes in real time as they code. If you have ever built mobile apps using cross-platform frameworks like Flutter or React Native, you will be familiar with this functionality.",
      banner:
        "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*cwImR3AqDJLX94tKd4LDKQ.jpeg",
      link: "https://medium.com/@syubbanfakhriya/exploring-the-latest-jetpack-compose-preview-a-deep-dive-into-androids-ui-toolkit-ccae158f2254",
      tags: ["jetpack compose", "android", "kotlin"],
      createdAt: { seconds: 1680714000, nanoseconds: 384000000 },
    },
    {
      id: "3wfFqAnkLXDDAe2MmSZj",
      title:
        "Exploring the Latest Jetpack Compose Preview — A Deep Dive into Android`s UI Toolkit",
      description:
        "Recently, there have been some exciting new trends in Jetpack Compose development, including the release of Jetpack Compose Preview, a powerful tool that allows developers to see their UI changes in real time as they code. If you have ever built mobile apps using cross-platform frameworks like Flutter or React Native, you will be familiar with this functionality.",
      banner:
        "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*cwImR3AqDJLX94tKd4LDKQ.jpeg",
      link: "https://medium.com/@syubbanfakhriya/exploring-the-latest-jetpack-compose-preview-a-deep-dive-into-androids-ui-toolkit-ccae158f2254",
      tags: ["jetpack compose", "android", "kotlin"],
      createdAt: { seconds: 1680714000, nanoseconds: 384000000 },
    },
    {
      id: "3wfFqAnkLXDDAe2MmSZj",
      title:
        "Exploring the Latest Jetpack Compose Preview — A Deep Dive into Android`s UI Toolkit",
      description:
        "Recently, there have been some exciting new trends in Jetpack Compose development, including the release of Jetpack Compose Preview, a powerful tool that allows developers to see their UI changes in real time as they code. If you have ever built mobile apps using cross-platform frameworks like Flutter or React Native, you will be familiar with this functionality.",
      banner:
        "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*cwImR3AqDJLX94tKd4LDKQ.jpeg",
      link: "https://medium.com/@syubbanfakhriya/exploring-the-latest-jetpack-compose-preview-a-deep-dive-into-androids-ui-toolkit-ccae158f2254",
      tags: ["jetpack compose", "android", "kotlin"],
      createdAt: { seconds: 1680714000, nanoseconds: 384000000 },
    },
  ];
  // const {
  //   data,
  //   mutate,
  //   isLoading,
  //   error,
  // } = useSWR<Blog[], Error>("/api/blog?limit=4", getFeaturedBlogs, {
  //   onError: (error) => {
  //     console.log(error);
  //   },
  //   revalidateOnFocus: false,
  //   revalidateOnReconnect: false,
  // });

  return (
    <section className="flex flex-col bg-neutral py-20">
      <div className="mx-24">
        <p className="text-neutral-content text-4xl font-bold">
          Featured Blog Posts
        </p>
        <p className="text-xl mt-3">
          Discover the latest insights and inspiration in my newest posts.
        </p>
      </div>

      <div className="mx-24 mt-10">
        <div className="carousel w-full space-x-8 bg-neutral">
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
                    height={185}
                    className="rounded-lg"
                  />
                </figure>
                <div>
                  <div className="flex flex-row mt-4 mb-2">
                    <p>
                      {new Date(item.createdAt.seconds * 1000).toLocaleString(
                        "en-US",
                        { year: "numeric", month: "long", day: "numeric" }
                      )}
                    </p>
                    <p className="mx-2">{"•"}</p>
                    <p>{item.tags[0]}</p>
                  </div>
                  <h3 className="card-title line-clamp-3 text-neutral-content">{item.title}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedBlogSection;
