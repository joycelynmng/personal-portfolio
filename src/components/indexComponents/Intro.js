import { Section, SectionText, SectionTitle, SectionSubText} from '../../styles/GlobalComponents';
import { LeftSection } from '../../styles/Intro.styled';
import moreStyles from '../../styles/additionalStyles.module.css'

const Intro = (props) => (
  <Section row className={moreStyles.backgroundColor}>
      <LeftSection>
          <SectionTitle main center>
              Hi I'm Joycelyn
          </SectionTitle>
          <SectionText>
            Aspiring Software Engineer / Product Manager
          </SectionText>
          <SectionSubText className={moreStyles.addPaddingIntro}>
            Cognitive Science @ UCLA |
            Specialization in computing |
            Data Science and Engineering Minor
          </SectionSubText>
      </LeftSection>
  </Section>
);

export default Intro;