import type { Metadata } from "next";
import Accomplishments from "./components/accomplishments/Accomplishments";
import Biodata from "./components/biodata/Biodata";
import Certifications from "./components/certifications/Certifications";
import Experiences from "./components/experiences/Experiences";
import Headline from "./components/headline/Headline";
import HeadlineTwo from "./components/headlineTwo/HeadlineTwo";

export const metadata: Metadata = {
  title: "Web Developer in Twin Falls, Idaho",
  description:
    "Wanda Azhar is a web developer in Twin Falls, Idaho, United States, creating modern websites, responsive interfaces, and scalable web applications for businesses and personal brands.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Wanda Azhar | Web Developer in Twin Falls, Idaho",
    description:
      "Explore projects, experience, and technical expertise from Wanda Azhar, a web developer in Twin Falls, Idaho.",
    url: "/",
    images: [
      {
        url: "/wanda-azhar.jpg",
        width: 1200,
        height: 630,
        alt: "Wanda Azhar Portfolio Homepage",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wanda Azhar | Web Developer in Twin Falls, Idaho",
    description:
      "Explore projects, experience, and technical expertise from Wanda Azhar, a web developer in Twin Falls, Idaho.",
    images: ["/wanda-azhar.jpg"],
  },
};

export default function Home() {
  return (
    <section className="home">
      <div className="wrapContainer">
        <div className="sectionContainer">
          <Headline />
          <Experiences />
          <Accomplishments />
          <HeadlineTwo />
          <Certifications />
          <Biodata />
        </div>
      </div>
    </section>
  );
}