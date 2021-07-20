import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { HeaderContainer } from '../containers/HeaderContainer';
import { FooterContainer } from '../containers/FooterContainer';
import { FirebaseContext } from '../context/firebase';
import * as ROUTE from '../constans/routes';
import { Form } from '../components';

export const SignIn: React.FC = () => {
  const [emailAddress, setEmailAddress] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState('');
  const firebase = useContext(FirebaseContext);
  const history = useHistory();

  const handleSubmit = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    firebase.auth().signInWithEmailAndPassword(emailAddress, password)
      .then(() => {
        history.push(ROUTE.BROWSE);
      })
      .catch((e) => {
        setEmailAddress('');
        setPassword('');
        setError(e.message);
      });
  };

  const isValid = emailAddress === '' || password === '';

  return (
    <>
      <HeaderContainer>
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
      </HeaderContainer>
      <FooterContainer />
    </>
  );
};
