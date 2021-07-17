import React from 'react';
import { JumbotronContainer } from '../containers/JumbotronContainer';
import { FooterContainer } from '../containers/FooterContainer';
import { AccordionContainer } from '../containers/AccordionContainer';
import { HeaderContainer } from '../containers/HeaderContainer';
import { Feature, OptForm } from '../components';

export const Home: React.FC = () => (
  <>
    <HeaderContainer>
      <Feature>
        <Feature.Title>Unlimited movies, TV shows, and more.</Feature.Title>
        <Feature.SubTitle>Ready to watch? Enter your email to create or restart your membership.</Feature.SubTitle>
        <OptForm>
          <OptForm.Input placeholder="Email address" />
          <OptForm.Button>
            Get Started
          </OptForm.Button>
        </OptForm>
      </Feature>

    </HeaderContainer>
    <JumbotronContainer />

    <AccordionContainer />
    <FooterContainer />
  </>
);
