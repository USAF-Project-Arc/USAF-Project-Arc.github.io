// custom
import Context from './context/Context'
import TopNav from './nav/TopNav'
import Content from './content/Content'
import { HashRouter } from 'react-router-dom'

function App() {
  return (
    <HashRouter>
      <Context>
        <TopNav />
        <Content />
      </Context>
    </HashRouter>
  )
}

export default App
