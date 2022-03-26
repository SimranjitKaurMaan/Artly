import { HeaderNavBar } from "./customComponents/HeaderNavBar"
import { Banner } from "./home /Banner"
import { Collection } from "./home /Collection"
import { Trending } from "./home /Trending"

export const Main = () => {
    return <>
        <HeaderNavBar/>
        <Banner/>
        <Collection/>
        <Trending/>
      </>
}