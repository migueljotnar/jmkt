import { useEffect, useRef } from 'react'

// Trava o scroll do body e permite fechar com Escape enquanto `active` for
// true. Usado por overlays (menu mobile, lightbox de fotos). `onDismiss` é
// lido via ref para não recriar o listener a cada render do consumidor.
export function useEscapeAndScrollLock(active: boolean, onDismiss: () => void) {
  const onDismissRef = useRef(onDismiss)

  useEffect(() => {
    onDismissRef.current = onDismiss
  }, [onDismiss])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onDismissRef.current()
    }

    if (active) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [active])
}
