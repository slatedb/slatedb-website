import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';
import { Icons } from '../components/icons';
import Rive from "@rive-app/react-canvas";

function HomepageHeader() {
  return (
    <header className={clsx('hero hero--primary rounded-b-[50px]', styles.heroBanner)}>
      <div className="md:max-w-[80%] lg:w-6xl mx-auto">
        <div className={"grid lg:grid-cols-2 gap-8 text-left"}>
          <div className={'flex flex-col'}>
            <Heading as="h1" className="text-6xl font-medium">
              An embedded database built on object storage.
            </Heading>
            <p>
              Unlike traditional LSM-tree storage engines, SlateDB writes data to object storage to
              provide <span className={'font-bold text-accent-1'}>bottomless storage capacity,
              high durability, and easy replication</span>.
            </p>
            <div className={'flex gap-4'}>
              <a href={'#get-started'}
                 className={'button-primary hover:no-underline flex items-center gap-1'}>
                <span className={'text-base'}>Get Started</span> <Icons.down height={'18'}/>
              </a>
              <a href={'/docs/introduction'} className={'button-accent hover:no-underline flex items-center gap-2'}>
                <span className={'text-base'}>Documentation</span>
              </a>
            </div>
          </div>
          <div className={'w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] mx-auto flex items-center justify-center'}>
            <Rive
                src="/img/slatedb-hero.riv"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

function GetStarted() {
  return (
      <section id={'get-started'} className={'w-full bg-black text-white pt-8 pb-12 rounded-t-[50px]'}>
        <div className={'max-w-[80%] mx-auto'}>
          <div className={"grid lg:grid-cols-2 gap-12 text-left"}>
            <div className={'flex flex-col gap-2'}>
              <h2 className={'text-4xl font-medium'}>Get Started</h2>
              <p>
                SlateDB currently only supports the Rust ecosystem, and is not published to crates.io. Add
                the code snippet to your dependencies and you are off to the races!
              </p>
              <div className={'flex'}>
                <a href={'https://github.com/slatedb/slatedb?tab=readme-ov-file#get-started'}
                   className={'button-primary hover:no-underline flex items-center justify-center gap-1'}
                   target={'_blank'}
                >
                  <span className={'text-base px-1'}>See a Full Example</span><img src={'/img/github-mark-white.svg'} alt={'github'} height={20}/>
                </a>
              </div>
            </div>
            <div className={'bg-slate-600 rounded-2xl font-mono text-sm w-full overflow-x-auto'}>
              <div className={'border-solid border-0 border-white border-b p-2 text-right'}>
                <span className={'bg-black rounded-lg py-1 px-2'}>Cargo.toml</span>
              </div>
              <div className={'px-8 pt-4 pb-4'}>
                <div>[<span className={'text-accent'}>dependencies</span>]</div>
                <div>{`slatedb = { git = `}<span className={'text-accent-2'}>"https://github.com/slatedb/slatedb.git"</span>{`}`}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
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
        <GetStarted />
      </main>
    </Layout>
  );
}
