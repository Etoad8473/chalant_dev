import Link from "next/link";

export default function Home() {
  return (
    <>
    <div className="flex flex-col min-h-screen justify-center items-center">
      <div className="flex-grow flex-col text-center">
        <p>hello, this is ezras website</p>
        <Link className="block" href="/manifesto">manifesto</Link>
        <Link className="block" href="/ideas">ideas</Link>
      </div>
      <div className="">
        <p>no, there are no back buttons</p>
      </div>
    </div>

    </>
  );
}
