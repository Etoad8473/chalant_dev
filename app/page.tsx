import Link from "next/link";

export default function Home() {
  return (
    <>
    <div className="flex justif-center items-center flex-col">
      <p>hello, this is ezras website</p>
      <Link href="/manifesto">manifesto</Link>
      <Link href="/ideas">ideas</Link>
    </div>
    </>
  );
}
