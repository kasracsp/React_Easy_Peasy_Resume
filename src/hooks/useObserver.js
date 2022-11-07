import { useEffect,useState } from "react";

const useObserver=(ref,thresh)=>{
  const [isIntersecting,setIsIntersecting]=useState(false)
  const options={
    rootMargin:'-200px 0px 0px 0px',
    threshold:thresh,
  }
  const observer = new IntersectionObserver(([entry]) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      setIsIntersecting(entry.isIntersecting);
    }
  }, options);
    useEffect(()=>{
      observer.observe(ref.current)
      
      return ()=> observer.disconnect()
  },[])

  return isIntersecting
}

export default useObserver