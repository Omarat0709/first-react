import { createRoot } from 'react-dom/client'
import Header from './header.jsx'
import Footer from './footer.jsx'
import MainContent from './mainContent.jsx'
import './index.css'
import App from './App.jsx'



function Page(){
  return (
    <>
      <Header />
      <MainContent />
      <Footer />
    </>
  )
}


createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>,
  <Page />
)
