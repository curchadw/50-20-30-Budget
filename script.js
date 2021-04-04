const budget = (income) =>{
  let need = Math.floor(income*.50)
  let wants = Math.floor(income*.30)
  let savings = Math.floor(income*.20)

  return {need, wants, savings}
}