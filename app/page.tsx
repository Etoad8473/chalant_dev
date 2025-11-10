import Link from "next/link";

export default function Home() {
  return (
    <>
    <div className="">
      <p>hello, this is ezras website</p>
      <Link href="/manifesto">manifesto</Link>
      <br></br>
      <Link href="/ideas">ideas</Link>
    </div>
    </>
  );
}
