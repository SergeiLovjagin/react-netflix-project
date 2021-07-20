import { useEffect, useState, useContext } from 'react';
import { FirebaseContext } from '../context/firebase';

export type SeriesAndFilmsType = {
  description: string
  docId: string
  genre: string
  id: string
  maturity: string
  slug: string
  title: string
}

export const useContent = (target: string) => {
  const [content, setContent] = useState<SeriesAndFilmsType[]>();
  const firebase = useContext(FirebaseContext);
  useEffect(() => {
    firebase
      .firestore()
      .collection(target)
      .get()
      .then((snapshot) => {
        const allContent = snapshot.docs.map((item) => ({ ...item.data(), docId: item.id }) as unknown as SeriesAndFilmsType);
        setContent(allContent);
      })
      .catch((e) => {
        console.log(e.message);
      })
      .then(() => {
      });
  }, []);
  return content;
};
