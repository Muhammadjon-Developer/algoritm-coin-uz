import { Main, Saidbar, Navbar } from '../'

const HomePage = () => {
  
  return (
    <div className="grid grid-cols-6 h-screen overflow-hidden">
        <Saidbar/>
        <Navbar />
        <Main />
    </div>
  )
}

export default HomePage