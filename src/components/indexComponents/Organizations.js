import { organizations } from '../../constants/constants';
import { Section } from '../../styles/GlobalComponents';
import { GridContainer, Top, HeaderFour, Container, BigContainer, Icons} from '../../styles/Resume.styled'
import { AiOutlineRead } from 'react-icons/ai';

const Organizations = () => {
  return (
   <Section>
       <GridContainer>
                <Icons href="./orgs">
                  <AiOutlineRead size="3rem"/>
                </Icons>
            {organizations.map(({id, role, org, date}) => (
              <BigContainer key={id}>
                <Top>
                    <HeaderFour>{role}</HeaderFour>
                </Top>
                <Container>{org}</Container>
                <Container>{date}</Container>
              </BigContainer>
            ))}
       </GridContainer>
   </Section>
  )
}

export default Organizations