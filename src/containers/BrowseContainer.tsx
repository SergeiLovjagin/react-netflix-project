import React, { useContext, useEffect, useState } from 'react';
import { SeriesAndFilmsType } from '../hooks/useContent';
import { SelectProfilesContainer } from './SelectProfilesContainer';
import { FirebaseContext } from '../context/firebase';
import { Card, Header, Loading } from '../components';
import * as ROUTE from '../constans/routes';
import logo from '../logo.svg';
import { FooterContainer } from './FooterContainer';

type BrowseContainerProps = {
  series: {
    title: string;
    data: SeriesAndFilmsType[];
  }[];
  films: {
    title: string;
    data: SeriesAndFilmsType[];
  }[];
}

export const BrowseContainer = ({ slides }: { slides: BrowseContainerProps }) => {
  const [profile, setProfile] = useState<{ displayName: string | null; photoURL: string | null }>({ photoURL: null, displayName: null });
  const [loading, setLoading] = useState(true);
  const firebase = useContext(FirebaseContext);

  const user = firebase.auth().currentUser;

  const [searchTerm, setSearchTerm] = useState('');

  const [category, setCategory] = useState<'films' | 'series'>('films');
  const [slideRows, setSlideRows] = useState<{ title: string, data: SeriesAndFilmsType[] }[]>([]);

  useEffect(() => {
    setSlideRows(slides[category]);
  }, [category, slides]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [profile.displayName]);

  return profile.displayName && (user !== null)
    ? (
      <>
        {loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />}
        <Header bg src="joker1" dontShowOnSmallViewPort>
          <Header.Container>
            <Header.Group>
              <Header.Logo to={ROUTE.HOME} alt="Netflix" src={logo} />
              <Header.Link onClick={() => setCategory('series')} active={category === 'series' ? 'true' : 'false'}>Series</Header.Link>
              <Header.Link onClick={() => setCategory('films')} active={category === 'films' ? 'true' : 'false'}>Films</Header.Link>
            </Header.Group>
            <Header.Group>
              <Header.Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
              <Header.Profile>
                <Header.Picture src={user.photoURL} />
                <Header.Dropdown>
                  <Header.Group>
                    <Header.Picture src={user.photoURL} />
                    <Header.Link active="" onClick={() => {}}>{user && user.displayName}</Header.Link>
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
            <Header.PlayButton>
              Play
            </Header.PlayButton>
          </Header.Feature>
        </Header>
        <Card.Group>
          {
            slideRows.map((slideItem) => (
              <Card key={`${category}-${slideItem.title.toLowerCase()}`}>
                <Card.Title>{slideItem.title}</Card.Title>
                <Card.Entities>
                  {slideItem.data.map((item: SeriesAndFilmsType) => (
                    <Card.Item key={item.docId} item={item}>
                      <Card.Image src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`} />
                      <Card.Meta>
                        <Card.SubTitle>{item.title}</Card.SubTitle>
                        <Card.Text>{item.description}</Card.Text>
                      </Card.Meta>
                    </Card.Item>
                  ))}
                </Card.Entities>
                <Card.Feature category={category}>
                  123
                </Card.Feature>
              </Card>
            ))
          }
        </Card.Group>
        <FooterContainer />
      </>
    )
    : (
      <SelectProfilesContainer user={user} setProfile={setProfile} />
    );
};
