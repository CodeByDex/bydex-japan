'use client';

import React from 'react';
import { character, reading } from '@lib/definitions';

interface CharacterComponentProps {
  character: character;
}

interface ReadingComponentProps {
  reading: reading
}

export function ReadingComponent({ reading }: ReadingComponentProps) {
  return (
    <div className='flex'>
      <div className='flex items-center justify-center p-2'>
        {reading.id}
      </div>
      <div className='p-2'>
        {reading.type != "kana" ? <p><strong>Kana:</strong> {reading.kana}</p> : <></>}
        <p><strong>Romanji:</strong> {reading.romanji}</p>
        {reading.type != "kana" ? <p><strong>Type:</strong> {reading.type}</p> : <></>}
        {reading.meaning ? <p><strong>Meaning:</strong> {reading.meaning}</p> : <></>}
      </div>
    </div>
  )
}

export default function CharacterComponent({ character }: CharacterComponentProps) {
  return (
    <div className='flex'>
      <div className='flex items-center justify-center p-4 text-9xl'>
        {character.id}
      </div>
      <div className='p-4'>
        <p><strong>Type:</strong> {character.type}</p>
        <p><strong>Readings:</strong></p>
        <p>{character.readings.map(x => (
          <ReadingComponent reading={x} key={x.id} />
        ))}</p>
        <p><strong>Radical:</strong> {character.radical.join(', ')}</p>
        <p><strong>Stroke Count:</strong> {character.stroke}</p>
        {character.meaning && <p><strong>Meaning:</strong> {character.meaning}</p>}
        {character.mnemonic && <p><strong>Mnemonic:</strong> {character.mnemonic}</p>}
        <p><strong>Note:</strong> {character.note}</p>
        <p><strong>JLPT Level:</strong> N{character.JLPT}</p>
        <p><strong>Grade:</strong> {character.grade}</p>
        <p><strong>Advanced Placement:</strong> {character.AP ? 'Yes' : 'No'}</p>
        <p><strong>Examples:</strong></p>
        <ul>
          {/* {character.examples.map((example, index) => (
          <li key={index}>
            Kana: {example.kana}, Romaji: {example.romaji}
          </li>
        ))} */}
          {character.examples.join(', ')}
        </ul>
      </div>
    </div >
  );
}