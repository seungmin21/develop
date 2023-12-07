let example = {
  first : "나는",
  second : "날개달린",
  third : "호랑이다."
}

console.log(typeof(example)); // object
console.log(typeof(typeof(example))); // string

function b(object) {
  if(typeof(object) === "object") {
    // 문자열 속성을 배열로 반환한다.
    let keyList = Object.keys(object);
    console.log(keyList);

    return "이 매개변수는 객체입니다."
  } else {
    return "이 매개변수는 객체가 아닙니다."
  }
}
console.log(b(example));