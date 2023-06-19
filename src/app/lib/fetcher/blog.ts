import axios from "axios";
import { resolvePromise } from "../errorHandler/client";
import Blog from "@/app/model/blog";
import type RequestStatus from "@/app/model/status";

export const getFeaturedBlogs = async () => {
  const [data, error] = await resolvePromise<RequestStatus<Blog[]>>(
    axios.get(`api/blog?limit=4`)
  );

  if (error) throw Error(error.code.toString());
  if (data) return data;
  throw Error("Unknown Error");
};