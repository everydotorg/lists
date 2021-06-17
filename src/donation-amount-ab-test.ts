export const getDefaultAmountAbTest = () => {
  const defaultAmount = localStorage.getItem('defaultAmount')

  return defaultAmount ? +defaultAmount : executeABTest()
}

const executeABTest = () => {
  const rnd = Math.random()
  let defaultAmount = '0'
  if (rnd > 0.5) {
    defaultAmount = '25'
  }

  localStorage.setItem('defaultAmount', defaultAmount)
  return +defaultAmount
}
