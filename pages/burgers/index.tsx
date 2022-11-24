import Head from "next/head";
import Link from "next/link";
import styles from './../../styles/Burgers.module.css'
import Image from "next/image";

export const getStaticProps = async () => {
    const res = await fetch('http://localhost:5000/items')
    const data = await res.json()

    return {
        props: {
            burgers: data
        }
    }
}

type BurgersPagePropsType = {
    burgers: Array<{
        name: string
        image: string
        desc: string
        price: number
        id: string
    }>
}

const BurgersPage = (props: BurgersPagePropsType) => {
    return (
        <>
            <Head>
                <title>Best Burgers | Our Burgers</title>
                <meta name={'title'} content={'All our burgers menu'}/>
            </Head>
            <div>
                <h1>Our Burgers</h1>
                {props.burgers.map(item => {
                    return <Link key={item.id} href={`/burgers/${item.id}`} legacyBehavior>
                        <a className={styles.burgerCard}>
                            <div className={styles.imageContainer}>
                                <Image
                                    src={item.image}
                                    width={100}
                                    height={100}
                                    layout={'responsive'}
                                    objectFit={'cover'}
                                    alt={'image'}/>
                            </div>
                            <div>
                                <h3>{item.name}</h3>
                                <p>{item.desc}</p>
                            </div>
                        </a>
                    </Link>
                })}
            </div>
        </>
    )
}

export default BurgersPage