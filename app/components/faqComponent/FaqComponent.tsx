'use client'
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
          <motion.div
            initial={{ opacity: 1, scale: 1, y: -100 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="header">
            <h1>Frequently Asked Questions</h1>
            <p>Let me answer some of your questions.</p>
          </motion.div>
          <div className="box">
            <ul className="accordion">
              <motion.li
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <input type="radio" name='accordion' id="first" />
                <label htmlFor="first">What are your operating hours?</label>
                <div className="content">
                  <p>
                    Our operating hours are (<b>Monday to Saturday 11:00AM - 2:30PM, and 04:00PM - 09:00PM</b>). (<b>Sunday 04:00PM - 09:00PM</b>). We're open 7 days of the week for lunch and dinner, so you can satisfy your hibachi cravings at your convenience.
                  </p>
                </div>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <input type="radio" name='accordion' id="second" />
                <label htmlFor="second">Do you offer delivery?</label>
                <div className="content">
                  <p>Unfortunately, We don't offer delivery.</p>
                </div>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <input type="radio" name='accordion' id="thrid" />
                <label htmlFor="thrid">Is the food cooked in front of the guests?</label>
                <div className="content">
                  <p>Unfortunately, We don't cook in front of guests</p>
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
                <input type="radio" name='accordion' id="four" />
                <label htmlFor="four">What are your operating hours?</label>
                <div className="content">
                  <p>
                    Our operating hours are (<b>Monday to Saturday 11:00AM - 2:30PM, and 04:00PM - 09:00PM</b>). (<b>Sunday 04:00PM - 09:00PM</b>). We're open 7 days of the week for lunch and dinner, so you can satisfy your hibachi cravings at your convenience.
                  </p>
                </div>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <input type="radio" name='accordion' id="five" />
                <label htmlFor="five">Do you offer delivery?</label>
                <div className="content">
                  <p>Unfortunately, We don't offer delivery.</p>
                </div>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <input type="radio" name='accordion' id="six" />
                <label htmlFor="six">Is the food cooked in front of the guests?</label>
                <div className="content">
                  <p>Unfortunately, We don't cook in front of guests</p>
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
                <input type="radio" name='accordion' id="seven" />
                <label htmlFor="seven">What are your operating hours?</label>
                <div className="content">
                  <p>
                    Our operating hours are (<b>Monday to Saturday 11:00AM - 2:30PM, and 04:00PM - 09:00PM</b>). (<b>Sunday 04:00PM - 09:00PM</b>). We're open 7 days of the week for lunch and dinner, so you can satisfy your hibachi cravings at your convenience.
                  </p>
                </div>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <input type="radio" name='accordion' id="eight" />
                <label htmlFor="eight">Do you offer delivery?</label>
                <div className="content">
                  <p>Unfortunately, We don't offer delivery.</p>
                </div>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <input type="radio" name='accordion' id="nine" />
                <label htmlFor="nine">Is the food cooked in front of the guests?</label>
                <div className="content">
                  <p>Unfortunately, We don't cook in front of guests</p>
                </div>
              </motion.li>
            </ul>
          </div>
          {/* <div className="all-faq">
            <Link href="/faq">
              <p>See All Faq's <FontAwesomeIcon icon={faSquareArrowUpRight} className="icon" /></p>
            </Link>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default FaqComponent;