import React from 'react';
import { JumbotronContainer } from '../containers/JumbotronContainer';
import { FooterContainer } from '../containers/FooterContainer';
import { AccordionContainer } from '../containers/AccordionContainer';

export const Home:React.FC = () => (
  <>
    <JumbotronContainer />
    <FooterContainer />
    <AccordionContainer />
  </>
);
