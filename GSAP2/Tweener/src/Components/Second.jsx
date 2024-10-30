import { useRef, useLayoutEffect } from "react"
import gsap from "gsap"
const Second = () => {
    const comp = useRef(null)

    useLayoutEffect(()=> {
        let ctx = gsap.context(()=>{
            let t1 = gsap.timeline()


            
        },comp)
        return () => ctx.clear()
    
    }, [])

    return(
        <div className="relative"  ref={comp}>

            <div   className="flex flex-col justify-center place-items-center p-10 h-screen text-3xl w-full bg-purple-400 gap-5">
            <h1 className="text-red-500">Test 1</h1>
            <h1 className="text-red-500">Test 2</h1>
            <h1 className="text-red-500">Test 3</h1>
        </div>
        <div className="flex justify-center place-items-center h-screen w-full text-3xl bg-slate-300 ">
            <h1 className="text-red-500 bold">Welcome Stark</h1>
        </div>
        </div>

        

    )
}

export default Second