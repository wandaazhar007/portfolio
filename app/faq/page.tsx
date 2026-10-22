//app/faq/page.tsx
import FaqComponent from '../components/faqComponent/FaqComponent';
import { Metadata } from 'next';
import { baseOpenGraph } from '../lib/seo';

export const metadata: Metadata = {
  title: 'Web Development FAQ in Twin Falls, Idaho',
  description:
    'Find answers to common questions about Wanda Azhar, web development experience, workflow, technologies, and collaboration opportunities in Twin Falls, Idaho.',
  alternates: {
    canonical: '/faq',
  },
  openGraph: {
    ...baseOpenGraph,
    title: 'Web Development FAQ | Wanda Azhar',
    description:
      'Answers to common questions about Wanda Azhar, web development experience, workflow, technologies, and collaboration opportunities.',
    url: '/faq',
  },
};

const FAQ_ITEMS = [
  {
    question: 'What technologies and programming languages are you proficient in?',
    answer:
      'I am skilled in HTML, CSS, JavaScript, TypeScript, Node.js, and MySQL, along with frameworks and infrastructure technologies such as Next.js, React.js, Express.js, Sequelize, Linux, Nginx, Git, GitHub, CI/CD, PM2, and REST APIs.',
  },
  {
    question: 'What is your preferred development environment?',
    answer:
      'I prefer working in a Linux environment, particularly Ubuntu. I use code editors like Visual Studio Code to write and debug code efficiently, and rely on Git and GitHub to manage and collaborate on projects.',
  },
  {
    question: 'How do you approach problem-solving in your coding projects?',
    answer:
      'I start by thoroughly understanding the requirements and breaking down the problem into smaller tasks. I research potential solutions, test and debug carefully, and seek feedback from peers to arrive at optimal solutions.',
  },
  {
    question: 'How do you ensure the security of the websites you develop?',
    answer:
      'I follow industry best practices: HTTPS to encrypt data transmission, sanitizing user inputs to reduce risks such as SQL injection and XSS, implementing authentication and authorization where needed, and keeping dependencies updated and patched.',
  },
  {
    question: 'How do you ensure responsive design and compatibility across devices?',
    answer:
      'I use a mobile-first approach, designing for mobile devices first and enhancing for larger screens with CSS media queries, ensuring a seamless experience on smartphones, tablets, and desktops.',
  },
  {
    question: 'What coding standards and practices do you follow?',
    answer:
      'I write clean, maintainable, and efficient code with consistent naming conventions and clear structure, apply the DRY principle, use Git for version control, and rely on linting tools such as ESLint.',
  },
  {
    question: "Can you provide examples of projects you've worked on?",
    answer: 'Yes. You can explore several of my featured projects on the My Works page.',
  },
  {
    question: 'Are you open to collaboration or freelance opportunities?',
    answer:
      "Yes, I'm open to collaboration and freelance opportunities. Feel free to reach out to me at wandaazhar@gmail.com.",
  },
  {
    question: 'How can I get in touch with you?',
    answer: 'You can reach me via email at wandaazhar@gmail.com.',
  },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};

const FaqPage: React.FC = () => {
  return (
    <>
      <FaqComponent />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </>
  );
}

export default FaqPage;
