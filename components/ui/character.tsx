'use client';

import React from 'react';
import { useState } from 'react'
import { character, reading } from '@lib/definitions';
import Link from "next/link";

export function ReadingComponent({ reading }: { reading: reading }) {
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

export default function CharacterFullInfo({ character }: { character: character }) {
  return (
    <div className='flex'>
      <LargeCharacter className="flex p-4 w-1/3" char={character.id} />
      <CharacterInfo className='p-4 w-2/3' character={character} />
    </div >
  );
}

export function LargeCharacter({ char, className }: { char: string, className: string }) {
  return <div className={`items-center justify-center text-8xl ${className}`}>
    <Link href={`/character/${char}`}>
      {char}
    </Link>
  </div>
}

export function CharacterInfo({ character, className }: { character: character, className: string }) {
  return (
    <div className={className}>
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
      {character.note && <p><strong>Note:</strong> {character.note}</p>}
      <p><strong>Examples:</strong></p>
      {character.examples.map(x => (
        <ReadingComponent reading={x} key={x.id} />
      ))}
    </div>
  )
}