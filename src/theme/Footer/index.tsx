import React from 'react';

function Footer(): JSX.Element | null {
  return (
      <div className={'bg-black w-full py-10 px-5'}>
        <div className={'mx-auto max-w-6xl flex justify-between'}>
          <div className={'flex flex-col justify-between'}>
            <div className={'grid grid-cols-2'}></div>
            <div className={'text-slate-300 text-sm'}>
              Copyright © {new Date().getFullYear()} SlateDB Authors. All rights reserved.
            </div>
          </div>
          <div className={'pl-5'}>
            <img src={'/img/logo-full.svg'} height={30} alt={'slateDB'}/>
          </div>
        </div>
      </div>
  );
}

export default React.memo(Footer);
