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
    let ctx = gsap.context(() => {},comp)


    //last line of our function will contain the return...when the function is about to be unmounted or cleaned up it reverts the animations setup by the GSAP Context 
  } , [])


  

  return (
    <> 
    <div className='relative '>
      <div className='flex flex-col justify-center place-items-center' >
      <h1 className="text-3xl font-bold text-black ">Software Engineer</h1>
      <h1 className="text-3xl font-bold text-black  "> Designer</h1>
      <h1 className='text-3xl font-semibold text-black'> Freelancer </h1>
      </div>
    </div>

    
    
    </>
  )
}

export default App
