import Link from "next/link";

export default function Home() {
  return (
    <>
    <head>
      <link rel="icon" href="/favicon.ico"/>
    </head>
    <div className="">
      <p>hello, this is ezras website</p>
      <Link href="/manifesto">manifesto</Link>
    </div>
    </>
  );
}
