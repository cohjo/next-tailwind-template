import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <nav>
        <Link href="/about">about</Link>
        <Link href="/contact">contact</Link>
      </nav>
      <main>hello</main>

      <footer></footer>
    </div>
  )
}
