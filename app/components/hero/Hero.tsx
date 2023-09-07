'use client'
import './hero.scss';
import Headline from '../headline/Headline';
import Experiences from '../experiences/Experiences';
import Accomplishments from '../accomplishments/Accomplishments';
import WorkExperiences from '../workExperiences/WorkExperiences';
import Educations from '../educations/Educations';
import Certifications from '../certifications/Certifications';
import Biodata from '../biodata/Biodata';
const Hero: React.FC = () => {
  return (
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
  );
}

export default Hero;