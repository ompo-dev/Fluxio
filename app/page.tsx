import { Banner } from "./components/Banner"
import Footer from "./components/Footer"
import Header from "./components/Header"
import HiNameDay from "./components/HiNameDay"
import { Recomended } from "./components/Recommended"
import { Schedules } from "./components/Schedules"
import Searchbar from "./components/Searchbar"
import { Tabs } from "./components/Tabs"

export default function Home() {
  return (
    <main className="max-w-[430px]">
      <Header />
      <HiNameDay />
      <Searchbar />
      <Tabs />
      <Banner />
      <Schedules />
      <Recomended />
      <Footer />
    </main>
  )
}
