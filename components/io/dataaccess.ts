"use client"

import characterDatabase from "../../public/data/characterDatabase";
import {character} from "@lib/definitions"
import { useEffect } from "react";

const dbFileName = "JapanStudyCharacterDictionary";

export function GetDictionaryFromStorage(){
    const result = sessionStorage.getItem(dbFileName)

    if (!result)
        return sessionStorage.getItem(dbFileName);
    else
    {
        const characters: character[] = JSON.parse(result);

        return characters;
    }    
}

export function LoadDictionaryToStorage(){
    sessionStorage.setItem(dbFileName, JSON.stringify(characterDatabase))
}

export function CheckStorage() {
    useEffect(() => {
        if(!GetDictionaryFromStorage())
          LoadDictionaryToStorage();
      })

      return null;
}

