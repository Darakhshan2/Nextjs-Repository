"use client"
import React from 'react'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Card from './card/card';

function Home() {
  const  route = useRouter()
  return (
    <>
    <h1>THIS IS THE HOME PAGE</h1>
    <h2>LINKING Through Link tag</h2>
    <Link href="./about">GO to about</Link>
    <h2>Navigation through button</h2>
  {/* navigation through buttons or useRouter */}
  <button onClick={()=>route.push("/about")}>GO to about</button>

    <hr />
    <h3>Generated Card using props</h3>
    <Card name='JOHN' age={1} rollNo={111}/><br />
    <Card  name="walk" age={2} rollNo={444}/><br />
    <Card  name='smith' age={3} rollNo={333}/><br />
    <Card name='harry' age={4} rollNo = {2112 }/><br />

    </>
  )
}

export default Home
