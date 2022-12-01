import Image from "next/image";
export default function Message({ children, avatar, username, description }) {

  return (
    <div className="bg-white p-8 border-b-2 rounded-lg">
      <div>
        <Image className="w-10 rounded-full" 
        src="" width={500} height={500} alt="" />
        <h2>{username}</h2>
      </div>
      <div className="py-4">
        <p>{description}</p>
      </div>
      {children}
    </div>
  );
}
