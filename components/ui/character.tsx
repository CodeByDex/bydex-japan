'use client';

import React from 'react';
import {useState} from 'react'
import { character, reading } from '@lib/definitions';

interface CharacterComponentProps {
  character: character;
}

interface ReadingComponentProps {
  reading: reading
}

export function ReadingComponent({ reading }: ReadingComponentProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  
  return (
    <div className='flex'>
      <div 
        className='flex items-center justify-center p-2 whitespace-nowrap'
        onClick={toggleExpand}
      >
        {reading.id}
      </div>
      {isExpanded && (
        <div className='p-2'>
          {reading.type && reading.type != "kana" ? <p><strong>Kana:</strong> {reading.kana}</p> : <></>}
          <p><strong>Romanji:</strong> {reading.romanji}</p>
          {reading.type && reading.type != "kana" ? <p><strong>Type:</strong> {reading.type}</p> : <></>}
          {reading.meaning ? <p><strong>Meaning:</strong> {reading.meaning}</p> : <></>}
        </div>
      )}
    </div>
  )
}

export default function CharacterComponent({ character }: CharacterComponentProps) {
  return (
    <div className='flex'>
      <div className='flex items-center justify-center p-4 text-8xl w-1/3'>
        {character.id}
      </div>
      <div className='p-4 w-2/3'>
        <p><strong>Type:</strong> {character.type}</p>
        <p><strong>Readings:</strong></p>
        {character.readings.map(x => (
          <ReadingComponent reading={x} key={x.id} />
        ))}
        <p><strong>Radical:</strong> {character.radical.join(', ')}</p>
        <p><strong>Stroke Count:</strong> {character.stroke}</p>
        {character.meaning && <p><strong>Meaning:</strong> {character.meaning}</p>}
        <p><strong>JLPT:</strong> N{character.JLPT}</p>
        <p><strong>Grade:</strong> {character.grade}</p>
        <p><strong>AP:</strong> {character.AP ? 'Yes' : 'No'}</p>
        {character.mnemonic && <p><strong>Mnemonic:</strong> {character.mnemonic}</p>}
        {character.note && <p><strong>Note:</strong> {character.note}</p> }
        <p><strong>Examples:</strong></p>
        {character.examples.map(x => (
          <ReadingComponent reading={x} key={x.id} />
        ))}      
      </div>
    </div >
  );
}