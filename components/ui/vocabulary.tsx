import { reading } from '@lib/definitions';
import React from 'react';


export function MeaningComponent({ reading }: { reading: reading; }) {
  return (
    <div className='flex'>
      <div className='p-2'>
        {reading.meaning ? <p><strong>Meaning:</strong> {reading.meaning}</p> : <></>}
      </div>
    </div>
  );
}

export function WordComponent({ reading, className }: { reading: reading, className: string }) {
  return ( 
    <div className={`items-center justify-center ${className}`}>
        {reading.id === reading.kana ? <></> : <p className='text-xs'>{reading.kana}</p>}
        <p>{reading.id}</p>
        <p>{reading.romanji}</p>
    </div>
  )
}