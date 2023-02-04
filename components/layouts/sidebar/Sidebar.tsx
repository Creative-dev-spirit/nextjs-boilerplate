import Link from 'next/link'
import styles from './Sidebar.module.css'

export interface ISidebar {}

const Sidebar: React.FC<ISidebar> = () => {
    return (
        <nav className={styles.nav}>
            <input className={styles.input} placeholder="Search..." />
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
        </nav>
    )
}

export default Sidebar
