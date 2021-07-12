import { InferGetStaticPropsType, GetStaticProps } from 'next';

import {
  Page,
  PageSidebar,
} from '@patternfly/react-core';

import NavExpandableList from '@components/starting/SideNavigation';
import StartingNavList from '@components/starting/StartingNavList';

/**
 * Renders the {@link HomePage}
 */
const HomePage: React.FC<InferGetStaticPropsType<GetStaticProps>> = () => (
  <div>
    <Page sidebar={<PageSidebar nav={<NavExpandableList />} />}>

    </Page>
  </div>
);

export default HomePage;
