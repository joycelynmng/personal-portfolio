import styled from 'styled-components';

export const GridContainer = styled.section`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
place-items: center;
column-gap: 2rem;
row-gap: 2rem;
@media ${(props) => props.theme.breakpoints.sm} {
  display: flex;
  flex-direction: column;
  padding-bottom: 30px;
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
  margin: auto;
  color: #574336;
  font-size: ${(props) => props.title ? '3rem' : '2rem'};
`;

export const Container = styled.p`
  width: 100%;
  padding: 0 50px;
  margin: auto;
  color: #574336;
  font-style: 2rem;
  line-height: 24px;
  text-align: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    margin: auto;
  
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