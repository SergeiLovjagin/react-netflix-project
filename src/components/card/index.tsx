import React, {
  createContext, useContext, useEffect, useState,
} from 'react';
import {
  Container,
  Group,
  Title,
  SubTitle,
  Text,
  Feature,
  FeatureTitle,
  FeatureText,
  FeatureClose,
  Maturity,
  Content,
  Meta,
  Entities,
  Item,
  Image,
} from './styles/cardStyle';
import { SeriesAndFilmsType } from '../../hooks/useContent';

type FeatureContextType = {
  setShowFeature: (value: (((prevState: boolean) => boolean) | boolean)) => void;
  setItemFeature: (value: (((prevState: (SeriesAndFilmsType | null)) => (SeriesAndFilmsType | null)) | SeriesAndFilmsType | null)) => void;
  showFeature: boolean;
  itemFeature: SeriesAndFilmsType | null
};

let FeatureContext: React.Context<FeatureContextType>;

export const Card = ({ children, ...restProps }: { children: any }) => {
  const [showFeature, setShowFeature] = useState(false);
  const [itemFeature, setItemFeature] = useState<SeriesAndFilmsType | null>(null);

  FeatureContext = createContext({
    showFeature,
    itemFeature,
    setShowFeature,
    setItemFeature,
  });
  return (
    <FeatureContext.Provider value={{
      showFeature, setShowFeature, itemFeature, setItemFeature,
    }}
    >
      <Container {...restProps}>
        {children}
      </Container>
    </FeatureContext.Provider>
  );
};

Card.Group = ({ children, ...restProps }: any) => (
  <Group {...restProps}>{children}</Group>
);

Card.Title = ({ children, ...restProps }: { children: any }) => (
  <Title {...restProps}>{children}</Title>
);

Card.Entities = ({ children, ...restProps }: { children: any }) => (
  <Entities {...restProps}>{children}</Entities>
);

Card.Item = ({ item, children, ...restProps }: any) => {
  const { setItemFeature, setShowFeature } = useContext(FeatureContext);
  return (
    <Item
      {...restProps}
      onClick={() => {
        setShowFeature(true);
        setItemFeature(item);
      }}
    >
      {children}
    </Item>
  );
};
Card.Image = ({ ...restProps }) => (
  <Image {...restProps} />
);
Card.Meta = ({ children, ...restProps }: { children: any }) => (
  <Meta {...restProps}>{children}</Meta>
);

Card.SubTitle = ({ children, ...restProps }: { children: any }) => (
  <SubTitle {...restProps}>{children}</SubTitle>
);

Card.Text = ({ children, ...restProps }: { children: any }) => (
  <Text {...restProps}>{children}</Text>
);

Card.Feature = function CardFeature({ children, category, ...restProps }: { children: any, category: 'films' | 'series' }) {
  const { showFeature, itemFeature, setShowFeature } = useContext(FeatureContext);

  return showFeature && itemFeature ? (
    <Feature {...restProps} src={`/images/${category}/${itemFeature.genre}/${itemFeature.slug}/large.jpg`}>
      <Content>
        <FeatureTitle>{itemFeature.title}</FeatureTitle>
        <FeatureText fontWeight="bold">{itemFeature.description}</FeatureText>
        <FeatureClose onClick={() => setShowFeature(false)}>
          <img src="/images/icons/close.png" alt="Close" />
        </FeatureClose>

        <Group margin="30px 0" flexDirection="row" alignItems="center">
          <Maturity rating="12">{itemFeature.maturity < '12' ? 'PG' : itemFeature.maturity}</Maturity>
          <FeatureText fontWeight="bold">
            {itemFeature.genre.charAt(0).toUpperCase() + itemFeature.genre.slice(1)}
          </FeatureText>
        </Group>

        {children}
      </Content>
    </Feature>
  ) : null;
};
