import { Header } from '../components';
import * as ROUTE from '../constans/routes';
import logo from '../logo.svg';

export const HeaderContainer = ({ children, ...restProps }: { children: any }) => (
  <Header bg src="" {...restProps} dontShowOnSmallViewPort>
    <Header.Container>
      <Header.Logo to={ROUTE.HOME} alt="Netflix" src={logo} />
      <Header.ButtonLink to={ROUTE.SIGN_IN}>Sign In</Header.ButtonLink>
    </Header.Container>
    {children}
  </Header>
);
