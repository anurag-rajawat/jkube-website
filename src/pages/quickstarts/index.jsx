import React from 'react'
import {graphql} from 'gatsby';
import {MainLayout, QuickStartCard, Seo} from '../../components';

import '../../styles/main.scss';

const title = 'Quickstarts';
const description='Eclipse JKube Quickstarts and examples';
const langKey='en';

const Quickstarts = ({data: {allQuickstart: {nodes}}}) => (
  <MainLayout langKey={langKey}>
    <div className='eclipse-jkube__content'>
      <div className='hero'>
        <div className='hero-content'>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </div>
      <ul
        className='eclipse-jkube__quickstarts'
        itemScope itemType='http://schema.org/SoftwareApplication'
      >
        <meta itemProp='name' content='Eclipse JKube' />
        <meta itemProp='applicationCategory' content='Developer Tools' />
        <meta itemProp='operatingSystem' content='Linux,Windows,OSX,Mac' />
        <meta itemProp='downloadUrl' content='https://github.com/eclipse/jkube' />
        {nodes.map(node => (
          <li key={node.artifactId} className='eclipse-jkube__quickstarts-item'>
            <QuickStartCard
              title={node.name}
              description={node.description}
              technologies={node.technologies}
              url={node.url}
            />
          </li>
        ))}
      </ul>
    </div>
  </MainLayout>
);

export const Head = () => (
  <Seo title={title} description={description} />
);

export const pageQuery = graphql`
  query {
    allQuickstart {
      nodes {
        id
        artifactId
        name
        description
        technologies
        url
      }
    }
  }
`;

export default Quickstarts;
