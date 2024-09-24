"use client"
import Link from "next/link"
import { useRouter } from "next/navigation"


export  default function Navbar() {
    const  route = useRouter()
    return(
        <>
        <h2>This is the navbar page</h2>
        <hr />
        <h3>Through linking:</h3>
         <Link href="/">GO to home page</Link> 
         <br />
         <h3>Through linking:</h3>
        <button onClick={()=>route.push("/")}>GO to home</button>
        </>
    )
}