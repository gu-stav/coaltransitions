import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import React, { useState, useEffect, Suspense } from 'react';

import { getFilterFromUrl, setUrlForFilter } from '../../lib/url';
import { extractTags, filterNews } from '../../lib/news';
import Constraint from '../../components/constraint';
import FilterButton from '../../components/filter/button';
import FilterLoading from '../../components/filter/loading';
import NewsOverview from '../../components/NewsOverview';
import Select from '../../components/select';
import withLayout from '../../components/with-layout';

const Filter = React.lazy(() => import('../../components/filter'));

const Page = ({
  data: {
    allWpNewsEntry: { nodes, ...props },
  },
}) => {
  const tags = extractTags(nodes);
  const [filter, setFilter] = useState({
    tags: [],
  });
  const [showFilter, setShowFilter] = useState(false);
  const [count, setCount] = useState(0);
  const [newsEntries, setNewsEntries] = useState(nodes);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (count === 0) {
        setFilter({
          tags: getFilterFromUrl('keywords') || [],
        });
      }

      const filtered = filterNews(nodes, {
        tags: filter.tags,
      });

      setNewsEntries(filtered);

      if (count > 0) {
        setUrlForFilter('keywords', filter.tags);
      }
    }

    // Show the filter interface if at least one is set
    setShowFilter(filter.tags && filter.tags.length > 0);
    setCount(count + 1);
  }, [filter]);

  return (
    <>
      <Helmet title="News" />

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
                    placeholder="Keywords"
                    name="tags"
                    options={tags.sort(({ label: aLabel }, { label: bLabel }) =>
                      aLabel.toLowerCase().localeCompare(bLabel.toLowerCase())
                    )}
                    value={
                      filter.tags &&
                      filter.tags.map((tag) => ({
                        value: tag,
                        label: tags.find(({ value }) => value === tag).label,
                      }))
                    }
                    onChange={(selected) => {
                      const selectedTags =
                        selected && selected.map(({ value }) => value);

                      setFilter((state) => ({
                        ...state,
                        tags: selectedTags,
                      }));
                    }}
                    isMulti
                    isSearchable
                  />,
                ],
              ]}
            />
          </Suspense>
        )}
        <NewsOverview nodes={newsEntries} {...props} />
      </Constraint>
    </>
  );
};

export default withLayout(Page);

export const query = graphql`
  query {
    allWpNewsEntry {
      ...NewsList
    }
  }
`;
