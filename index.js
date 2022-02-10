const findID = (x,y) => {
   let counterX = 0
   let num = 1
   if (x > 1) {
      do {
         num += counterX
         counterX += 1
      } while (counterX > 0 && counterX < x)
   }

   if (x === 1) {
      counterX += x
   }


   if (y > 1) {
      let counterY = 1
      do {
         num = num + counterX + counterY
         counterY += 1
      } while (counterY > 0 && counterY < y)
   }

   return num
}


console.log(findID(3, 3));