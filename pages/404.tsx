import Link from "next/link";
import {useEffect} from "react";
import {useRouter} from "next/router";

const NotfoundPage = () => {

    const router = useRouter()

    useEffect(()=>{
        const timeout = setTimeout(() => {
            router.push('/')
        }, 5000)
        return ()=>clearTimeout(timeout)
    }, [])

  return (
      <>
          <div className={'not-found'}>
            <h1>Ops...</h1>
            <h2>Sorry, this page doesn&apos;t exist!</h2>
              <p>Please click <Link href={'/'}><span>go tohome page</span></Link> if it won&apos;t redirect you automatically in 5 seconds</p>
          </div>
      </>
  )
}

export default NotfoundPage