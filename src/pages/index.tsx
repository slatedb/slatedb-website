import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';
import { Icons } from '../components/icons';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="max-w-5xl mx-auto">
        <div className={"grid lg:grid-cols-2 gap-8 text-left"}>
          <div className={'flex flex-col'}>
            <Heading as="h1" className="text-6xl font-medium">
              An embedded database built on object storage.
            </Heading>
            <p>
              Unlike traditional LSM-tree storage engines, SlateDB writes data to object storage to
              provide bottomless storage capacity, high durability, and easy replication.
            </p>
            <div className={'flex gap-4'}>
              <a href={'https://github.com/slatedb/slatedb?tab=readme-ov-file#get-started'} target={'_blank'}
                 className={'button-primary hover:no-underline flex items-center gap-1'}>
                <span className={'text-lg'}>Get Started</span> <Icons.getStarted height={'18'}/>
              </a>
              <a href={''} className={'button-accent hover:no-underline flex items-center gap-2'}>
                <span className={'text-lg'}>Documentation</span>
              </a>
            </div>
          </div>
          <div className={'w-full h-full flex items-center justify-center'}>
            {/* TODO: we should have some meaningful hero image here */}
            <img src={'/img/logo.svg'} alt={'slatedb hero'} height={250}/>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
      <Layout
          title={`${siteConfig.title} - ${siteConfig.tagline}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
