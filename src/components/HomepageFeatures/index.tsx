import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Object Store Durability',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        SlateDB inherits your object store's durability. Yup, 99.999999999% durability.
      </>
    ),
  },
  {
    title: 'Zero-Disk Architecture',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        SlateDB runs without disks. No more disk failures, no more disk corruption.
      </>
    ),
  },
  {
    title: 'Simple Replication',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Why write complex replication protocols when you can let your object stores handle it?
      </>
    ),
  },
  {
    title: 'Tunable Performance',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Configure SlateDB to optimize for low latency, low cost, or high durability.
      </>
    ),
  },
  {
    title: 'Strong Consistency',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Supports a single writer and multiple readers. SlateDB provides transactions, snapshot isolation, and fencing.
      </>
    ),
  },
  {
    title: 'Built in Rust',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        SlateDB is an embeddable library built in Rust. Use SlateDB with the language of your choice.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('shadow rounded-2xl')}>
      <div className="">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {FeatureList.map((props, idx) => ( <Feature key={idx} {...props} /> ))}
        </div>
      </div>
    </section>
  );
}
