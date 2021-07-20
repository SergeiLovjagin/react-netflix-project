import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import * as ROUTE from '../constans/routes';
import { HeaderContainer } from '../containers/HeaderContainer';
import { Form } from '../components';
import { FooterContainer } from '../containers/FooterContainer';
import { FirebaseContext } from '../context/firebase';

export const SignUp: React.FC = () => {
  const [firstname, setFirstname] = useState<string>('');
  const [emailAddress, setEmailAddress] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState('');
  const firebase = useContext(FirebaseContext);
  const history = useHistory();
  const handleSubmit = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(emailAddress, password)
      .then((response) => {
        response.user?.updateProfile({
          displayName: firstname,
          photoURL: (Math.floor(Math.random() * 5) + 1).toString(),
        });
      })
      .then(() => {
        history.push(ROUTE.BROWSE);
      })
      .catch((e) => {
        setFirstname('');
        setPassword('');
        setPassword('');
        setError(e.message);
      });
  };

  const isValid = firstname === '' || emailAddress === '' || password === '';

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign In </Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base onSubmit={handleSubmit} method="POST">
            <Form.Input
              placeholder="First name"
              value={firstname}
              onChange={({ target }: { target: HTMLInputElement }) => setFirstname(target.value)}
            />
            <Form.Input
              placeholder="Email address"
              value={emailAddress}
              onChange={({ target }: { target: HTMLInputElement }) => setEmailAddress(target.value)}
            />

            <Form.Input
              placeholder="Password"
              value={password}
              autoComplete="off"
              type="password"
              onChange={({ target }: { target: HTMLInputElement }) => setPassword(target.value)}
            />
            <Form.Submit
              disabled={isValid}
              type="submit"
            >
              Sign In
            </Form.Submit>

          </Form.Base>
          <Form.Text>
            Already a user?
            {' '}
            <Form.Link to={ROUTE.SIGN_IN}>
              Sign in now.
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
