import './App.css'
import FetchUserList from './components/TestComponent'

function App() {


  const LOGGER = (resolve: Function) => {
    return async (parent: any, args: any, context: any, info: any) => {
      console.log(args)
      resolve(parent, args, context, info)
    }
  }

  return (
    <>
      <FetchUserList />
    </>
  )
}

export default App
