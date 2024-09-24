"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";


function Footer() {
    const route = useRouter()
    return(
        <>
        <h3>This is footer Page</h3>
        <hr />
        <h3>Through linking:</h3>
        <Link href="./navbar"> Go to navbar</Link>
        <hr />
        <h3>Through linking:</h3>
        <button onClick={()=>route.push("/navbar")}>Go To NAVBAR</button>
        </>
    )
}
export default Footer;