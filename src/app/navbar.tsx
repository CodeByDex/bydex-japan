"use client"

// CLSX conditional styling is not working
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function NavBar() {
    const pathName = usePathname();
    return (
        <nav>
            <Link
                href={"./character"}
                className={clsx(
                    '',
                    {
                        'text-blue-600': pathName === "./character"
                    }
                )}>
                Characters
            </Link>
            <Link
                href={"."}
                className={clsx(
                    '',
                    {
                        'text-blue-600': pathName === "."
                    }
                )}            >
                Home
            </Link>
        </nav>
    )
}