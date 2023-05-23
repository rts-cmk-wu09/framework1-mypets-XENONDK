

import './App.css'
import Button from './components/Button'
import Heading from './components/Heading'
import Image from './components/Image'

function App() {

  return (
    <>
    <section>
      <Image src="../src/assets/cat.jpg" height={350} />
      <Heading as="h1" />
      <p>Taking care of a pet is my favorite, helps me to gaimr stress and fatigue</p>
      <Button />
      </section>
    </>
  )
}

export default App
