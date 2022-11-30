// custom
import Context from './context/Context'
import TopNav from './nav/TopNav'
import Content from './content/Content'

function App() {
  return (
    <Context>
      <TopNav />
      <Content />
    </Context>
  )
}

export default App
