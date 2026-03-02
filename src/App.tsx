import { useState, useCallback } from 'react'
import Header from './components/Header'
import IntroSection from './components/IntroSection'
import GangSelector from './components/GangSelector'
import SwitchPreview from './components/SwitchPreview'
import InputSection from './components/InputSection'
import EncodedOutput from './components/EncodedOutput'
import AuthorSection from './components/AuthorSection'
import BuyCoffeeSection from './components/BuyCoffeeSection'
import './App.css'

type GangCount = 2 | 3 | 4

export default function App() {
  const [gangCount, setGangCount] = useState<GangCount>(4)
  const [labels, setLabels] = useState<string[]>(['', '', '', ''])

  const handleGangCountChange = useCallback((count: GangCount) => {
    setGangCount(count)
    setLabels((prev) => {
      const next = Array.from({ length: count }, (_, i) => prev[i] ?? '')
      return next
    })
  }, [])

  return (
    <>
      <Header />
      <main>
        <IntroSection />
        <GangSelector gangCount={gangCount} onGangCountChange={handleGangCountChange} />
        <SwitchPreview gangCount={gangCount} labels={labels} />
        <InputSection gangCount={gangCount} labels={labels} onLabelsChange={setLabels} />
        <EncodedOutput gangCount={gangCount} labels={labels} />
        <AuthorSection />
        <BuyCoffeeSection />
      </main>
    </>
  )
}
