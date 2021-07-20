import React, { useState, useContext, useEffect } from 'react';
// eslint-disable-next-line import/no-named-default
import { default as firebaseType } from 'firebase';
import { SeriesAndFilmsType } from '../hooks/useContent';
import { SelectProfilesContainer } from './SelectProfilesContainer';
import { FirebaseContext } from '../context/firebase';
import { Header, Loading } from '../components';

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

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [profile.displayName]);

  return profile.displayName
    ? (
      <>
        {loading ? <Loading src={user?.photoURL} /> : <Loading.ReleaseBody />}
        <Header bg src="joker1">
          Header
        </Header>
      </>
    )
    : (
      <SelectProfilesContainer user={user} setProfile={setProfile} />
    );
};
