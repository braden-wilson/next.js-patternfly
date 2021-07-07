import { InferGetStaticPropsType, GetStaticProps } from 'next';

/**
 * Renders the {@link HomePage}
 */
const HomePage: React.FC<InferGetStaticPropsType<GetStaticProps>> = () => (
  <div>
    <h1>Hello World</h1>
  </div>
);

export default HomePage;
