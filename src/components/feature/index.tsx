import { Container, SubTitle, Title } from './styles/featureStyle';

export const Feature = ({ children, ...restProps }: { children: any }) => (
  <Container {...restProps}>
    {children}
  </Container>
);

Feature.Title = ({ children, ...restProps }: { children: any }) => (
  <Title {...restProps}>
    {children}
  </Title>
);

Feature.SubTitle = ({ children, ...restProps }: { children: any }) => (
  <SubTitle {...restProps}>
    {children}
  </SubTitle>
);
