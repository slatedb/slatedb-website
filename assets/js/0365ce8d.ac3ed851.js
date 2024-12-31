"use strict";(self.webpackChunkslatedb_website=self.webpackChunkslatedb_website||[]).push([[423],{624:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>n,toc:()=>r});const n=JSON.parse('{"id":"tutorials/s3","title":"Connect SlateDB to S3","description":"This tutorial shows you how to connect SlateDB to S3. We\'ll use LocalStack to simulate S3.","source":"@site/docs/tutorials/s3.md","sourceDirName":"tutorials","slug":"/tutorials/s3","permalink":"/docs/tutorials/s3","draft":false,"unlisted":false,"editUrl":"https://github.com/slatedb/slatedb-website/tree/main/docs/tutorials/s3.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"Connect SlateDB to S3","sidebar_position":2},"sidebar":"docsSidebar","previous":{"title":"Connect SlateDB to Azure Blob Storage","permalink":"/docs/tutorials/abs"},"next":{"title":"Connect SlateDB to S3 (Legacy)","permalink":"/docs/tutorials/s3-legacy"}}');var l=s(4848),a=s(8453);const o={title:"Connect SlateDB to S3",sidebar_position:2},c=void 0,i={},r=[{value:"Create a project",id:"create-a-project",level:2},{value:"Add dependencies",id:"add-dependencies",level:2},{value:"Setup",id:"setup",level:2},{value:"Initialize AWS",id:"initialize-aws",level:2},{value:"Create your S3 bucket:",id:"create-your-s3-bucket",level:3},{value:"Write some code",id:"write-some-code",level:2},{value:"Run the code",id:"run-the-code",level:2},{value:"Check the results",id:"check-the-results",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.p,{children:"This tutorial shows you how to connect SlateDB to S3. We'll use LocalStack to simulate S3."}),"\n",(0,l.jsx)(t.h2,{id:"create-a-project",children:"Create a project"}),"\n",(0,l.jsx)(t.p,{children:"Let's start by creating a new Rust project:"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-bash",children:"cargo init slatedb-playground\ncd slatedb-playground\n"})}),"\n",(0,l.jsx)(t.h2,{id:"add-dependencies",children:"Add dependencies"}),"\n",(0,l.jsxs)(t.p,{children:["Now add SlateDB and the ",(0,l.jsx)(t.code,{children:"object_store"})," crate to your ",(0,l.jsx)(t.code,{children:"Cargo.toml"}),":"]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-bash",children:"cargo add slatedb object-store tokio --features object-store/aws\n"})}),"\n",(0,l.jsx)(t.admonition,{type:"note",children:(0,l.jsxs)(t.p,{children:['If you see "',(0,l.jsx)(t.code,{children:"object_store::path::Path"})," and ",(0,l.jsx)(t.code,{children:"object_store::path::Path"}),' have similar names, but are actually distinct types", you might need to pin the ',(0,l.jsx)(t.code,{children:"object_store"})," version to match ",(0,l.jsx)(t.code,{children:"slatedb"}),"'s ",(0,l.jsx)(t.code,{children:"object_store"})," version. SlateDB also exports ",(0,l.jsx)(t.code,{children:"slatedb::object_store"})," for convenience, if you'd rather use that."]})}),"\n",(0,l.jsx)(t.h2,{id:"setup",children:"Setup"}),"\n",(0,l.jsxs)(t.p,{children:["You will need to have ",(0,l.jsx)(t.a,{href:"https://localstack.cloud/",children:"LocalStack"})," running. You can install it using ",(0,l.jsx)(t.a,{href:"https://brew.sh/",children:"Homebrew"}),":"]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-bash",children:"brew install localstack/tap/localstack-cli\n"})}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-bash",children:"localstack start -d\n"})}),"\n",(0,l.jsxs)(t.p,{children:["For a more detailed setup, see the ",(0,l.jsx)(t.a,{href:"https://docs.localstack.cloud/",children:"LocalStack documentation"}),"."]}),"\n",(0,l.jsx)(t.p,{children:"You'll also need the AWS CLI:"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-bash",children:"brew install awscli\n"})}),"\n",(0,l.jsx)(t.h2,{id:"initialize-aws",children:"Initialize AWS"}),"\n",(0,l.jsx)(t.p,{children:"SlateDB requires a bucket to work with S3."}),"\n",(0,l.jsx)(t.h3,{id:"create-your-s3-bucket",children:"Create your S3 bucket:"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-bash",children:"# Create S3 bucket\naws --endpoint-url=http://localhost:4566 s3api create-bucket --bucket slatedb --region us-east-1\n"})}),"\n",(0,l.jsx)(t.h2,{id:"write-some-code",children:"Write some code"}),"\n",(0,l.jsxs)(t.p,{children:["Stick this into your ",(0,l.jsx)(t.code,{children:"src/main.rs"})," file:"]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-rust",children:'use use object_store::aws::S3ConditionalPut;\nuse object_store::path::Path;\nuse object_store::ObjectStore;\nuse slatedb::config::DbOptions;\nuse slatedb::db::Db;\nuse std::sync::Arc;\n\n#[tokio::main]\nasync fn main() {\n    let db_options = DbOptions::default();\n    let path = Path::from("test");\n    let os: Arc<dyn ObjectStore> = Arc::new(\n        object_store::aws::AmazonS3Builder::new()\n            // These will be different if you are using real AWS\n            .with_allow_http(true)\n            .with_endpoint("http://localhost:4566")\n            .with_access_key_id("test")\n            .with_secret_access_key("test")\n            .with_bucket_name("slatedb")\n            .with_region("us-east-1")\n            .with_conditional_put(S3ConditionalPut::ETagMatch)\n            .build()\n            .expect("failed to create object store")\n    );\n    let db = Db::open_with_opts(path.clone(), db_options, os.clone())\n        .await\n        .expect("failed to open db");\n\n    // Call db.put with a key and a 64 meg value to trigger L0 SST flush\n    let value: Vec<u8> = vec![0; 64 * 1024 * 1024];\n    db.put(b"k1", value.as_slice()).await.expect("failed to put");\n    db.close().await.expect("failed to close db");\n}\n'})}),"\n",(0,l.jsx)(t.admonition,{type:"note",children:(0,l.jsxs)(t.p,{children:["Our code example writes a 64 MiB value to object storage to trigger an L0 SST flush. This is just to show the\n",(0,l.jsx)(t.code,{children:"compacted"})," directory in your bucket."]})}),"\n",(0,l.jsx)(t.h2,{id:"run-the-code",children:"Run the code"}),"\n",(0,l.jsx)(t.p,{children:"Now you can run the code:"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-bash",children:"cargo run\n"})}),"\n",(0,l.jsx)(t.p,{children:"This will write a 64 MiB value to SlateDB."}),"\n",(0,l.jsx)(t.h2,{id:"check-the-results",children:"Check the results"}),"\n",(0,l.jsx)(t.p,{children:"Now' let's check the root of the bucket:"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-bash",children:"% aws --endpoint-url=http://localhost:4566 s3 ls s3://slatedb/test/\n                           PRE compacted/\n                           PRE manifest/\n                           PRE wal/\n"})}),"\n",(0,l.jsx)(t.p,{children:"There are three folders:"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:"compacted"}),": Contains the compacted SST files."]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:"manifest"}),": Contains the manifest files."]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:"wal"}),": Contains the write-ahead log files."]}),"\n"]}),"\n",(0,l.jsxs)(t.p,{children:["Let's check the ",(0,l.jsx)(t.code,{children:"wal"})," folder:"]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-bash",children:"% aws --endpoint-url=http://localhost:4566 s3 ls s3://slatedb/test/wal/\n2024-09-04 18:05:57         64 00000000000000000001.sst\n2024-09-04 18:05:58   67108996 00000000000000000002.sst\n"})}),"\n",(0,l.jsxs)(t.p,{children:["Each of these SST files is a write-ahead log entry. They get flushed based on the ",(0,l.jsx)(t.code,{children:"flush_interval"})," config. The last entry is 64 MiB, which is the value we wrote."]}),"\n",(0,l.jsxs)(t.p,{children:["Finally, let's check the ",(0,l.jsx)(t.code,{children:"compacted"})," folder:"]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-bash",children:"% aws --endpoint-url=http://localhost:4566 s3 ls s3://slatedb/test/compacted/ \n2024-09-04 18:05:59   67108996 01J6ZVEZ394GCJT1PHZYY1NZGP.sst\n"})}),"\n",(0,l.jsx)(t.p,{children:"Again, we see the 64 MiB SST file. This is the L0 SST file that was flushed with our value. Over time, the WAL entries will be removed, and the L0 SSTs will be compacted into higher levels."})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>o,x:()=>c});var n=s(6540);const l={},a=n.createContext(l);function o(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);