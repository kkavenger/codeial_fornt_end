import styles from '../Styles/navbar.module.css';

export const Navbar = () => {

    return(
        <div className={styles.nav}>
            <div className={styles.leftDiv}>
                <a href='/'>
                    <img src = "https://ninjasfiles.s3.amazonaws.com/0000000000003454.png" alt="" />
                </a>
            </div>
            <div className={styles.rightNav}>
                <div className={styles.user}>
                    <a href='/'>
                        <img src="https://cdn-icons-png.flaticon.com/512/1144/1144709.png" alt="" className={styles.userDp}/>
                    </a>
                    <span>Kunal</span>
                </div>
                <div className={styles.navLinks}>
                    <ul>
                        <li>
                            <a href='/'>Log in</a>
                        </li>
                        <li>
                            <a href='/'>Log out</a>
                        </li>
                        <li>
                            <a href='/'>Register</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};