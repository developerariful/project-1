// import Image from "next/image";

import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <h1 className=""> Next Js App </h1>
      <h1> Mane Pages Root Router </h1>
      <Link href="/login" className="underline">
        Login
      </Link>
    </main>
  );
}

/*
flex min-h-screen flex-col items-center justify-between p-24

*/
