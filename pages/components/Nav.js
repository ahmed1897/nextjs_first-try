import Link from "next/link";
import { auth } from "../../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Image from "next/image";

export default function Nav() {
  const [user, loading] = useAuthState(auth);
  const myLoader = ({ src }) => {
    return user.photoURL;
  };
  return (
    <nav className="flex justify-between items-center py-10 bg-white">
      <Link href="/">
        <button className="text-lg font-medium px-9">Home</button>
      </Link>
      <ul className="flex items-center gap-10">
        {!user && (
          <Link
            href="/auth/login"
            className="py-2 px-4 text-sm bg-cyan-500 text-white rounded-lg font-medium ml-8"
          >
            login
          </Link>
        )}
        {user && (
          <div className="flex items-center gap-6">
            <Link href="/post">
              <button className="font-medium bg-cyan-500 bg-cyan rounded-lg text-white py-2 px-4 rounded-mg text-sm">
                Post
              </button>
            </Link>
            <Link href="/dashboard">
              <Image
                loader={myLoader}
                className="w-12 rounded-full cursor-pointer"
                src={user.photoURL}
                alt=""
                width={500}
                height={500}
              />
            </Link>
          </div>
        )}
      </ul>
    </nav>
  );
}
