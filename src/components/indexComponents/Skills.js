import { DiFirebase, DiReact} from 'react-icons/di';
import { BiGitBranch } from 'react-icons/bi';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from '../../styles/Skills.styled';

const Skills = () =>  (
  <Section id="skills">
      <SectionDivider />
      <br/>
      <SectionTitle>Skills</SectionTitle>
      <SectionText>
          Technical Skills:
      </SectionText>
      <List>
        <ListItem>
            <DiReact size="3rem" />
            <ListContainer>
              <ListTitle>Front-End</ListTitle>
              <ListParagraph>
                Experience with React.js<br/>
                 and Next.js
              </ListParagraph>
            </ListContainer>
        </ListItem>
        <ListItem>
            <DiFirebase size="3rem" />
            <ListContainer>
              <ListTitle>Back-End</ListTitle>
              <ListParagraph>
                Experience with Node,<br/>
                 Python, and C++
              </ListParagraph>
            </ListContainer>
        </ListItem>
        <ListItem>
            <BiGitBranch size="3rem" />
            <ListContainer>
              <ListTitle>Technologies</ListTitle>
              <ListParagraph>
                Experience with<br/>
                 Git and VS Code
              </ListParagraph>
            </ListContainer>
        </ListItem>
      </List>
  </Section>

);

export default Skills;