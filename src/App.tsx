import { Home } from './_root/pages';
import './globals.css';
import { Routes, Route } from "react-router-dom";

import SigninForm from './_auth/forms/SigninForm';
import SignupForm from './_auth/forms/SignupForm';

const App = () => {
  return (
    <main className='flex h-screen'>
        <Routes>
            {/* Public routes  */}
            <Route path="/sign-in" element={<SigninForm />} />
            <Route path="/sign-up" element={<SignupForm />} />

            {/* Private routes */}
            <Route path="/" element={<Home />} />
        </Routes>
    </main>
  )
}

export default App
  