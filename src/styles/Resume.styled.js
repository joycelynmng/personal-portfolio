import styled from 'styled-components';

export const GridContainer = styled.section`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
padding: 3rem;
place-items: center;
column-gap: 2rem;
row-gap: 3rem;
@media ${(props) => props.theme.breakpoints.sm} {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  padding-bottom: 0;
}
`
export const Top = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;
`;


export const HeaderFour = styled.h4`
  font-weight: 500;
  text-align: center;
  color: #574336;
  font-size: ${(props) => props.title ? '3rem' : '2rem'};
`;

export const Container = styled.p`
  width: 100%;
  padding: 0 50px;
  color: #574336;
  font-style: 2rem;
  line-height: 24px;
  text-align: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding:.3rem
  
}
`;

export const BigContainer = styled.div`
 color: #574336
`;

export const Icons = styled.a`
transition: 0.3s ease;
color: #b1bca0;
border-radius: 50px;
&:hover {
    transform: scale(1.2);
    cursor: pointer;
  }
`