import Link from 'next/link';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from '../../styles/Header.styled';
import moreStyles from '../../styles/additionalStyles.module.css'

const Header = () =>  (
    <Container>
        <Div1>
            <Link href="/">
                <a className={moreStyles.forHeader}>
                    <Span>Joycelyn Ng Portfolio</Span>
                </a>
            </Link>
        </Div1>
        <Div2>
            <li>
                <Link href='./'>
                    <NavLink>Home</NavLink>
                </Link>
            </li>
            <li>
                <Link href='./experiences'>
                    <NavLink>Experience</NavLink>
                </Link>
            </li>
            <li>
                <Link href='#orgs'>
                    <NavLink>Organizations</NavLink>
                </Link>
            </li>
        </Div2>
        <Div3>
            <SocialIcons href="https://github.com/joycelynmng">
                <AiFillGithub size="3rem"/>
            </SocialIcons>
            <SocialIcons href="https://www.linkedin.com/in/joycelynmng/">
                <AiFillLinkedin size="3rem"/>
            </SocialIcons>
        </Div3>
    </Container>
);

export default Header;