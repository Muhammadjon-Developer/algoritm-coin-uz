import { HomePage, Login } from "./components";
import { Routes, Route } from 'react-router-dom';

const App = () => {

  const user = true;

  if(user) return <HomePage/>;
  return (
        <>
          <Routes>
            <Route path="/" element={<Login/>}/>
          </Routes>
        </>
  )
}

export default App