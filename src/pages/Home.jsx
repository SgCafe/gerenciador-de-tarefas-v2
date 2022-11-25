import Sidebar from '../Components/Sidebar'
import Task from '../Components/Task'

import './Home.scss'

const Home = () => {
  return (
    <div className="home-container">
      <Sidebar />
      <Task />
    </div>
  )
}

export default Home
