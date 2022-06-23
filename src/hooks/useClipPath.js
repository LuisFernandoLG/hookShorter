export const useClipPath = () => {
  const clipboard = window.navigator.clipboard

  const copyToClipPath = ({ content }) => {
    clipboard.writeText(content)
  }

  return {
    copyToClipPath
  }
}
