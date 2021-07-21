import React, { useState } from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import {
  Background, ButtonLink, Container, Dropdown, Feature, FeatureCallOut, Group, Link, Logo, Picture, Profile, Text, Search, SearchIcon, SearchInput,
} from './styles/headerStyle';

export const Header = (
  {
    bg = true, dontShowOnSmallViewPort, children, ...restProps
  }: { children: any; bg: boolean; src: string, dontShowOnSmallViewPort: boolean },
) => (
  bg ? (
    <Background {...restProps} src={restProps.src} dontShowOnSmallViewPort={dontShowOnSmallViewPort}>{children}</Background>
  ) : children
);

Header.Container = ({ children, ...restProps }: { children: any }) => (
  <Container {...restProps}>{children}</Container>
);

Header.Group = ({ children, ...restProps }: { children: any }) => (
  <Group {...restProps}>{children}</Group>
);

Header.Feature = ({ children, ...restProps }: { children: any }) => (
  <Feature {...restProps}>{children}</Feature>
);

Header.FeatureCallOut = ({ children, ...restProps }: { children: any }) => (
  <FeatureCallOut {...restProps}>{children}</FeatureCallOut>
);
Header.Logo = ({ ...restProps }: { to: string; alt: string; src: string }) => (
  <ReactRouterLink to={restProps.to}><Logo {...restProps} /></ReactRouterLink>
);
Header.Link = (
  {
    active, children, onClick, ...restProps// eslint-disable-next-line react/require-default-props
  }: { children: any, active: string, onClick?: () => void },
) => (
  <Link {...restProps} active={active}>{children}</Link>
);
Header.Text = ({ children, ...restProps }: { children: any }) => (
  <Text {...restProps}>{children}</Text>
);

Header.Profile = ({ children, ...restProps }: { children: any }) => (
  <Profile {...restProps}>{children}</Profile>
);

Header.Picture = ({ src, ...restProps }: { src: string | null }) => (
  <Picture {...restProps} src={`/images/users/${src}.png`} />
);

Header.ButtonLink = ({ children, ...restProps }: { children: any, to: string }) => (
  <ButtonLink {...restProps}>{children}</ButtonLink>
);

Header.Dropdown = ({ children, ...restProps }: { children: any }) => (
  <Dropdown {...restProps}>{children}</Dropdown>
);

Header.Search = ({ searchTerm, setSearchTerm, ...restProps }: { searchTerm: string, setSearchTerm: (value: any) => void }) => {
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
