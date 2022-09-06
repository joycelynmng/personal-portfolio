import { experience } from '../../constants/constants';
import { Section } from '../../styles/GlobalComponents';
import { GridContainer, Top, HeaderFour, Container, BigContainer, Icons} from '../../styles/Resume.styled'
import { AiOutlineRead } from 'react-icons/ai';

const Experiences = () => {
  return (
   <Section>
       <GridContainer>
                <Icons href="./experiences">
                  <AiOutlineRead size="3rem"/>
                </Icons>
            {experience.map(({id, jobTitle, company, date}) => (
              <BigContainer key={id}>
                <Top>
                    <HeaderFour jobTitle>{jobTitle}</HeaderFour>
                </Top>
                <Container>{company}</Container>
                <Container>{date}</Container>
              </BigContainer>
            ))}
       </GridContainer>
   </Section>
  )
}

export default Experiences