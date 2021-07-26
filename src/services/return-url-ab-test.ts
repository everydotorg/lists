export const getShouldAddReturnUrlAbTest = () => {
  const rnd = Math.random()
  return rnd > 0.75
}
