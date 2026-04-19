import styles from "./Cards.module.css"
export function Cards({ Card }) {
  function handleClick(Card) {
    console.log("Enrolled", Card.title);
  }
  return (
    <div className={styles.cardHead}>
      {Card.map((Card, index) => {
        return <div className={styles.card} key={index}>
          <h1 className={styles.head}>{Card.title}</h1>
          <p className={styles.para}>{Card.description}</p>
          <button className={styles.btn} onClick={() => handleClick(Card)}>Enroll Now</button>
        </div>
      }
      )
      }
    </div >
  )
}