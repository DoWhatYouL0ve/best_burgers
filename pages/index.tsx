import styles from '../styles/Home.module.css'
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={`${styles.title} font-effect-fire-animation`}>Best Burgers here!</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid amet, dolorem doloremque doloribus error excepturi maiores maxime necessitatibus nihil nobis placeat quas suscipit. Accusantium aut distinctio dolorem harum maiores velit?</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur ducimus explicabo inventore laboriosam omnis praesentium reiciendis voluptate voluptates voluptatum. Delectus, pariatur rerum! Assumenda, ducimus libero odio rerum sint tenetur totam?</p>
      <Link href={'/burgers'}><span className={styles.btn}>Burgers menu</span></Link>
    </div>
  )
}
