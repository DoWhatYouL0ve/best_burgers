import Head from "next/head";
import styles from './../../styles/Burgers.module.css'
import Image from "next/image";

type BurgerDataType = {
    name: string
    image: string
    desc: string
    price: number
    id: string
}

export const getStaticPaths = async () => {
    const res = await fetch('http://localhost:5000/items')
    const data = await res.json()

    const paths = data.map((item: BurgerDataType) => ({params: {id: item.id}}))

    return {
        paths,
        fallback: false
    }
}

type BurgerParamsDataType = {
    params: BurgerDataType
}

export const getStaticProps = async (context: BurgerParamsDataType) => {
    const id = context.params.id
    const res = await fetch(`http://localhost:5000/items/${id}`)
    const data = await res.json()

    return {
        props: {burger: data}
    }
}

type BurgerItemDataType = {
    burger: BurgerDataType
}

const BurgerDetails = (props: BurgerItemDataType) => {
  return (
      <>
          <Head>
              <title>Best Burgers | Description</title>
              <meta name={'title'} content={'Information about our cheeseburgers'}/>
          </Head>
          <div className={styles.singleBurger}>
              <h1>{props.burger.name}</h1>
              <div className={styles.imageContainer}>
                <Image src={props.burger.image} alt={'image'} width={200} height={200} layout={'cover'}/>
              </div>
              <div>
                 <p>{props.burger.desc}</p>
                  <p>{props.burger.price + ' euro'}</p>
              </div>
          </div>
      </>
  )
}

export default BurgerDetails