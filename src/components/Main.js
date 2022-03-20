import { Artist } from "./home /Artist"
import { Banner } from "./home /Banner"
import { Collection } from "./home /Collections"
import { Trending } from "./home /Trending"

export const Main = () => {
    return <>
        <Banner/>
        <Collection/>
        <Trending/>
        <Artist/>
      </>
}