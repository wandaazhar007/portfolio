import type { Metadata } from "next";
import { baseOpenGraph } from "./lib/seo";
import Accomplishments from "./components/accomplishments/Accomplishments";
import Biodata from "./components/biodata/Biodata";
import Certifications from "./components/certifications/Certifications";
import Experiences from "./components/experiences/Experiences";
import Headline from "./components/headline/Headline";
import HeadlineTwo from "./components/headlineTwo/HeadlineTwo";

export const metadata: Metadata = {
  title: {
    absolute: "Wanda Azhar | WordPress Developer & Web Designer in Twin Falls, Idaho",
  },
  description:
    "Wanda Azhar is a WordPress developer and web designer in Twin Falls, Idaho, creating fast, SEO-ready websites and web applications for businesses, using WordPress, Next.js, and AI-assisted workflows.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    ...baseOpenGraph,
    title: "Wanda Azhar | WordPress Developer & Web Designer in Twin Falls, Idaho",
    description:
      "Explore projects, experience, and technical expertise from Wanda Azhar, a WordPress developer and web designer in Twin Falls, Idaho.",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wanda Azhar | WordPress Developer & Web Designer in Twin Falls, Idaho",
    description:
      "Explore projects, experience, and technical expertise from Wanda Azhar, a WordPress developer and web designer in Twin Falls, Idaho.",
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