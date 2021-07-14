import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  border-bottom: 8px solid #222;
`;

export const Inner = styled.div`
  display: flex;
  padding: 70px 45px;
  flex-direction: column;
  max-width: 750px;
  margin: auto;
`;

export const Title = styled.div`
  font-size: 50px;
  line-height: 1.1;
  margin-top: 0;
  margin-bottom: 8px;
  color: white;
  text-align: center;
  @media (max-width: 600px) {
    font-size: 35px;
  }
`;

export const Item = styled.div`
  color: white;
  margin: auto auto 10px;
  max-width: 670px;
  width: 100%;

  &:first-of-type {
    margin-top: 3em;
  }

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  margin-bottom: 1px;
  font-size: 26px;
  font-weight: normal;
  background: #303030;
  padding: 0.8em 1.2em 0.8em 1.2em;
  user-select: none;
  align-items: center;

  img {
    filter: brightness(0) invert(1);
    width: 24px;
    user-select: none;
    @media (max-width: 600px) {
      width: 16px;
    }
  }

  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

export const Body = styled.div`
  font-size: 26px;
  font-weight: normal;
  line-height: normal;
  background: #303030;
  white-space: pre-wrap;
  user-select: none;
  overflow: hidden;
  max-width: 628px;
  box-sizing: border-box;
  padding: 30px;
  transition: 0.25s cubic-bezier(0.5, 0, 0.1, 1);
  @media (max-width: 600px) {
    font-size: 16px;
    line-height: 22px;
  }
`;
