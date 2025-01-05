'use client';

import React from 'react';
import { character } from '@lib/definitions';

interface CharacterComponentProps {
  character: character;
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
        <ul>
          {/* {character.readings.map((reading, index) => (
          <li key={index}>
            Kana: {reading.kana}, Romaji: {reading.romaji}
          </li>
        ))} */}
          {character.readings.join(', ')}
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
          {character.examples.join(', ')}
          </ul>
      </div>
    </div >
  );
}

/*
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Card Layout</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-100 p-6">
  <div class="max-w-lg mx-auto bg-white rounded-lg shadow-md p-4 flex">
    <!-- Left Side: ID -->
    <div class="w-16 flex items-center justify-center bg-blue-100 text-blue-600 font-bold text-xl rounded-l-lg">
      1
    </div>
    
    <!-- Right Side: Details -->
    <div class="flex-1 p-4">
      <h2 class="text-lg font-semibold text-gray-800">Card Title</h2>
      <p class="text-sm text-gray-600">Description or additional fields go here.</p>
    </div>
  </div>
</body>
</html>

*/