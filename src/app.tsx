import React from 'react';
import { AccordionContainer } from './containers/AccordionContainer';
import { FooterContainer } from './containers/FooterContainer';
import { JumbotronContainer } from './containers/JumbotronContainer';

export const App: React.FC = () => (
  <>
    <JumbotronContainer />
    <FooterContainer />
    <AccordionContainer />
  </>
);
