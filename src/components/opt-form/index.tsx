import React from 'react';
import {
  Container, Input, Button, Text,
} from './styles/optFormStyle';

export const OptForm = ({ children, ...restProps }: { children: any }) => (
  <Container {...restProps}>
    {children}
  </Container>
);

OptForm.Text = ({ children, ...restProps }: { children: any }) => (
  <Text {...restProps}>{children}</Text>
);

OptForm.Input = ({ ...restProps }) => (
  <Input {...restProps} />
);

OptForm.Button = ({ children, ...restProps }: { children: any }) => (
  <Button {...restProps}>
    {children}
    <img src="../images/icons/chevron-right.png" alt="search" />
  </Button>
);
