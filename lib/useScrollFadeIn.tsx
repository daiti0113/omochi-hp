import {useEffect} from "react"

export const scrollFadeIn = () => {
    const callback = function (entries) {
        console.log(entries)
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate-slideIn")
            } else {
                entry.target.classList.remove("animate-slideIn")
            }
        })
    }
  
    const observer = new IntersectionObserver(callback)
  
    const targets = document.querySelectorAll(".show-on-scroll")
    targets.forEach(function (target) {
        observer.observe(target)
    })
}

export const useScrollFadeIn = () => {
    useEffect(() => {
        scrollFadeIn()
    }, [])
}
