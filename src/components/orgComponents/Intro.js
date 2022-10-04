import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { LeftSection } from '../../styles/Intro.styled';
import moreStyles from '../../styles/additionalStyles.module.css'

const Intro = (props) => (
  <Section row id="experience" className={moreStyles.backgroundColor}>
      <LeftSection>
          <SectionTitle main center>
              Organizations
          </SectionTitle>
      </LeftSection>
  </Section>
);

export default Intro;