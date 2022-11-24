import styles from '../styles/Home.module.css'
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";


export default function Home() {
  return (
      <>
          <Head>
              <title>Best Burgers | Home page</title>
              <meta name={'title'} content={'Best Burgers'}/>
          </Head>
          <div className={styles.container}>
              <h1 className={`${styles.title} font-effect-fire-animation`}>Best Burgers here!</h1>
              <div className={styles.mainImage}>
                  <Image src={`/fatburger.png`} alt="fat burger" width={400} height={300}/>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid amet, dolorem doloremque doloribus error excepturi maiores maxime necessitatibus nihil nobis placeat quas suscipit. Accusantium aut distinctio dolorem harum maiores velit?</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur ducimus explicabo inventore laboriosam omnis praesentium reiciendis voluptate voluptates voluptatum. Delectus, pariatur rerum! Assumenda, ducimus libero odio rerum sint tenetur totam?</p>
              <Link href={'/burgers'}><span className={styles.btn}>Burgers menu</span></Link>
          </div>
      </>
  )
}
