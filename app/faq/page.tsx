import FaqComponent from '../components/faqComponent/FaqComponent';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ: Answers to Common Questions from Employers, Collaborators, and Visitors',
  description: 'Discover comprehensive answers to frequently asked questions by potential employers, collaborators, and visitors on my portfolio website. Get the insights you need..',
}
const FaqPage: React.FC = () => {
  return (
    <FaqComponent />
  );
}

export default FaqPage;