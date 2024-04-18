import ListDemo from "../components/listDemo/ListDemo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Web Development Portfolio | Wanda Azhar | Canton, Michigan',
  description: 'Explore my web development projects, showcasing my skills in HTML, CSS, JavaScript, Reactjs, NodeJs, NextJs, TypeScript. View my portfolio now',
}

const MyWork: React.FC = () => {
  return (
    <ListDemo />
  );
}

export default MyWork;