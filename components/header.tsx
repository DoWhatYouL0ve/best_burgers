import { GiHamburger } from "react-icons/gi";

const Header = () => {
  return (
      <>
          <header>
              <div>
                <GiHamburger/>
              </div>
              <nav>
                  <a>Home</a>
                  <a>Burgers Menu</a>
                  <a>About Us</a>
                  <a>Reviews</a>
              </nav>
          </header>
      </>
  )
}

export default Header