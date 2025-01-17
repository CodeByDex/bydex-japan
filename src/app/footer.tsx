import Image from "next/image";
import Link from "next/link";

export function Footer() {
    return (
        <footer className="flex gap-6 flex-wrap items-center justify-center">
        <Link
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/sources"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src={`${process.env.NEXT_PUBLIC_basePath}/file.svg`}
            alt="File icon"
            width={16}
            height={16}
          />
          Sources
        </Link>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/CodeByDex/bydex-japan"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src={`${process.env.NEXT_PUBLIC_basePath}/globe.svg`}
            alt="Globe icon"
            width={16}
            height={16}
          />
          Support this App
        </a>
      </footer>
    )
}