import {
  Container, Title, List, Item, Picture, Name,
} from './styles/profileStyle';

export const Profile = ({ children, ...restProps }: { children: any }) => (
  <Container {...restProps}>
    {children}
  </Container>
);

Profile.Title = ({ children, ...restProps }: { children: any }) => (
  <Title {...restProps}>
    {children}
  </Title>
);

Profile.List = ({ children, ...restProps }: { children: any }) => (
  <List {...restProps}>
    {children}
  </List>
);

Profile.Item = ({ children, ...restProps }: any) => (
  <Item {...restProps}>
    {children}
  </Item>
);

Profile.Picture = ({ src, ...restProps }: { src: string | null | undefined }) => (
  <Picture {...restProps} src={src ? `/images/users/${src}.png` : '/images/misc/loading.gif'} />
);

Profile.Name = ({ children, ...restProps }: { children: any }) => (
  <Name {...restProps}>
    {children}
  </Name>
);
