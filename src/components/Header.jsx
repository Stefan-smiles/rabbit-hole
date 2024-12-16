import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-800 text-white shadow-lg">
      <nav className="container mx-auto p-4 flex justify-center space-x-8">
        <Link
          href="/"
          className="hover:text-gray-300 transition-colors duration-300 font-semibold"
        >
          Home
        </Link>
        <Link
          href="/tv&film"
          className="hover:text-gray-300 transition-colors duration-300 font-semibold"
        >
          TV & Film
        </Link>
        <Link
          href="/profile"
          className="hover:text-gray-300 transition-colors duration-300 font-semibold"
        >
          Profile
        </Link>
        <Link
          href="/about"
          className="hover:text-gray-300 transition-colors duration-300 font-semibold"
        >
          About
        </Link>
      </nav>
    </header>
  );
}
