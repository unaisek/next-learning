import Link from "next/link";


export default function Home () {
  return (
    <>
      <h1>Welcom Home!</h1>
      <Link href="/profile">Profile</Link>
    </>
  );
}