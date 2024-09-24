"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";

function Contact() {
    const route = useRouter()
    return(
        <>
        <h2>This is the contact page</h2>
        <hr />
        <h3>Through linking:</h3>
        <Link href="./footer">Go to footer page</Link>
        <br />
        <h3>Navigation:</h3>
      <button onClick={()=>route.push("/footer")}>Go to Footer page</button>
        </>
    )
}

export default Contact;