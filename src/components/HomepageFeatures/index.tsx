import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import {Icons} from "@site/src/components/icons";
import {Icon, IconProps} from "@tabler/icons-react";
import {ForwardRefExoticComponent, RefAttributes} from "react";

type FeatureItem = {
  title: string;
  Svg: ForwardRefExoticComponent<IconProps & RefAttributes<Icon>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Object Store Durability',
    Svg: Icons.infinity,
    description: (
      <>
        SlateDB inherits your object store's durability. Yup, 99.999999999% durability.
      </>
    ),
  },
  {
    title: 'Zero-Disk Architecture',
    Svg: Icons.floppy,
    description: (
      <>
        SlateDB runs without disks. No more disk failures, no more disk corruption.
      </>
    ),
  },
  {
    title: 'Simple Replication',
    Svg: Icons.replication,
    description: (
      <>
        Why write complex replication protocols when you can let your object store handle it?
      </>
    ),
  },
  {
    title: 'Tunable Performance',
    Svg: Icons.adjust,
    description: (
      <>
        Configure SlateDB to optimize for low latency, low cost, or high durability.
      </>
    ),
  },
  {
    title: 'Scalable Readers',
    Svg: Icons.scale,
    description: (
      <>
        Supports a single writer and multiple readers. SlateDB detects and fences zombie writers.
      </>
    ),
  },
  {
    title: 'Built in Rust',
    Svg: Icons.terminal,
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
      <div className="flex justify-center p-10">
        <Svg className={`rounded-2xl shadow-lg p-4 text-slate-800 bg-gradient-to-br from-accent-1 to-90% to-amber-400`} stroke={1.2} role="img" size={120}/>
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
