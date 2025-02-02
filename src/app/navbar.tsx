"use client"

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export function NavBar() {
    const pathName = usePathname();
    const [navFocus, setNavFocus] = useState<string | null>(null);

    return (
        <nav className='flex'>
            <div>
                <Link
                    href={"/"}
                    className={clsx('', { 'hover-bg-color': pathName === "/character" })}>
                    Kanado
                </Link>
            </div>
            <div
                onMouseEnter={() => setNavFocus("character")}
                onMouseLeave={() => setNavFocus(null)}
            >
                <Link
                    href={"/character"}
                    className={clsx('', { 'hover-bg-color': pathName === "/character" })}>
                    Characters
                </Link>
                {/* {navFocus === "character" && (
                    <div className='mt-4'>
                        <Link href={"/character/kana"}>Kana</Link>
                    </div>
                )} */}
            </div>
            <div
                onMouseEnter={() => setNavFocus("quiz")}
                onMouseLeave={() => setNavFocus(null)}
            >
                <Link
                    href={"/quiz"}
                    className={clsx('', { 'hover-bg-color': pathName === "/quiz" })}>
                    Quiz
                </Link>
                {navFocus === "quiz" && (
                    <div className='mt-4'>
                        <Link href={"/quiz/jst"}>Japan Study Tour</Link>
                        <Link href={"/quiz/katakana"}>Katakana</Link>
                        <Link href={"/quiz/hiragana"}>Hiragana</Link>
                        <Link href={"/quiz/kanji"}>Kanji</Link>
                        <Link href={"/quiz/n1"}>N1</Link>
                        <Link href={"/quiz/n2"}>N2</Link>
                        <Link href={"/quiz/n3"}>N3</Link>
                        <Link href={"/quiz/n4"}>N4</Link>
                        <Link href={"/quiz/n5"}>N5</Link>
                        <Link href={"/quiz/ap"}>AP</Link>
                    </div>
                )}
            </div>

        </nav>
    )
}