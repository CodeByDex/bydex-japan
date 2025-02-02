"use client"

// CLSX conditional styling is not working
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function NavBar() {
    const pathName = usePathname();
    return (
        <nav className='flex'>
            <Link
                href={"/"}
                className={clsx(
                    '',
                    {
                        'hover-bg-color': pathName === "/"
                    }
                )}            >
                Kanado
            </Link>
            <Link
                href={"/character"}
                className={clsx(
                    '',
                    {
                        'hover-bg-color': pathName === "/character"
                    }
                )}>
                Characters
            </Link>
            <Link href={"/quiz"}
                className={clsx(
                    '',
                    {
                        'hover-bg-color': pathName === "/quiz"
                    }
                )}>
                Quiz
            </Link>
        </nav>
    )
}