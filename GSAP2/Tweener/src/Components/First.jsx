import { useLayoutEffect, useRef } from "react" 
import gsap from "gsap"

const First = () => {
  // We can use useRef hook to create a reference for the root-level element
  const comp = useRef(null)

  useLayoutEffect(() => {
    // The function passed into useLayoutEffect runs after all DOM manipulations are done.
    // A GSAP context is created to scope the animations to the referenced element.
    // This allows for easy cleanup when the component is unmounted.
    let ctx = gsap.context(() => {
      // Creating a timeline. A timeline allows chaining multiple animations together.
      // It provides better control over animation sequencing than managing each animation individually.
      const t1 = gsap.timeline()

      // Animation 1: Move the slider from left (-100% x-axis) to its original position
      t1.from("#intro-slider", {
        xPercent: "-100",  // Translates the element 100% left from its width
        duration: 1.3,      // Animation will take 1.3 seconds
        delay: 0.3,         // Wait 0.3 seconds before the animation starts
      })

        // Animation 2: Fade-in effect for the title texts with a staggered slide-in
        .from(["#title-1", "#title-2", "#title-3"], {
          opacity: 0,        // Initial opacity is 0 (fully transparent)
          y: "+=30",         // Move the elements 30px downward initially
          stagger: 0.5,      // Delay each title’s animation by 0.5 seconds relative to the previous one
        })

        // Animation 3: Fade-out and move the titles back up
        .to(["#title-1", "#title-2", "#title-3"], {
          opacity: 0,        // Fade out the titles to opacity 0 (disappear)
          y: "-=30",         // Move the titles 30px upward during fade-out
          delay: 0.3,        // Wait 0.3 seconds before starting this sequence
          stagger: 0.5,      // Stagger effect to delay each title’s fade-out by 0.5 seconds
        })

        // Animation 4: Slide the entire slider off-screen to the left again
        .to("#intro-slider", {
          xPercent: "-100",  // Moves the slider 100% left off the screen
          duration: 1.3,     // Animation takes 1.3 seconds
        })

        // Animation 5: Fade in the "Welcome" text
        .from("#welcome", {
          opacity: 0,        // Start with 0 opacity (invisible)
          duration: 0.5,     // Fade in over 0.5 seconds
        })
    }, comp) // Scope the animations to the referenced component

    // Cleanup function to revert animations when the component is unmounted
    // This ensures no memory leaks or unwanted animation behavior.
    return () => ctx.revert()
  }, [])  // Empty dependency array means this effect runs once on component mount

  return (
    <div className="relative" ref={comp}>
 
      <div id="intro-slider" className=" p-10 bg-gray-50 absolute top-0 left-0 font-spaceGrotesk z-10 h-screen w-full flex flex-col gap-10 tracking-tight justify-center place-items-center">
        <h1 className="text-9xl" id="title-1">Software Engineer</h1>
        <h1 className="text-9xl" id="title-2"> Designer</h1>
        <h1 className="text-9xl" id="title-3"> Freelancer</h1>
      </div>
      
      <div className="h-screen flex bg-gray-950 justify-center place-items-center">
        <h1 id="welcome" className="text-9xl font-bold text-green-500 font-spaceGrotesk"> Welcome </h1>
      </div>
    </div>
  )
}

export default First
