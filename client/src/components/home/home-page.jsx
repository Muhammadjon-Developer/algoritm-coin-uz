import { Main, Saidbar, Navbar} from  '../'

const HomePage = () => {
  return (
    <div className='w-screen h-screen overflow-hidden'>
      <Navbar/>
      <div className='flex h-full w-full'>
        <Saidbar/>
        <Main/>
      </div>
    </div>
  )
}

export default HomePage;