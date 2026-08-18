import { useEffect, useRef, useState } from 'react'
 
// Hook que detecta quando um elemento entra na tela
// e retorna se ele está visível ou não.
// Usado para animar os cards de serviço ao rolar a página.
export function useScrollAnimation<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null)
  const [isVisible, setIsVisible] = useState(false)
 
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Quando o elemento aparece na tela, marca como visível
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect() // Para de observar depois de aparecer
        }
      },
      { threshold: 0.1 } // Aciona quando 10% do elemento está visível
    )
 
    if (ref.current) {
      observer.observe(ref.current)
    }
 
    return () => observer.disconnect()
  }, [])
 
  return { ref, isVisible }
}