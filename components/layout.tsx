import {ReactNode} from "react";
import Header from "./header";
import Footer from "./footer";

type LayoutPropsType = {
    children: ReactNode
}

const Layout = ({children}: LayoutPropsType) => {
  return (
      <>
          <div className={'content'}>
              <Header/>
              {children}
              <Footer/>
          </div>
      </>
  )
}

export default Layout