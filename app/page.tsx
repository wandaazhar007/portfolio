import Accomplishments from './components/accomplishments/Accomplishments'
import Biodata from './components/biodata/Biodata'
import Certifications from './components/certifications/Certifications'
import Experiences from './components/experiences/Experiences'
import Headline from './components/headline/Headline'
import HeadlineTwo from './components/headlineTwo/HeadlineTwo'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Web Development Services | Wanda Azhar | Canton, Michigan',
  description: 'Expert web development services by Wanda Azhar, building responsive, user-friendly websites. Learn more about my services and expertise.',
}

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
  )
}
