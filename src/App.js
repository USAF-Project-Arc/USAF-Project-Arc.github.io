// custom
import Context from './context/Context'
import TopNav from './nav/TopNav'
import Content from './content/Content'
import Homepage from './Homepage/Homepage'
import { Route, Routes } from 'react-router-dom'
import TeamView from './content/team/TeamView'

function App() {
  return (
    <Context>
      <TopNav />
      <Routes>
        <Route index element={<Homepage/>}/>
        <Route path='/content' element={<Content/>}/>
        <Route path='/cohorts' element={<TeamView/>}/>
      </Routes>
    </Context>
  )
}

export default App
