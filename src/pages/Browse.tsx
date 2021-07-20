import React from 'react';
import { useContent } from '../hooks/useContent';
import { selectionFilter } from '../utils/selection-filter';
import { BrowseContainer } from '../containers/BrowseContainer';

export const Browse: React.FC = () => {
  const series = useContent('series');
  const films = useContent('films');
  const slides = selectionFilter(films, series);
  return (
    <BrowseContainer slides={slides} />
  );
};
