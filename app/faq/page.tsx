//app/faq/page.tsx
import FaqComponent from '../components/faqComponent/FaqComponent';
import { Metadata } from 'next';

// export const metadata: Metadata = {
//   title: 'Web Development FAQs | Wanda Azhar | Canton, Michigan',
//   description: 'Get answers to your web development questions. Browse my FAQs for information on my services, process, and more.',
// }

export const metadata: Metadata = {
  title: 'Web Development FAQ in Twin Falls, Idaho',
  description:
    'Find answers to common questions about Wanda Azhar, web development experience, workflow, technologies, and collaboration opportunities in Twin Falls, Idaho.',
};

const FaqPage: React.FC = () => {
  return (
    <FaqComponent />
  );
}

export default FaqPage;