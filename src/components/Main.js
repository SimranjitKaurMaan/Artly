import { Footer } from "./customComponents/Footer"
import { HeaderNavBar } from "./customComponents/HeaderNavBar"
import { Banner } from "./home /Banner"
import { Collection } from "./home /Collection"
import { Trending } from "./home /Trending"

export const Main = () => {
    return <>
            <HeaderNavBar/>
              <main>
                  <div className="main-container flex-col-wrap-center">
                    <Banner/>
                    <Collection/>
                    <Trending/>
                  </div>
              </main>
            <Footer/>
        </>
}