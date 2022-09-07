import { Section, SectionDivider, SectionTitle, SectionText } from '../../styles/GlobalComponents';
import { EmailLink, RightAlignSubText, InLine, CenterAlignSubText, Block} from '../../styles/About.styled';
import Profilepic from './ProfilePic'
import Button from "../../styles/GlobalComponents/button";

const About = () => {
  return (
    <Section id="about">
        <SectionDivider />
        <br/>
        <SectionTitle>About Me</SectionTitle>
        <Block>
          <InLine><Profilepic/></InLine>
        <RightAlignSubText>
        Hi! My name is Joycelyn. I am currently a third year
        student at UCLA pursing a degree in Cognitive Science
        with a specialization in computing and also a Data Science and Engineering Minor.
        I am fascinated by the different
        aspects of computer science, psychology, and statistics. 
        I am an avid learner and a resourceful achiever. I continuously 
        seek new information and challenge myself to learn something new 
        every day. I continually implement these new pieces of information 
        into my work every day in order to produce the most effective results. 
        My goals revolve around
        continuing to grow and learn new skills within these industries.
        </RightAlignSubText>
        </Block>
        <br/>
        <CenterAlignSubText>
            Please feel free to contact me if you would like to discuss
            potential opportunities or if you would just like to chat!
        </CenterAlignSubText>
        <br />
        <SectionText>Email:</SectionText>
        <EmailLink>joycelynng@ucla.edu</EmailLink>
        <Button onClick={() => window.location = "mailto:joycelynng@ucla.edu" }>Send Email</Button>

    </Section>
  )
}

export default About