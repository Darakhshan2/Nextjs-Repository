import React from 'react'

import Page from "./components/card";

function Home() {
  return (
    <>
    <Page Name='Darakhshan' age={15} RollNo={134} Quarter='Q2' image="./me.webp"/>
    <br />
    <Page Name='Minal' age={14} RollNo={14} Quarter='Q2' image="./crad1.jpg"/>
    <br />
    <Page Name='HARRY' age={33} RollNo={10} Quarter='Q2' image="./card3.jpg"/>
    </>
  )
}

export default Home

