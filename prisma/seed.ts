import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
  const tag1 = await prisma.tag.create({
    data: {
      name: "jetpack compose",
    },
  });

  const tag2 = await prisma.tag.create({
    data: {
      name: "android",
    },
  });

  const tag3 = await prisma.tag.create({
    data: {
      name: "kotlin",
    },
  });

  const tag4 = await prisma.tag.create({
    data: {
      name: "ai",
    },
  });

  const tag5 = await prisma.tag.create({
    data: {
      name: "prompts",
    },
  });

  const tag6 = await prisma.tag.create({
    data: {
      name: "chatgpt",
    },
  });

  const tag7 = await prisma.tag.create({
    data: {
      name: "productivity",
    },
  });

  const tag8 = await prisma.tag.create({
    data: {
      name: "mvvm",
    },
  });

  const tag9 = await prisma.tag.create({
    data: {
      name: "psychology",
    },
  });

  const tag10 = await prisma.tag.create({
    data: {
      name: "self improvement",
    },
  });

  const tag11 = await prisma.tag.create({
    data: {
      name: "personality",
    },
  });

  const tag12 = await prisma.tag.create({
    data: {
      name: "life lessons",
    },
  });

  const tag13 = await prisma.tag.create({
    data: {
      name: "flutter",
    },
  });

  const tag14 = await prisma.tag.create({
    data: {
      name: "react native",
    },
  });

  const tag15 = await prisma.tag.create({
    data: {
      name: "javascript",
    },
  });

  const tag16 = await prisma.tag.create({
    data: {
      name: "typescript",
    },
  });

  const blog1 = await prisma.blog.create({
    data: {
      title:
        "Exploring the Latest Jetpack Compose Preview — A Deep Dive into Android’s UI Toolkit",
      banner:
        "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*cwImR3AqDJLX94tKd4LDKQ.jpeg",
      description:
        "Recently, there have been some exciting new trends in Jetpack Compose development, including the release of Jetpack Compose Preview, a powerful tool that allows developers to see their UI changes in real time as they code. If you have ever built mobile apps using cross-platform frameworks like Flutter or React Native, you will be familiar with this functionality.",
      link: "https://medium.com/@syubbanfakhriya/exploring-the-latest-jetpack-compose-preview-a-deep-dive-into-androids-ui-toolkit-ccae158f2254",
      tags: {
        connect: [{ id: tag1.id }, { id: tag2.id }, { id: tag3.id }],
      },
    },
  });

  const blog2 = await prisma.blog.create({
    data: {
      title:
        "Boost Your Productivity with ChatGPT — The Ultimate Tool for Efficiency",
      banner:
        "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*zeOleUiSeZZtL0SJARrn9A.jpeg",
      description:
        "If you’re seeking to increase your productivity and streamline your workflow, ChatGPT is the ultimate solution. This advanced AI tool is designed to help you stay organized, manage your tasks and optimize your time. Whether you need assistance scheduling meetings, prioritizing assignments, or generating new ideas, ChatGPT has got you covered. Its intuitive interface and powerful functionality make it the perfect tool for individuals seeking to maximize productivity and achieve their goals.",
      link: "https://medium.com/@syubbanfakhriya/boost-your-productivity-with-chatgpt-the-ultimate-tool-for-efficiency-8a49bcf59b18",
      tags: {
        connect: [
          { id: tag4.id },
          { id: tag5.id },
          { id: tag6.id },
          { id: tag7.id },
        ],
      },
    },
  });

  const blog3 = await prisma.blog.create({
    data: {
      title:
        "Build a Note App with Jetpack Compose & MVVM architecture: Project Setup & Overview (Part 1 of Series)",
      banner:
        "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*WIswUuFRX4VGheIWmOt7sw.jpeg",
      description:
        "Note-taking apps have become an integral part of our daily lives, both for personal and professional purposes. The increasing demand for such applications has led to a need for developers to create apps that not only provide a seamless user experience but also ensure scalability and maintainability. That’s why, in this guide, we will build a well-architected note-taking app using Jetpack Compose, MVVM architecture, and the MAD guide, which follows the latest trends in Android development.",
      link: "https://medium.com/@syubbanfakhriya/build-a-note-app-with-jetpack-compose-mvvm-architecture-project-setup-overview-part-1-of-d3e850457814",
      tags: {
        connect: [
          { id: tag1.id },
          { id: tag2.id },
          { id: tag8.id },
          { id: tag3.id },
        ],
      },
    },
  });

  const blog4 = await prisma.blog.create({
    data: {
      title:
        "Beating Extroversion: How Introverts Can Succeed in a World That Favors Outgoing Personalities",
      banner: "https://miro.medium.com/v2/resize:fit:1400/0*vdGL24kK1Yzvxn9Z",
      description:
        "From job interviews to social gatherings, it’s no secret that the world seems to favor extroverts. Society has long celebrated those who are outgoing, confident, and naturally charismatic while overlooking the quiet achievers who prefer to work behind the scenes. For introverts, this can be a significant obstacle in both personal and professional settings. However, all hope is not lost. In this article, we’ll explore how introverts can navigate a world that seems to favor extroverts and find success in their own way. Let’s dive in.",
      link: "https://medium.com/@syubbanfakhriya/beating-extroversion-how-introverts-can-succeed-in-a-world-that-favors-outgoing-personalities-e724e5f98c67",
      tags: {
        connect: [
          { id: tag9.id },
          { id: tag10.id },
          { id: tag11.id },
          { id: tag12.id },
        ],
      },
    },
  });

  const blog5 = await prisma.blog.create({
    data: {
      title:
        "React Native vs Flutter: Which Framework Reigns Supreme in Multiplatform Mobile Development? — A Comparative Analysis.",
      banner:
        "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*E_v8gPRAas_5r8yWsifo0Q.png",
      description:
        "Hybrid and cross-platform app development are the latest trends in the world of app development. By using a single codebase, developers can create apps that can run seamlessly on multiple platforms, including Android and iOS. This approach not only significantly reduces the development time and cost for businesses but also enables them to reach a wider audience and launch their products more quickly.",
      link: "https://medium.com/@syubbanfakhriya/react-native-vs-flutter-which-framework-reigns-supreme-in-multiplatform-mobile-development-8de6ec12cf60",
      tags: {
        connect: [
          { id: tag13.id },
          { id: tag14.id },
          { id: tag15.id },
          { id: tag16.id },
        ],
      },
    },
  });

  console.log({ blog1, blog2, blog3, blog4, blog5 });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
