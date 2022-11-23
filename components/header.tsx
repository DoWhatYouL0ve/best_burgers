import { GiHamburger } from "react-icons/gi";
import Link from "next/link";

const Header = () => {
  return (
      <>
          <header>
              <div>
                <GiHamburger/>
              </div>
              <nav>
                  <Link href={'/'}>Home</Link>
                  <Link href={'/burgers'}>Burgers Menu</Link>
                  <Link href={'/about'}>About Us</Link>
                  <Link href={'/reviews'}>Reviews</Link>
              </nav>
          </header>
      </>
  )
}

export default Header