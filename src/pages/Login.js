import styles from '../Styles/login.module.css';

export const Login = () => {
    return (
        <form className={styles.loginForm}>
            <span className={styles.loginSignupheader}>Log In</span>

            <div className={styles.field}>
                <input type="email" placeholder="Email" required></input>
            </div>

            <div className={styles.field}>
                <input type="password" placeholder="Password" required></input>
            </div>

            <div className={styles.field}>
                <button>Log In</button>
            </div>

        </form>
    )
}