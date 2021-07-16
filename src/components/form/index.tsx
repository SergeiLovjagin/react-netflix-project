import {
  Container, Base, Error, Title, Text, TextSmall, Link, Input, Submit,
} from './styles/formStyle';

export const Form = ({ children, ...restProps }: { children: any }) => (
  <Container {...restProps}>{children}</Container>
);

Form.Base = ({ children, ...restProps }: any) => (
  <Base {...restProps}>{children}</Base>
);

Form.Error = ({ children, ...restProps }: { children: any }) => (
  <Error {...restProps}>{children}</Error>
);

Form.Title = ({ children, ...restProps }: { children: any }) => (
  <Title {...restProps}>{children}</Title>
);

Form.Input = ({ ...restProps }) => (
  <Input {...restProps} />
);
Form.Submit = ({ children, ...restProps }: any) => (
  <Submit {...restProps}>{children}</Submit>
);

Form.Text = ({ children, ...restProps }: { children: any }) => (
  <Text {...restProps}>{children}</Text>
);

Form.TextSmall = ({ children, ...restProps }: { children: any }) => (
  <TextSmall {...restProps}>{children}</TextSmall>
);

Form.Link = ({ to, children, ...restProps }: { children: any, to: string }) => (
  <Link to={to} {...restProps}>{children}</Link>
);
