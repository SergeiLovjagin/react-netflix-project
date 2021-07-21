import React, { useState, useContext, useEffect } from 'react';
// eslint-disable-next-line import/no-named-default
import { default as firebaseType } from 'firebase';
import { SeriesAndFilmsType } from '../hooks/useContent';
import { SelectProfilesContainer } from './SelectProfilesContainer';
import { FirebaseContext } from '../context/firebase';
import { Header, Loading } from '../components';
import { HeaderContainer } from './HeaderContainer';
import * as ROUTE from '../constans/routes';
import logo from '../logo.svg';

type BrowseContainerProps = {
  series: {
    title: string;
    data: SeriesAndFilmsType[] | undefined;
  }[];
  films: {
    title: string;
    data: SeriesAndFilmsType[] | undefined;
  }[];
}

export const BrowseContainer = ({ slides }: { slides: BrowseContainerProps }) => {
  const [profile, setProfile] = useState<{ displayName: string | null | undefined; photoURL: string | null | undefined; }>({ photoURL: null, displayName: null });
  const [loading, setLoading] = useState(true);
  const firebase = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || null;
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [profile.displayName]);

  return profile.displayName
    ? (
      <>
        {loading ? <Loading src={user?.photoURL} /> : <Loading.ReleaseBody />}
        <Header bg src="joker1" dontShowOnSmallViewPort>
          <Header.Container>
            <Header.Group>
              <Header.Logo to={ROUTE.HOME} alt="Netflix" src={logo} />
              <Header.Link active="active">Series</Header.Link>
              <Header.Link active="active">Films</Header.Link>
            </Header.Group>
            <Header.Group>
              <Header.Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
              <Header.Profile>
                <Header.Picture src={user && user.photoURL} />
                <Header.Dropdown>
                  <Header.Group>
                    <Header.Picture src={user && user?.photoURL} />
                    <Header.Link active="">{user && user.displayName}</Header.Link>
                  </Header.Group>
                  <Header.Group>
                    <Header.Link active="" onClick={() => firebase.auth().signOut()}>Sign out</Header.Link>
                  </Header.Group>
                </Header.Dropdown>
              </Header.Profile>
            </Header.Group>
          </Header.Container>
          <Header.Feature>
            <Header.FeatureCallOut>
              Watch Joker Now
            </Header.FeatureCallOut>
            <Header.Text>
              Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham
              City. Arthur wears two masks -- the one he paints for his day job as a clown, and the guise he projects in a
              futile attempt to feel like he is part of the world around him.
            </Header.Text>
          </Header.Feature>
        </Header>
      </>
    )
    : (
      <SelectProfilesContainer user={user} setProfile={setProfile} />
    );
};
