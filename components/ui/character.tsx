'use client';

import React from 'react';
import { character } from '@lib/definitions';

interface CharacterComponentProps {
  character: character;
}

export default function CharacterComponent({ character }: CharacterComponentProps) {
  return (
    <div>
      <h1>Character Details</h1>
      <p><strong>ID:</strong> {character.id}</p>
      <p><strong>Type:</strong> {character.type}</p>
      <p><strong>Readings:</strong></p>
      <ul>
        {/* {character.readings.map((reading, index) => (
          <li key={index}>
            Kana: {reading.kana}, Romaji: {reading.romaji}
          </li>
        ))} */}
        {character.readings.toString()}
      </ul>
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
        {character.examples.toString()}
      </ul>
    </div>
  );
}
