import { useState } from 'react'
import styles from './style.js'
import { Hero, Stats, Navbar, GetStarted, Testimonials, Footer, FeedbackCard, CTA, Clients, CardDeal, Button, Business, Billing } from './components';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-black text-white w-full overfow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-black text-white ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-black text-white ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App
