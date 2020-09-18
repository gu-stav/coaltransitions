import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import React, { useState, useEffect, Suspense } from 'react';

import Button from '../../components/button';
import Constraint from '../../components/constraint';
import {
  extractPublicationsAuthors,
  extractPublicationsTags,
  extractPublicationYearExtremes,
  filterPublications
} from '../../lib/publication';
import FilterLoading from '../../components/filter/loading';
import FilterButton from '../../components/filter/button';
import PublicationsList from '../../components/publication-list';
import Select from '../../components/select';
import { getFilterFromUrl, setUrlForFilter } from '../../lib/url';
import Slider from '../../components/slider';
import { sortBySecondName } from '../../lib/sort-by-second-name';
import withLayout from '../../components/with-layout';

const Filter = React.lazy(() => import('../../components/filter'));

const generateRangeMarks = (min, max) => {
  const marks = {};

  // eslint-disable-next-line no-plusplus
  for (let i = min; i <= max; ++i) {
    let year = i;

    if ((max - i) % 2 === 1) {
      if (year !== min && year !== max) {
        year = null;
      }
    }

    if (year) {
      marks[i] = year;
    }
  }

  return marks;
};

const Page = ({
  data: {
    publications: { nodes: initialPublications }
  }
}) => {
  const tags = extractPublicationsTags(initialPublications);
  const [
    minPublicationYear,
    maxPublicationYear
  ] = extractPublicationYearExtremes(initialPublications);
  const authors = extractPublicationsAuthors(initialPublications);

  // eslint-disable-next-line no-unused-vars
  const [filter, setFilter] = useState({
    authors: [],
    tags: [],
    range: null
  });

  const [count, setCount] = useState(0);
  const [showFilter, setShowFilter] = useState(false);
  const [publications, setPublications] = useState(initialPublications);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (count === 0) {
        setFilter({
          authors: getFilterFromUrl('authors') || [],
          tags: getFilterFromUrl('keywords') || [],
          range: getFilterFromUrl('range', year => parseInt(year, 10)) || null
        });
      }

      setPublications(
        filterPublications(initialPublications, {
          authors: filter.authors,
          tags: filter.tags,
          range: filter.range
        })
      );

      if (count > 0) {
        setUrlForFilter('authors', filter.authors);
        setUrlForFilter('keywords', filter.tags);

        // Only set the URL parameter, if the start and beginning are different
        // than the default
        if (filter.range && filter.range.length > 0) {
          if (
            filter.range[0] !== minPublicationYear ||
            filter.range[1] !== maxPublicationYear
          ) {
            setUrlForFilter('range', filter.range);
          }
        } else {
          setUrlForFilter('range', null);
        }
      }
    }

    // Show the filter interface if at least one is set
    setShowFilter(
      (filter.authors && filter.authors.length > 0) ||
        (filter.tags && filter.tags.length > 0) ||
        filter.range
    );
    setCount(count + 1);
  }, [filter]);

  return (
    <>
      <Helmet title="Publications" />

      <Constraint wide>
        <FilterButton onClick={() => setShowFilter(!showFilter)}>
          Filter
        </FilterButton>

        {showFilter && (
          <Suspense fallback={<FilterLoading text="Loading Filter …" />}>
            <Filter
              rows={[
                [
                  <Select
                    placeholder="Authors"
                    name="author"
                    options={authors.sort((a, b) =>
                      sortBySecondName({ title: a.label }, { title: b.label })
                    )}
                    value={
                      filter.authors &&
                      filter.authors.map(author => ({
                        value: author,
                        label: author
                      }))
                    }
                    onChange={selected => {
                      const updatedAuthors =
                        selected && selected.map(({ value }) => value);

                      setFilter(state => ({
                        ...state,
                        authors: updatedAuthors
                      }));
                    }}
                    isMulti
                    isSearchable
                  />,

                  <Select
                    placeholder="Keywords"
                    name="tags"
                    options={tags.sort(({ label: aLabel }, { label: bLabel }) =>
                      aLabel.toLowerCase().localeCompare(bLabel.toLowerCase())
                    )}
                    value={
                      filter.tags &&
                      filter.tags.map(tag => ({
                        value: tag,
                        label: tags.find(({ value }) => value === tag).label
                      }))
                    }
                    onChange={selected => {
                      const selectedTags =
                        selected && selected.map(({ value }) => value);

                      setFilter(state => ({
                        ...state,
                        tags: selectedTags
                      }));
                    }}
                    isMulti
                    isSearchable
                  />
                ],

                [
                  <Slider
                    min={minPublicationYear}
                    max={maxPublicationYear}
                    value={
                      filter.range || [minPublicationYear, maxPublicationYear]
                    }
                    onChange={value => {
                      setFilter(state => ({
                        ...state,
                        range: value
                      }));
                    }}
                    allowCross={false}
                    dots
                    marks={generateRangeMarks(
                      minPublicationYear,
                      maxPublicationYear
                    )}
                  />,

                  <Button
                    onClick={event => {
                      event.preventDefault();
                      setFilter(state => ({
                        ...state,
                        authors: [],
                        tags: [],
                        range: null
                      }));
                    }}
                  >
                    Reset
                  </Button>
                ]
              ]}
            />
          </Suspense>
        )}

        {publications && (
          <PublicationsList
            title={`Publications (${publications.length})`}
            publications={publications}
            onFilter={(filterKey, filterValue) => {
              setFilter({
                [filterKey]: filterValue
              });
            }}
          />
        )}
      </Constraint>
    </>
  );
};

export default withLayout(Page);

export const query = graphql`
  query {
    publications: allWpPublication(sort: { fields: acf___year, order: DESC }) {
      nodes {
        ...publicationListItem
      }
    }
  }
`;
