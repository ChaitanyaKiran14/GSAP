import { useRef, useLayoutEffect } from 'react'
import gsap from "gsap"


import './App.css'

function App() {
  //we can use useRef hook to create reference for the root level element
  //useLayoutEffect hook is similar to useEffect hook but it fires after all the DOM Manipulations are done
  const comp = useRef(null)

  useLayoutEffect( () => {
    //the function that is passed into the useLayoutEffect will runs once again after the component mounts and then once again after it unmounts due to its empty dependency array
    //a gsap context is created inside the useLayoutEffect to record all GSAP animations that are that are setup during the context executon this allows for easy cleanup later on. 
    //GSAP Context takes in function and optional scope element here the scope is comp that we created. 
    //by setting the scope this ensures that all the animations that we make will only be effecting the children of the component referred to by the comp
    let ctx = gsap.context(() => {
      //creating timeline,  timeline in the provided code is a gap mechanism that allows for the creation of a sequence of animations which can be controlled as a whole the benefit of using a timeline is that it simplifies the process of creating complex sequences without dealing with a bunch of individual animation timings now it's time to add sequences to our timeline looking at look at what we want to achieve we know
      const t1 = gsap.timeline()






    },comp)


    // last line of our function has a return When the effect function is about to be unmounted or cleaned up it reverts the animations set up by the GP context this is a way to ensure that the animations do not persist when they shouldn't helping prevent potential memory leaks or unwanted behaviors 
  } , [])


  

  return (
    <> 
    <div ref={comp} className='relative '>
      <div id='introslider' className='flex flex-col justify-center place-items-center' >
      <h1 id='title1' className="text-3xl font-bold text-black ">Software Engineer</h1>
      <h1 id='title2' className="text-3xl font-bold text-black  "> Designer</h1>
      <h1 id='title3' className='text-3xl font-semibold text-black'> Freelancer </h1>
      </div>
      <div id='welcome' className='h-screen flex justify-center place-items-center '>
      <h1 className='text-9xl font-bold  text-green-500'> Welcome</h1>
    </div>
    </div>
   

    
    
    </>
  )
}

export default App
