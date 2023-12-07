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

function typeB(object) {
  if(typeof(object) === "object") {
    const keyList = Object.keys(example)
    // 콘솔을 안찍어도 참일때 리턴 값을 확인할 수 있다.
    //console.log(keyList)
    return `이 매개변수는 객체입니다.`
  } else {
    return "이 매개변수는 객체가 아닙니다."
  }
}

let Inspect = typeB(example);
console.log(Inspect)