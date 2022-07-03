import Link from "next/link";
import { signIn, signOut } from "next-auth/react";

const Header = () => {
  return (
    <nav className="shadow-sm px-3 py-8 bg-white">
      <div className="container mx-auto">
        <div className="flex justify-between">
          <h1 className="text-xl font-bold">
            Todo App using Next.js & mongodb
          </h1>
          <div>
            <ul className="flex gap-x-5">
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link href="/todos">
                  <a>todos</a>
                </Link>
              </li>
              <li>
                <Link href="/profile">
                  <a>profile</a>
                </Link>
              </li>
              <li>
                <button onClick={() => signIn()}>Sign in</button>
              </li>
              <li>
                <button onClick={() => signOut()}>Sign out</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
