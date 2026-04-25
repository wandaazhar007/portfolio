import type { Metadata } from "next";
import ListDemo from "../components/listDemo/ListDemo";

export const metadata: Metadata = {
  title: "Web Development Portfolio in Twin Falls, Idaho",
  description:
    "Explore web development projects by Wanda Azhar, including frontend, full-stack, and modern web application work built with practical, scalable technologies.",
  alternates: {
    canonical: "/my-works",
  },
  openGraph: {
    title: "Web Development Portfolio | Wanda Azhar",
    description:
      "Explore web development projects by Wanda Azhar, including frontend, full-stack, and modern web application work.",
    url: "/my-works",
    images: [
      {
        url: "/wanda-azhar.jpg",
        width: 1200,
        height: 630,
        alt: "Wanda Azhar Works Portfolio",
      },
    ],
  },
};

const MyWork: React.FC = () => {
  return <ListDemo />;
};

export default MyWork;