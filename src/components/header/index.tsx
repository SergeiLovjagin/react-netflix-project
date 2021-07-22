import React, { ReactElement, useState } from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import {
  Background,
  ButtonLink,
  Container,
  Dropdown,
  Feature,
  FeatureCallOut,
  Group,
  Link,
  Logo,
  Picture,
  PlayButton,
  Profile,
  Search,
  SearchIcon,
  SearchInput,
  Text,
} from './styles/headerStyle';

type WithChildren = {
  // eslint-disable-next-line react/require-default-props
  children?: React.ReactNode
};

export const Header = (
  {
    bg = true, dontShowOnSmallViewPort, children, ...restProps
  }:
    { children: any, bg: boolean; src: string, dontShowOnSmallViewPort: boolean },
) => (
  bg ? (
    <Background {...restProps} src={restProps.src} dontShowOnSmallViewPort={dontShowOnSmallViewPort}>{children}</Background>
  ) : children
);

Header.Container = ({ children, ...restProps }: WithChildren) => (
  <Container {...restProps}>{children}</Container>
);

Header.Group = ({ children, ...restProps }: WithChildren) => (
  <Group {...restProps}>{children}</Group>
);

Header.Feature = ({ children, ...restProps }: WithChildren) => (
  <Feature {...restProps}>{children}</Feature>
);

Header.FeatureCallOut = ({ children, ...restProps }: WithChildren) => (
  <FeatureCallOut {...restProps}>{children}</FeatureCallOut>
);
Header.Logo = ({ to, ...restProps }: React.ImgHTMLAttributes<HTMLImageElement> & { to: string }) => (
  <ReactRouterLink to={to}>
    <Logo {...restProps} />
  </ReactRouterLink>
);

Header.Link = ({ children, active, ...restProps }: WithChildren & { active: string, onClick: () => void }) => {
  return <Link {...restProps} active={active}>{children}</Link>;
};

Header.Text = ({ children, ...restProps }: WithChildren) => (
  <Text {...restProps}>{children}</Text>
);

Header.Profile = ({ children, ...restProps }: WithChildren) => (
  <Profile {...restProps}>{children}</Profile>
);

Header.Picture = ({ src, ...restProps }: React.HtmlHTMLAttributes<HTMLButtonElement> & { src: string | null }) => (
  <Picture {...restProps} src={`/images/users/${src}.png`} />
);

Header.ButtonLink = ({ children, ...restProps }: WithChildren & { to: string }) => (
  <ButtonLink {...restProps}>{children}</ButtonLink>
);

Header.PlayButton = ({ children, ...restProps }: WithChildren) => (
  <PlayButton {...restProps}>{children}</PlayButton>
);

Header.Dropdown = ({ children, ...restProps }: WithChildren) => (
  <Dropdown {...restProps}>{children}</Dropdown>
);

Header.Search = ({ searchTerm, setSearchTerm }: { searchTerm: string, setSearchTerm: (value: string) => void }) => {
  const [active, setActive] = useState(false);
  return (
    <Search>
      <SearchIcon onClick={() => setActive((state) => !state)}>
        <img src="/images/icons/search.png" alt="Search" />
      </SearchIcon>
      <SearchInput
        value={searchTerm}
        onChange={({ target }) => setSearchTerm(target.value)}
        active={active}
        placeholder="Search films and series"
      />
    </Search>
  );
};
