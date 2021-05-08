
import Link from 'next/link'
export default function AboutPage(){
    return(
        <div>
            <h1>About us</h1>
            <p>App to find latest event happening in city</p>
            <p>Version:1.0.0</p>
            <Link href ='/'>Home</Link>
        </div>
    )
}