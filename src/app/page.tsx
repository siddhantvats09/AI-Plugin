
import Link from "next/link";

export default function Home() {
  return (
    <div className=" items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col justify-center items-center">
       <p className="text-[40px] text-white">Go to http://localhost:3000/chat</p>
       <p className="text-[40px] text-white mt-6">OR</p>
       <Link href={"/chat"}>
       <button className="mt-20 border-[2px] rounded-md border-white w-40 h-10 ">
        Click Here !
       </button>
       
       </Link>
      </main>
      
    </div>
  );
}
