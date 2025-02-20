"use strict";(self.webpackChunkslatedb_website=self.webpackChunkslatedb_website||[]).push([[899],{1920:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"introduction","title":"Introduction","description":"SlateDB is an embedded storage engine built as a log-structured merge-tree. Unlike traditional LSM-tree storage engines, SlateDB writes all data to object storage.","source":"@site/docs/introduction.md","sourceDirName":".","slug":"/introduction","permalink":"/docs/introduction","draft":false,"unlisted":false,"editUrl":"https://github.com/slatedb/slatedb-website/tree/main/docs/introduction.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"docsSidebar","next":{"title":"Quickstart","permalink":"/docs/quickstart"}}');var i=n(4848),r=n(8453);const a={sidebar_position:1},o="Introduction",l={},c=[{value:"Vision",id:"vision",level:2},{value:"Features",id:"features",level:2},{value:"Use Cases",id:"use-cases",level:2}];function d(e){const t={a:"a",admonition:"admonition",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"introduction",children:"Introduction"})}),"\n",(0,i.jsxs)(t.p,{children:["SlateDB is an embedded storage engine built as a ",(0,i.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Log-structured_merge-tree",children:"log-structured merge-tree"}),". Unlike traditional LSM-tree storage engines, SlateDB writes all data to object storage."]}),"\n",(0,i.jsx)(t.h2,{id:"vision",children:"Vision"}),"\n",(0,i.jsx)(t.p,{children:"Object storage is an amazing technology. It provides highly-durable, highly-scalable, highly-available storage at a great cost. And recent advancements have made it even more attractive:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Google Cloud Storage supports multi-region and dual-region buckets for high availability."}),"\n",(0,i.jsx)(t.li,{children:"All object stores support compare-and-swap (CAS) operations."}),"\n",(0,i.jsx)(t.li,{children:"Amazon Web Service's S3 Express One Zone has single-digit millisecond latency."}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["We believe that the future of object storage are multi-region, low latency buckets that support atomic CAS operations. Inspired by ",(0,i.jsx)(t.a,{href:"https://materializedview.io/p/cloud-storage-triad-latency-cost-durability",children:"The Cloud Storage Triad: Latency, Cost, Durability"}),", we set out to build a storage engine built for the cloud. SlateDB is that storage engine."]}),"\n",(0,i.jsx)(t.h2,{id:"features",children:"Features"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Zero-Disk architecture"}),": SlateDB is easy to operate. It runs as an in-process storage engine with no local state, no control plane, and no replication protocol."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Single-writer"}),": SlateDB is designed for a single writer. Partitioning can easily be built on top of SlateDB since fencing is supported."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Multiple-readers"}),": Multiple readers on different nodes can all read the same SlateDB database."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Read caching"}),": SlateDB supports in-memory and (optional) on-disk read caching to reduce latency and API cost."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Snapshot isolation"}),": SlateDB supports snapshot isolation, which allows readers and writers to see a consistent view of the database."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Transactions"}),": Transactional writes are supported."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Object store persistence"}),": SlateDB writes all data to object storage, which means SlateDB has the same durability, scalability, and availability as your object store."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Writer fencing"}),": SlateDB enforces writer fencing. Zombie writer processes are detected and prevented from writing to the database."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Pluggable compaction"}),": SlateDB supports pluggable compaction, so you can use the compaction strategy that fits your needs."]}),"\n"]}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsx)(t.p,{children:"Snapshot isolation and transactions are planned but not yet implemented."})}),"\n",(0,i.jsx)(t.h2,{id:"use-cases",children:"Use Cases"}),"\n",(0,i.jsx)(t.p,{children:"SlateDB is a great fit for use cases that are tolerant to 50-100ms write latency, are tolerant to data loss during failure, or are willing to pay for frequent API PUT calls. Such use cases include:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Stream processing"}),"\n",(0,i.jsx)(t.li,{children:"Serverless functions"}),"\n",(0,i.jsx)(t.li,{children:"Durable execution"}),"\n",(0,i.jsx)(t.li,{children:"Workflow orchestration"}),"\n",(0,i.jsx)(t.li,{children:"Durable caches"}),"\n",(0,i.jsx)(t.li,{children:"Data lakes"}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>o});var s=n(6540);const i={},r=s.createContext(i);function a(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);