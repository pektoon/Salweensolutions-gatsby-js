import React from "react"
import Header from "../components/Header";
import Introduction from "../components/Introduction";
import SoftwareProduct from "../components/Software-product";
import Technologies from "../components/Technologies";
import Headquarter from "../components/Headquarter";
import Awards from "../components/Awards";
import Team from "../components/Team";
import Jobs from "../components/Jobs"
import GoogleMap from "../components/Google-map"
import Footer from "../components/Footer"
import SEO from "../components/Seo"

export default function Home() {
  return (
    <>
      <SEO />
      <Header />
      <Introduction />
      <SoftwareProduct />
      <Technologies />
      <Headquarter />
      <Awards />
      <Team />
      <Jobs />
      <GoogleMap />
      <Footer />
    </>
  )
}
