import { useRef, useLayoutEffect } from "react"
import gsap from "gsap"
const Second = () => {
    const comp = useRef(null)

    useLayoutEffect(()=> {
        let ctx = gsap.context(()=>{
            let t1 = gsap.timeline()
            t1.from('#intro', {
                xPercent: "-100",
                duration : 1.3,
                delay : 0.3,

            })
            .from(['#text1', '#text2', '#text3'], {
                opacity : 0,
                x: "+=30",
                stagger : 0.5,
            })
            .to(['#text1', '#text2', '#text3'],{
                opacity : 0,
                x: "-=30",
                delay : 0.3,
                stagger : 0.5,
            })

            .to("#intro", {
                yPercent : "-100", 
                delay : 0.3,
                duration : 1,
            })

            .from('#welcome', {
                opacity : 0,
                delay : 0.5, 
            })
        },comp)
        return () => ctx.revert()
    
    }, [])

    return(
        <div className="relative"  ref={comp}>

            <div id="intro" className="flex flex-col justify-center place-items-center p-10 h-screen text-3xl w-full bg-purple-400 gap-5  absolute ">
                <h1 id="text1" className="text-red-500">Test 1</h1>
                <h1  id="text2" className="text-red-500">Test 2</h1>
                <h1 id="text3" className="text-red-500">Test 3</h1>
        </div>
        <div id="welcome" className="flex justify-center place-items-center h-screen w-full text-3xl bg-slate-300 ">
            <h1 className="text-green-600 bold">Welcome Stark</h1>
        </div>
        </div>

        

    )
}

export default Second