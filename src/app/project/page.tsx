import { FaInfoCircle } from "react-icons/fa";
import BaseLayout from "../components/Layout/BaseLayout";

const Page = () => {
  return (
    <BaseLayout>
      <section className="h-screen">
        <div className="mx-24 mt-20">
          <p className="text-neutral-content text-4xl font-bold">Project</p>
          <p className="text-xl mt-3">
            Explore the most cutting-edge ventures showcased in my collection of
            projects.
          </p>
        </div>

        <div className="rounded relative mx-24 my-10 bg-neutral flex items-center border-l-4 px-4 py-4">
          <FaInfoCircle className="text-neutral-content" />
          <p className="mx-4 text-neutral-content">
            The project is currently unavailable. Stay tuned for updates on its
            progress.
          </p>
        </div>
      </section>
    </BaseLayout>
  );
};

export default Page;
