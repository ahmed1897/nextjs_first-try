import Image from "next/image";
import { auth } from "../../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
export default function Message({ children, avatar, username, description }) {
  const [user, loading] = useAuthState(auth);

  return (
    <div className="bg-white p-8 border-b-2 rounded-lg">
      <div>
        <Image
          
          className="w-10 rounded-full"
          src={{avatar}}
          width={500}
          height={500}
          alt=""
        />
        <h2>{username}</h2>
      </div>
      <div className="py-4">
        <p>{description}</p>
      </div>
      {children}
    </div>
  );
}
