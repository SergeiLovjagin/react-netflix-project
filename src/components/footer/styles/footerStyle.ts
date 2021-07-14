import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  padding: 70px 80px;
  margin: auto;
  max-width: 1100px;
  width: 100%;
  flex-direction: column;
  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
  grid-gap: 15px;
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const Link = styled.a`
  color: #757575;
  font-size: 13px;
  margin-bottom: 20px;
  text-decoration: none;
`;

export const Title = styled.p`
  font-size: 16px;
  color: #757575;
  margin-bottom: 40px;
`;

export const Text = styled.p`
  font-size: 13px;
  color: #757575;
  margin-bottom: 40px;
`;

export const Break = styled.div`
  flex-basis: 100%;
  min-height: 10px;
`;
