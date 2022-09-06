import { Section, SectionDivider, SectionTitle, SectionText, SubSectionTitle} from '../../styles/GlobalComponents';
import Button from "../../styles/GlobalComponents/button";
import Experiences from "./Experiences"
import Organizations from "./Organizations"


const Resume = () => {
  return (
    <Section id="resume">
      <SectionDivider />
      <br />
      <SectionTitle>Resume</SectionTitle>
      <SectionText>Download Resume:</SectionText>
      <Button onClick={() => window.location = "https://docs.google.com/document/d/1DkCRuR3qdaeZCHd3xMiOmPwiUVRULie7qpBiN2-HLW4/export?format=pdf" }>Resume</Button>
      <br/>
      <SubSectionTitle>Experiences:</SubSectionTitle>
      <Experiences/>
      <SubSectionTitle>Organizations:</SubSectionTitle>
      <Organizations/>
    </Section>
  )
}

export default Resume