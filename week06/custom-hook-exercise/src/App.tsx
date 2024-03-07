import './App.css'
import LoginForm from '../components/LoginForm'
import { AuthProvider } from '../hooks/useAuth'

function App() {

  return (
    <>
    <AuthProvider>
      <LoginForm/>
    </AuthProvider>
    </>
  )
}

export default App
