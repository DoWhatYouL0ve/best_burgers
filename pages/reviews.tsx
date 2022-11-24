import Head from "next/head";

type ReviewsPropsType = {
    reviews: Array<{
        body: string
        email: string
        id: number
        name: string
        postId: number
    }>
}

const Reviews = (props: ReviewsPropsType) => {

  return (
      <>
          <Head>
              <title>Best Burgers | Reviews</title>
              <meta name={'title'} content={'feedback from the clients about our burgers'}/>
          </Head>
          <div>
              <h1>Clients opinions</h1>
             <div className={'reviews'}>
                  {!!props.reviews.length && props.reviews.map(item => <div key={item.id} className={'review'}>
                      {item.id} {' '}
                      {`${item.body.slice(0, 90)}...`}
                  </div>)}
              </div>
          </div>
      </>
  )
}

export async function getServerSideProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/comments')
    const data = await response.json()

    return {
        props: {
            reviews: data.slice(0, 20)
        }
    }
}

export default Reviews