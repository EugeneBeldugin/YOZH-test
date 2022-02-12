const solution = (x,y) => {
   const numbersInRow = x + y -1

   const lastNumberInRow = (numbersInRow * (numbersInRow + 1)) / 2

   const id = lastNumberInRow - x + 1

   return id.toString()
}

module.exports = solution;