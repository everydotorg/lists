export const getDefaultAmountAbTest = () => {
  const rnd = Math.random()
  return rnd > 0.5 ? 25 : 0
}
