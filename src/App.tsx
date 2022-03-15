import styles from './App.module.css'
import poweredImage from './assets/powered.png'

const App = () => {
  return (
    <div className={styles.main}>
      <header>
        <div className={styles.header}>
          <img src={poweredImage} alt="" width={150} />
        </div>
      </header>

      <div className="container">

        <div className={styles.leftSide}></div>

        <div className={styles.rightSide}></div>

      </div>

    </div>
  )
}

export default App 