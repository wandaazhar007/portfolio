// //app/components/faqComponent/FaqComponent.tsx
// 'use client'
// import './faqComponent.scss';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import Link from 'next/link';
// import { faSquareArrowUpRight } from '@fortawesome/free-solid-svg-icons';
// import { motion } from 'framer-motion';

// const FaqComponent: React.FC = () => {
//   return (
//     <section className="faq">
//       <div className="wrapContainer">
//         <div className="box-container">
//           <div className="header">
//             <motion.h1
//               initial={{ opacity: 0, scale: 1, y: -100 }}
//               whileInView={{ opacity: 1, scale: 1, y: 0 }}
//               transition={{ duration: 1 }}
//             >Frequently Asked Questions
//             </motion.h1>
//             <motion.p
//               initial={{ opacity: 0, scale: 1, y: 100 }}
//               whileInView={{ opacity: 1, scale: 1, y: 0 }}
//               transition={{ duration: 1 }}
//             >Let me answer some of your questions.</motion.p>
//             <div className="boxHeaderContainer">
//               <motion.div
//                 initial={{ opacity: 0, scale: 1, x: -100 }}
//                 whileInView={{ opacity: 1, scale: 1, x: 0 }}
//                 transition={{ duration: 1 }}
//                 className="boxHeader boxHeader1">
//                 you'll find answers to questions that potential employers, collaborators, and visitors often ask.
//               </motion.div>
//               <motion.div
//                 initial={{ opacity: 0, scale: 1, x: 100 }}
//                 whileInView={{ opacity: 1, scale: 1, x: 0 }}
//                 transition={{ duration: 1 }}
//                 className="boxHeader boxHeader2">
//                 I&apos;m committed to transparency and open communication, and this FAQ page is designed to provide you with insights into my experience, approach, and values as a web developer.
//               </motion.div>
//             </div>
//           </div>
//           <div className="box">
//             <ul className="accordion">
//               <motion.li
//                 initial={{ opacity: 0, scale: 0 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.6 }}
//               >
//                 <input type="radio" name='accordion' id="first" />
//                 <label htmlFor="first">What technologies and programming languages are you proficient in?</label>
//                 <div className="content">
//                   <div className="answer">
//                     <p>
//                       I am skilled in a range of technologies and programming languages relevant to web development. This includes:
//                     </p>
//                     <div className="groupList">
//                       <ol className="list">
//                         <li>HTML</li>
//                         <li>CSS</li>
//                         <li>Javascript</li>
//                       </ol>
//                       <div className="list">
//                         <li>Typescript</li>
//                         <li>NodeJs</li>
//                         <li>MySql</li>
//                       </div>
//                     </div>
//                     <p>And Framework Technologies as :</p>

//                     <div className="groupList">
//                       <ol className="list">
//                         <li>NextJs </li>
//                         <li>ReactJs</li>
//                         <li>ExpressJs</li>
//                       </ol>
//                       <ol className="list">
//                         <li>Sequelize</li>
//                         <li>MySql</li>
//                         <li>Linux</li>
//                       </ol>
//                       <ol className="list">
//                         <li>Nginx</li>
//                         <li>Git (vcs)</li>
//                         <li>Github</li>
//                       </ol>
//                       <ol className="list">
//                         <li>CI/CD</li>
//                         <li>Nginx</li>
//                         <li>PM2</li>
//                       </ol>
//                     </div>
//                     <p>
//                       as well as popular frameworks like ReactJS and Next.js for building dynamic and responsive user interfaces. I&apos;m also experienced in server-side programming using Node.js, and I&apos;m comfortable working with databases and APIs.
//                     </p>
//                   </div>
//                 </div>
//               </motion.li>

//               <motion.li
//                 initial={{ opacity: 0, scale: 0 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.6 }}
//               >
//                 <input type="radio" name='accordion' id="six" />
//                 <label htmlFor="six">What is your preferred development environment?</label>
//                 <div className="content">
//                   <div className="answer">
//                     I prefer working in a Linux environment, particularly Ubuntu. I find that Linux provides a stable and customizable platform for web development. I use code editors like Visual Studio Code to write and debug code efficiently. Additionally, I rely on version control systems like Git and GitHub to manage and collaborate on projects.
//                   </div>
//                 </div>
//               </motion.li>

//               <motion.li
//                 initial={{ opacity: 0, scale: 0 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.6 }}
//               >
//                 <input type="radio" name='accordion' id="four" />
//                 <label htmlFor="four">How do you approach problem-solving in your coding projects?</label>
//                 <div className="content">
//                   <div className="answer">
//                     I start by thoroughly understanding the requirements and breaking down the problem into smaller tasks. I research and explore potential solutions, leveraging online resources and documentation as needed. Testing and debugging are crucial stages, where I ensure the code is efficient and free of errors. I also seek feedback and collaborate with peers to arrive at optimal solutions.
//                   </div>
//                 </div>
//               </motion.li>
//             </ul>
//           </div>

//           <div className="box">
//             <ul className="accordion">

//               <motion.li
//                 initial={{ opacity: 0, scale: 0 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.6 }}
//               >
//                 <input type="radio" name='accordion' id="eight" />
//                 <label htmlFor="eight">How do you ensure the security of the websites you develop?</label>
//                 <div className="content">
//                   <div className="answer">
//                     Security is a top priority in my development process. I follow industry best practices to ensure websites are secure from common vulnerabilities. I use HTTPS to encrypt data transmission, sanitize user inputs to prevent SQL injection and cross-site scripting (XSS), and implement authentication and authorization mechanisms to control access to sensitive data. Regular updates, security patches, and staying informed about the latest security threats are essential aspects of my approach to web development.
//                   </div>
//                 </div>
//               </motion.li>

//               <motion.li
//                 initial={{ opacity: 0, scale: 0 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.6 }}
//               >
//                 <input type="radio" name='accordion' id="second" />
//                 <label htmlFor="second">How do you ensure responsive design and compatibility across devices?</label>
//                 <div className="content">
//                   <div className="answer">
//                     I use a mobile-first approach, where I design and style the website for mobile devices first and then gradually enhance it for larger screens. I utilize CSS media queries to adapt layouts and styles based on screen sizes, ensuring a seamless experience on various devices, including smartphones, tablets, and desktops.
//                   </div>
//                 </div>
//               </motion.li>

//               <motion.li
//                 initial={{ opacity: 0, scale: 0 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.6 }}
//               >
//                 <input type="radio" name='accordion' id="nine" />
//                 <label htmlFor="nine">What coding standards and practices do you follow?</label>
//                 <div className="content">
//                   <div className="answer">
//                     I believe in writing clean, maintainable, and efficient code. I adhere to coding standards such as proper indentation, consistent naming conventions, and meaningful comments. I also follow the DRY (Don&apos;t Repeat Yourself) principle to minimize code duplication. Additionally, I use version control (Git) to track changes, collaborate with others, and maintain a history of code revisions. I use ESLint to ensure code quality and consistency by catching common programming errors and enforcing coding standards.
//                   </div>
//                 </div>
//               </motion.li>
//             </ul>
//           </div>

//           <div className="box">
//             <ul className="accordion">

//               <motion.li
//                 initial={{ opacity: 0, scale: 0 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.6 }}
//               >
//                 <input type="radio" name='accordion' id="thrid" />
//                 <label htmlFor="thrid">Can you provide examples of projects you&apos;ve worked on?</label>
//                 <div className="content">
//                   <div className="answer">
//                     Certainly! Here are a couple of projects I&apos;ve worked on: <Link href={'/my-works'}>My Work <FontAwesomeIcon icon={faSquareArrowUpRight} /></Link>
//                   </div>
//                 </div>
//               </motion.li>

//               <motion.li
//                 initial={{ opacity: 0, scale: 0 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.6 }}
//               >
//                 <input type="radio" name='accordion' id="five" />
//                 <label htmlFor="five">Are you open to collaboration or freelance opportunities?</label>
//                 <div className="content">
//                   <div className="answer">
//                     Yes, I&apos;m open to both collaboration and freelance opportunities. If you have a project in mind or need assistance with web development tasks, feel free to reach out to me. You can contact me via email at <b>wandaazhar@gmail.com</b>
//                   </div>
//                 </div>
//               </motion.li>


//               <motion.li
//                 initial={{ opacity: 0, scale: 0 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.6 }}
//               >
//                 <input type="radio" name='accordion' id="seven" />
//                 <label htmlFor="seven">How can I get in touch with you?</label>
//                 <div className="content">
//                   <div className="answer">
//                     You can reach out to me through email at <b>wandaazhar@gmail.com</b>. I&apos;m always open to discussions, collaborations, and sharing insights related to web development.
//                   </div>
//                 </div>
//               </motion.li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default FaqComponent;



'use client';
import './faqComponent.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { faSquareArrowUpRight } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const FaqComponent: React.FC = () => {
  return (
    <section className="faq">
      <div className="wrapContainer">
        <div className="box-container">
          <div className="header">
            <motion.h1
              initial={{ opacity: 0, scale: 1, y: -100 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Frequently Asked Questions
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, scale: 1, y: 100 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Let me answer some of your questions.
            </motion.p>

            <div className="boxHeaderContainer">
              <motion.div
                initial={{ opacity: 0, scale: 1, x: -100 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="boxHeader boxHeader1"
              >
                you&apos;ll find answers to questions that potential employers,
                collaborators, and visitors often ask.
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 1, x: 100 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="boxHeader boxHeader2"
              >
                I&apos;m committed to transparency and open communication, and
                this FAQ page is designed to provide you with insights into my
                experience, approach, and values as a web developer.
              </motion.div>
            </div>
          </div>

          <div className="box">
            <ul className="accordion">
              <motion.li
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <input type="radio" name="accordion" id="first" />
                <label htmlFor="first">
                  What technologies and programming languages are you proficient in?
                </label>

                <div className="content">
                  <div className="answer">
                    <p>
                      I am skilled in a range of technologies and programming
                      languages relevant to web development. This includes:
                    </p>

                    <div className="groupList">
                      <ol className="list">
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                      </ol>

                      <ol className="list">
                        <li>TypeScript</li>
                        <li>PHP</li>
                        <li>Node.js</li>
                      </ol>
                    </div>

                    <p>And framework and infrastructure technologies such as:</p>

                    <div className="groupList">
                      <ol className="list">
                        <li>WordPress</li>
                        <li>Laravel</li>
                        <li>Next.js</li>
                      </ol>

                      <ol className="list">
                        <li>React.js</li>
                        <li>Express.js</li>
                        <li>MySQL</li>
                      </ol>

                      <ol className="list">
                        <li>Sequelize</li>
                        <li>Linux</li>
                        <li>Nginx</li>
                      </ol>

                      <ol className="list">
                        <li>Git (VCS)</li>
                        <li>GitHub</li>
                        <li>CI/CD</li>
                      </ol>

                      <ol className="list">
                        <li>PM2</li>
                        <li>REST API</li>
                      </ol>
                    </div>

                    <p>
                      I started my career with WordPress (2 years), then moved to
                      Laravel, React and Node.js, and now Next.js with TypeScript.
                      That path lets me pick the right tool for each project,
                      whether it&apos;s a client-managed WordPress site or a
                      custom web application.
                    </p>
                  </div>
                </div>
              </motion.li>

              <motion.li
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <input type="radio" name="accordion" id="ten" />
                <label htmlFor="ten">
                  Do you use AI tools in your development work?
                </label>

                <div className="content">
                  <div className="answer">
                    Yes. I use Claude, Claude Code, ChatGPT, Codex, and GitHub
                    Copilot every day to scaffold components, debug faster, write
                    documentation, and audit SEO. For example, I used Claude Code
                    to audit this portfolio&apos;s technical SEO, then moved
                    project and blog content to server rendering, fixed the
                    heading structure, and added structured data. AI speeds up
                    the busywork, but I make the decisions and review every line
                    before it ships.
                  </div>
                </div>
              </motion.li>

              <motion.li
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <input type="radio" name="accordion" id="six" />
                <label htmlFor="six">
                  What is your preferred development environment?
                </label>

                <div className="content">
                  <div className="answer">
                    I prefer working in a Linux environment, particularly Ubuntu.
                    I find that Linux provides a stable and customizable platform
                    for web development. I use code editors like Visual Studio
                    Code to write and debug code efficiently. Additionally, I
                    rely on version control systems like Git and GitHub to manage
                    and collaborate on projects.
                  </div>
                </div>
              </motion.li>

              <motion.li
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <input type="radio" name="accordion" id="four" />
                <label htmlFor="four">
                  How do you approach problem-solving in your coding projects?
                </label>

                <div className="content">
                  <div className="answer">
                    I start by thoroughly understanding the requirements and
                    breaking down the problem into smaller tasks. I research and
                    explore potential solutions, leveraging online resources and
                    documentation as needed. Testing and debugging are crucial
                    stages, where I ensure the code is efficient and free of
                    errors. I also seek feedback and collaborate with peers to
                    arrive at optimal solutions.
                  </div>
                </div>
              </motion.li>
            </ul>
          </div>

          <div className="box">
            <ul className="accordion">
              <motion.li
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <input type="radio" name="accordion" id="eight" />
                <label htmlFor="eight">
                  How do you ensure the security of the websites you develop?
                </label>

                <div className="content">
                  <div className="answer">
                    Security is a top priority in my development process. I
                    follow industry best practices to help protect websites from
                    common vulnerabilities. I use HTTPS to encrypt data
                    transmission, sanitize user inputs to reduce risks such as
                    SQL injection and cross-site scripting (XSS), and implement
                    authentication and authorization where needed. Regular
                    updates, security patches, and awareness of evolving threats
                    are essential parts of my workflow.
                  </div>
                </div>
              </motion.li>

              <motion.li
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <input type="radio" name="accordion" id="second" />
                <label htmlFor="second">
                  How do you ensure responsive design and compatibility across devices?
                </label>

                <div className="content">
                  <div className="answer">
                    I use a mobile-first approach, where I design and style the
                    website for mobile devices first and then gradually enhance
                    it for larger screens. I utilize CSS media queries to adapt
                    layouts and styles based on screen sizes, ensuring a
                    seamless experience on smartphones, tablets, and desktops.
                  </div>
                </div>
              </motion.li>

              <motion.li
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <input type="radio" name="accordion" id="nine" />
                <label htmlFor="nine">
                  What coding standards and practices do you follow?
                </label>

                <div className="content">
                  <div className="answer">
                    I believe in writing clean, maintainable, and efficient code.
                    I follow consistent naming conventions, clear structure, and
                    readable formatting. I also apply the DRY principle to reduce
                    duplication, use Git for version control, and rely on linting
                    tools such as ESLint to help maintain code quality and
                    consistency.
                  </div>
                </div>
              </motion.li>
            </ul>
          </div>

          <div className="box">
            <ul className="accordion">
              <motion.li
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <input type="radio" name="accordion" id="third" />
                <label htmlFor="third">
                  Can you provide examples of projects you&apos;ve worked on?
                </label>

                <div className="content">
                  <div className="answer">
                    Certainly. You can explore several of my featured projects on{' '}
                    <Link href="/my-works">
                      My Works <FontAwesomeIcon icon={faSquareArrowUpRight} />
                    </Link>
                    .
                  </div>
                </div>
              </motion.li>

              <motion.li
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <input type="radio" name="accordion" id="five" />
                <label htmlFor="five">
                  Are you open to collaboration or freelance opportunities?
                </label>

                <div className="content">
                  <div className="answer">
                    Yes, I&apos;m open to collaboration and freelance
                    opportunities. If you have a project in mind or need help
                    with web development work, feel free to reach out to me at{' '}
                    <b>wandaazhar@gmail.com</b>.
                  </div>
                </div>
              </motion.li>

              <motion.li
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <input type="radio" name="accordion" id="seven" />
                <label htmlFor="seven">How can I get in touch with you?</label>

                <div className="content">
                  <div className="answer">
                    You can reach me via email at <b>wandaazhar@gmail.com</b>.
                    I&apos;m always open to discussions, collaboration, and
                    sharing ideas related to web development.
                  </div>
                </div>
              </motion.li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqComponent;