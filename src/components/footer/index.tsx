import {
  Column, Container, Link, Row, Text, Title, Break,
} from './styles/footerStyle';

export const Footer = ({ children, ...restProps }: { children: any, }) => (
  <Container {...restProps}>{children}</Container>
);

Footer.Row = ({ children, ...restProps }: { children: any, }) => (
  <Row {...restProps}>{children}</Row>
);

Footer.Column = ({ children, ...restProps }: { children: any, }) => (
  <Column {...restProps}>{children}</Column>
);

Footer.Link = ({ children, ...restProps }: any) => (
  <Link {...restProps}>{children}</Link>
);

Footer.Title = ({ children, ...restProps }: { children: any, }) => (
  <Title {...restProps}>{children}</Title>
);

Footer.Text = ({ children, ...restProps }: { children: any, }) => (
  <Text {...restProps}>{children}</Text>
);

Footer.Break = ({ ...restProps }) => (
  <Break {...restProps} />
);
