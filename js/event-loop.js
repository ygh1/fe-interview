console.log('script start')
setTimeout(() => {
  console.log('settimeout')
})
new Promise((resove) => {
  console.log('promise1')
  resove()
}).then(() => {
  console.log('promise2')
}).then(() => {
  console.log('promise3')
})


console.log('script end')