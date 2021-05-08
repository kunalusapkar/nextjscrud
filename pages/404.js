import Layout from '@/components/Layout'
import { FaExclamation } from 'react-icons/fa'
import Link from 'next/link'
import styles from '@/styles/404.module.css'
export default function NotFoundPage(){
    return(
        <Layout title='Page Not Found'>
            <div className={styles.error}>
                <h1><FaExclamation/>404</h1>
                <h4>Sorry nothing here</h4>
                <Link href="/">Go Back Home</Link>
            </div>
        </Layout>
    )
}