import NavBar from './components/nav_bar'
import Profile from './components/profile'
import Backgroundskills from './components/background_skills'
import Photos from './components/photos'
import Workeducourse from './components/work_educat_course'
import Quote from './components/quote'
import Letstalk from './components/Lets_talk'
import Footer from './components/footer'


import React ,{useEffect} from 'react'
function App() {

  useEffect(()=>{
    fetch('/api')
    .then((res)=>{return res.json()})
    .then((data)=>{console.log(data.employees)})
  },[]);


  return (
    <>
    <NavBar/>
    <Profile/>
    <Backgroundskills></Backgroundskills>
    <Photos/>
    <Workeducourse/>
    <Quote/>
    <Letstalk/>
    <Footer/>
    </>
  )
}

export default App;
