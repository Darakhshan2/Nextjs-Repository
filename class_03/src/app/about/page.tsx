"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

function Page() {
    const route = useRouter()
    return (
        <>
        <h1>THIS IS THE ABOUT PAGE</h1>
        <hr />
        <h2>LINKING Through Link tag</h2>
        <br />
        <Link href="./contact">GO to contact </Link>
        <br />
        <h3>Navigation:</h3>
      <button onClick={()=>route.push("/contact")}>Go to contact page</button>
        </>
        
    )
}

export default Page
