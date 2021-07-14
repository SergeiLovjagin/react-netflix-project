import React from 'react';
import {
  Container, Image, Inner, Item, Pane, SubTitle, Title,
} from './styles/jumbotronStyle';

type JumbotronProps = {
  children: any
  direction: string
}

export const Jumbotron = ({ children, direction = 'row', ...restProps }: JumbotronProps): JSX.Element => (
  <Item {...restProps}>
    <Inner direction={direction}>
      {children}
    </Inner>
  </Item>
);

Jumbotron.Container = ({ children, ...restProp }: { children: JSX.Element | JSX.Element[] | string }): JSX.Element => <Container {...restProp}>{children}</Container>;

Jumbotron.Pane = ({ children, ...restProp }: { children: JSX.Element | JSX.Element[] | string }): JSX.Element => <Pane {...restProp}>{children}</Pane>;

Jumbotron.Title = ({ children, ...restProp }: { children: JSX.Element | JSX.Element[] | string }): JSX.Element => <Title {...restProp}>{children}</Title>;

Jumbotron.SubTitle = ({ children, ...restProp }: { children: JSX.Element | JSX.Element[] | string }): JSX.Element => <SubTitle {...restProp}>{children}</SubTitle>;

Jumbotron.Image = ({ children, ...restProp }: any) => <Image {...restProp}>{children}</Image>;
