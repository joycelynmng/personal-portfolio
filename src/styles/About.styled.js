import styled from "styled-components";

// Email Links
export const EmailLink = styled.a`
  max-width: 800px;
  font-weight: 300;
  font-size: 18px;
  line-height: 32px;
  padding-bottom: 20px;
  color: rgba(85, 67, 54, 0.8);
  transition: 0.4s ease;
  &:hover {
    color: #7d6655;
    opacity: 1;
    cursor: pointer;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 672px;
    font-size: 16px;
    line-height: 25px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 14px;
    line-height: 22px;
    padding-bottom: 16px;
  }
`;

export const RightAlignSubText = styled.p`
  max-width: 800px;
  font-weight: 300;
  font-size: 18px;
  line-height: 32px;
  color: rgba(87, 67, 54, 0.8);
  text-align: justify;
  display: inline-block;
  margin-right: auto;
  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 672px;
    font-size: 16px;
    line-height: 25px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 14px;
    line-height: 22px;
  }
`;

export const InLine = styled.p`
  display: inline-block;
  padding-right: 20px;
  padding-bottom: 20px;
`;

export const CenterAlignSubText = styled.p`
  max-width: 900px;
  font-weight: 300;
  font-size: 18px;
  line-height: 32px;
  color: rgba(87, 67, 54, 0.8);
  text-align: justify;
  display: inline-block;
  width: 100% @media ${(props) => props.theme.breakpoints.md} {
    max-width: 672px;
    font-size: 16px;
    line-height: 25px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 14px;
    line-height: 22px;
  }
`;

export const Block = styled.div`
  color: rgba(87, 67, 54, 0.8);
`
