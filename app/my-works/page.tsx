import type { Metadata } from "next";
import { baseOpenGraph } from "../lib/seo";
import ListDemo from "../components/listDemo/ListDemo";
import { getPublishedWorks } from "../lib/data";

export const metadata: Metadata = {
  title: "Web Development Portfolio in Twin Falls, Idaho",
  description:
    "Explore web development projects by Wanda Azhar, including frontend, full-stack, and modern web application work built with practical, scalable technologies.",
  alternates: {
    canonical: "/my-works",
  },
  openGraph: {
    ...baseOpenGraph,
    title: "Web Development Portfolio | Wanda Azhar",
    description:
      "Explore web development projects by Wanda Azhar, including frontend, full-stack, and modern web application work.",
    url: "/my-works",
  },
};

const MyWork = async () => {
  const works = await getPublishedWorks();

  return <ListDemo initialWorks={works} />;
};

export default MyWork;