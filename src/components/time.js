const times = [];
console.log(times)
let i = 0;
let j = 0;
while (i < 24) {
  for (let index = 0; index < 4; index++) {
    j++;
    times.push({
      hours: i % 12,
      minutes: index * 15,
      meridiem: i <= 12 ? "am" : "pm",
      // hours24: i,
      j,
    });
  }
  i++;
}
export default times;