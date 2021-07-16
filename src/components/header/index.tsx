import { Link as ReactRouterLink } from 'react-router-dom';
import {
  BackGround, Container, ButtonLink, Logo,
} from './styles/headerStyle';

export const Header = ({ bg = true, children, ...restProps }: { children: any; bg: boolean; src: string }) => (
  bg ? (
    <BackGround {...restProps} src={restProps.src}>
      {children}
    </BackGround>
  ) : children
);

Header.Container = ({ children, ...restProps }: { children: any }) => (
  <Container {...restProps}>
    {children}
  </Container>
);

Header.Logo = ({ ...restProps }: { to: string; alt: string; src: string }) => (
  <ReactRouterLink to={restProps.to}>
    <Logo {...restProps} />
  </ReactRouterLink>
);

Header.ButtonLink = ({ children, ...restProps }: { children: any, to: string }) => (
  <ButtonLink {...restProps}>
    {children}
  </ButtonLink>
);
