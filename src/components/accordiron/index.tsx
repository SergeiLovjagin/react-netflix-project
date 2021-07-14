import React, { createContext, useContext, useState } from 'react';
import {
  Body, Container, Header, Inner, Item, Title,
} from './styles/accordionStyle';

const ToggleContext = createContext<{ toggleShow: boolean; setToggleShow: React.Dispatch<React.SetStateAction<boolean>> }>({ toggleShow: false, setToggleShow: (value) => value });

export const Accordion = ({ children, ...restProps }: { children: any }) => (
  <Container {...restProps}>
    <Inner>{children}</Inner>
  </Container>
);

Accordion.Title = ({ children, ...restProps }: { children: any, }) => (
  <Title {...restProps}>{children}</Title>
);

Accordion.Item = ({ children, ...restProps }: { children: any, }) => {
  const [toggleShow, setToggleShow] = useState(false);
  return (
    <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
      <Item {...restProps}>{children}</Item>
    </ToggleContext.Provider>
  );
};

Accordion.Header = ({ children, ...restProps }: { children: any, }) => {
  const { toggleShow, setToggleShow } = useContext(ToggleContext);

  return (
    <Header onClick={() => setToggleShow((state) => !state)} {...restProps}>
      {children}
      {toggleShow ? (
        <img src="/images/icons/close.png" alt="Close" />
      ) : (
        <img src="/images/icons/add.png" alt="Open" />
      )}
    </Header>
  );
};

Accordion.Body = ({ children, ...restProps }: { children: any, }) => {
  const { toggleShow } = useContext(ToggleContext);

  return toggleShow ? (
    <Body {...restProps}>
      {children}
    </Body>
  ) : null;
};
