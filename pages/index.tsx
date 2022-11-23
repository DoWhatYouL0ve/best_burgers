import styles from '../styles/Home.module.css'
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Main Page</h1>
        <Link href={'/burgers'}>Burgers menu</Link>
    </div>
  )
}
