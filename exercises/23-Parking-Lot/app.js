let parkingState = [
  [1, 0, 1, 1],
  [0, 0, 0, 2],
  [1, 1, 2, 1],
  [2, 1, 1, 1]
]

// Your code here
function getParkingLotState(parkingArray) {
  let state = {
    totalSlots: 0,
    avaiableSlots: 0,
    occupiedSlots: 0
  }
    
  for (let i = 0; i < parkingArray.length; i++)
      for (let j = 0; j < parkingArray[i].length; j++) {
        if (parkingArray[i][j]===2) {
          state.avaiableSlots += 1
          state.totalSlots += 1
        }
        else if (parkingArray[i][j] === 1) {
          state.occupiedSlots += 1
          state.totalSlots += 1
        }
      }
    
  return state
}

console.log(getParkingLotState(parkingState));

