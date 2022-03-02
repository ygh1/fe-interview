const name = 1

function foo () {
  var name = 2
  var obj = {
    name: 3,
    getName: () => {
      console.log(this.name)
    }
  }
  obj.getName()
}

foo()