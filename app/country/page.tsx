

import Link from "next/link";
export default function Country() {
    return(
        <>
           <h1 className="text-center text-3xl">List Of Country Name</h1>
           <h2><Link href="/country/Pakistan">1. Pakistan</Link></h2>
           <h2><Link href="/country/india">2.India</Link></h2>
           <h2><Link href="/country/canada">3.Canada</Link></h2>
           <h2><Link href="/country/america">4.America</Link></h2>
           <h2><Link href="/country/bangladesh">5.Bangladesh</Link></h2>
        </>
    );
}