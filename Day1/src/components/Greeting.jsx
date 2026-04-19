import styles from "./Greeting.module.css"
export function Greeting({ name = 'Guest' }) {
  return <h1 className={styles.greet}>Hello, {name}!</h1>
}
