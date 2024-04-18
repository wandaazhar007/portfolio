import FaqComponent from '../components/faqComponent/FaqComponent';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Web Development FAQs | Wanda Azhar | Canton, Michigan',
  description: 'Get answers to your web development questions. Browse my FAQs for information on my services, process, and more.',
}
const FaqPage: React.FC = () => {
  return (
    <FaqComponent />
  );
}

export default FaqPage;