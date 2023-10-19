import Link from "next/link";

export default function Home() {
  return (
    <>
      <Link href="/ssr">Player with SSR</Link>
      <br />
      <Link href="/nossr">Player without SSR</Link>
      <br />
      <Link href="/rsc">Player in App directory (RSC)</Link>
    </>
  )
}