import React, { useState } from 'react';
import { Form } from '../components';
import * as ROUTE from '../constans/routes';

export const FormContainer = () => {
  const [emailAddress, setEmailAddress] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    // Firebase
  };

  const isValid = emailAddress === '' || password === '';

  return (
    <Form>
      <Form.Title>Sign In </Form.Title>
      {error && <Form.Error>{error}</Form.Error>}
      <Form.Base onSubmit={handleSubmit} method="POST">
        <Form.Input
          placeholder="Email or phone number"
          value={emailAddress}
          onChange={({ target }: { target: HTMLInputElement }) => setEmailAddress(target.value)}
        />
        <Form.Input
          placeholder="Password"
          value={password}
          onChange={({ target }: { target: HTMLInputElement }) => setPassword(target.value)}
          autoComplete={false}
          type="password"
        />
        <Form.Submit
          disabled={isValid}
          type="submit"
        >
          Sign In
        </Form.Submit>

      </Form.Base>
      <Form.Text>
        New to Netflix?
        {' '}
        <Form.Link to={ROUTE.SIGN_UP}>
          Sign up now.
        </Form.Link>
      </Form.Text>
      <Form.TextSmall>
        This page is protected by Go1ogle reCAPTCHA to ensure you are not a bot.
      </Form.TextSmall>
    </Form>
  );
};
