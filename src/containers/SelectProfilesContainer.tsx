import firebase from 'firebase';
import React, { SetStateAction } from 'react';
import * as ROTES from '../constans/routes';
import { Header, Profile } from '../components';
import logo from '../logo.svg';

type SelectProfilesContainerProps = {
  user: firebase.User | null
  setProfile: (p: { displayName: string | null; photoURL: string | null }) => void
}

export const SelectProfilesContainer: React.FC<SelectProfilesContainerProps> = ({ user, setProfile }) => {
  return (
    <>
      <Header bg={false} src={' '} dontShowOnSmallViewPort>
        <Header.Container>
          <Header.Logo to={ROTES.HOME} src={logo} alt="logo" />
        </Header.Container>
      </Header>
      <Profile>
        <Profile.Title>
          Who is watching ?
        </Profile.Title>
        <Profile.Item onClick={() => setProfile({ displayName: user && user.displayName, photoURL: user && user.photoURL })}>
          <Profile.List>
            <Profile.Picture src={user?.photoURL} />
            <Profile.Name>
              {user?.displayName}
            </Profile.Name>
          </Profile.List>
        </Profile.Item>
      </Profile>
    </>
  );
};
