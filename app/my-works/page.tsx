import ListDemo from "../components/listDemo/ListDemo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Web Development Portfolio: Crafting Impactful Digital Experiences',
  description: 'Explore a web developer portfolio showcasing skills, creativity, and dedication in crafting impactful digital experiences. Discover coding passion and user-friendly solutions.',
}

const MyWork: React.FC = () => {
  return (
    <ListDemo />
  );
}

export default MyWork;