let example = {
  first : "나는",
  second : "날개달린",
  third : "호랑이다."
}

const objectList = Object.keys(example)
console.log(objectList) // [ 'first', 'second', 'third' ]

if(typeof(example) === "object") {
  const list = Object.keys(example)
  console.log(list) // [ 'first', 'second', 'third' ]
} else {
  console.log("example은 object 문자열이 아닙니다.")
}

