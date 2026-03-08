import { ref, onMounted, onUnmounted } from 'vue'

export function useParallax(intensity: number = 30) {
  const backgroundPosition = ref('center center')

  const handleMouseMove = (event: MouseEvent) => {
    const { clientX, clientY } = event
    const { innerWidth, innerHeight } = window

    const xOffset = (clientX / innerWidth - 0.5) * intensity
    const yOffset = (clientY / innerHeight - 0.5) * intensity

    backgroundPosition.value = `calc(50% + ${xOffset}px) calc(50% + ${yOffset}px)`
  }

  onMounted(() => {
    window.addEventListener('mousemove', handleMouseMove)
  })

  onUnmounted(() => {
    window.removeEventListener('mousemove', handleMouseMove)
  })

  return { backgroundPosition }
}
