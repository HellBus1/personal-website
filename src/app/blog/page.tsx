import BaseLayout from "../components/Layout/BaseLayout";
import { FaInfoCircle } from "react-icons/fa";

const Page = () => {
  return (
    <BaseLayout>
      <section className="h-screen">
        <div className="mx-24 mt-20">
          <p className="text-neutral-content text-4xl font-bold">
            Blog
          </p>
          <p className="text-xl mt-3">
            Discover the latest insights and inspiration in my newest posts.
          </p>
        </div>

        <div className="rounded relative mx-24 my-10 bg-neutral flex items-center border-l-4 px-4 py-4">
          <FaInfoCircle className="text-neutral-content" />
          <p className="mx-4 text-neutral-content">
            The blog is currently unavailable. Stay tuned for updates as we work
            on bringing you exciting content soon.
          </p>
        </div>
      </section>
    </BaseLayout>
  );
};

export default Page;
