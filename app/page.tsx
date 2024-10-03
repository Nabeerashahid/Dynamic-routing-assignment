
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="text-center text-red-900 text-4xl"> Assignment! </h1>
          <br></br>
          <hr />
      <ul>

        <li className="text-purple-500 text-3xl text-center">
          <Link href="/country">Country</Link>
        </li>

        <li className="text-blue-500 text-2xl text-center">
          <Link href="/country/Pakistan">Pakistan</Link>
        </li>
        <li className="text-blue-500 text-2xl text-center">
          <Link href="/country/india">India</Link>
        </li>

        <li className="text-blue-500 text-2xl text-center">
          <Link href="/country/canada">Canada</Link>
        </li>

        <li className="text-blue-500 text-2xl text-center">
          <Link href="/country/america">America</Link>
        </li>
        <li className="text-blue-500 text-2xl text-center">
          <Link href="/country/bangladesh">Bangladesh</Link>
        </li>
      </ul>
    </div>
  )
}