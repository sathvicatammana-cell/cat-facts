//we can do any request usning a method called fetch
async function apicall(){
 let res=await fetch('https://meowfacts.herokuapp.com/')//it will make a get rqst by default
let fin = await res.json()
document.getElementById('box').innerText=fin.data[0]
 console.log(fin.data[0])
 speechSynthesis.speak(new SpeechSynthesisUtterance(fin.data[0]))
}