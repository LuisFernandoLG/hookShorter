export const isEnvLocalhost = () => {
  return (location.hostname === 'localhost' || location.hostname === '127.0.0.1')
}
