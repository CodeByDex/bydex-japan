import { reading } from '@lib/definitions';
import React from 'react';


export function VocabularyComponent({ reading }: { reading: reading; }) {
  return (
    <div className='flex'>
      <div className='p-2'>
        {reading.meaning ? <p><strong>Meaning:</strong> {reading.meaning}</p> : <></>}
      </div>
    </div>
  );
}
