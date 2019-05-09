import React from 'react';

import FactsList from '../../components/facts-list';
import withLayout from '../../components/with-layout';

const Page = ({ data = [] }) => <FactsList facts={data.arguments} />;

export default withLayout(Page);
