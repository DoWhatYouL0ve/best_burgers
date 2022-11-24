import Link from "next/link";

const NotfoundPage = () => {
  return (
      <>
          <div className={'not-found'}>
            <h1>Ops...</h1>
            <h2>Sorry, this page doesn&apos;t exist!</h2>
              <p>Go to <Link href={'/'}><span>home page</span></Link></p>
          </div>
      </>
  )
}

export default NotfoundPage