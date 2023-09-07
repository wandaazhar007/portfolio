import Accomplishments from './components/accomplishments/Accomplishments'
import Biodata from './components/biodata/Biodata'
import Certifications from './components/certifications/Certifications'
import Educations from './components/educations/Educations'
import Experiences from './components/experiences/Experiences'
import Headline from './components/headline/Headline'
import Hero from './components/hero/Hero'
import WorkExperiences from './components/workExperiences/WorkExperiences'

export default function Home() {
  return (
    // <Hero />
    <section className="home">
      <div className="wrapContainer">
        <div className="sectionContainer">
          <Headline />
          <Experiences />
          <Accomplishments />
          <WorkExperiences />
          <Educations />
          <Certifications />
          <Biodata />

        </div>
      </div>
    </section>
  )
}
