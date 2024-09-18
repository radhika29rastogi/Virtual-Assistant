  let btn= document.querySelector("#btn");
  let content=document.querySelector("#content");
  let voice=document.querySelector("#voice");


  function speak(text){
    let speech=new SpeechSynthesisUtterance();
    speech.text=text;
    speech.lang='hi-GB';
    speech.volume=1;
    speech.rate=1;
    speech.pitch=1;
    // speechSynthesis.speak(speech);
    window.speechSynthesis.speak(speech);
 }
 function wishMe(){
    let today=new Date();
    let hour=today.getHours();
    if(hour>=0 && hour<12){
      speak("Good Morning Mam");
    }else if(hour>=12 && hour<16){
      speak("Good Afternoon Mam");
    } else{
      speak("Good Evening Mam");
    }
 } 
 window.addEventListener('load',()=>{
    wishMe();
 })
 let speechRecognition = window.speechRecognition || window.webkitSpeechRecognition
 let recognition = new speechRecognition();
 recognition.onresult =(event)=>{
   let currentIndex=event.resultIndex 
   let transcript = event.results[currentIndex][0].transcript
   content.innerText = transcript
   console.log(event)
   takeCommand(transcript)
 }
 btn.addEventListener('click',()=>{
    recognition.start();
    btn.style.display="none"
    voice.style.display="block"
 });

 function takeCommand(message) {
    let lowerMessage = message.toLowerCase(); // Convert to lowercase
    btn.style.display="flex"
    voice.style.display="none"

    if (lowerMessage.includes("hello") || lowerMessage.includes("hey")) {
        speak("Hello Mam, How can I help you?");
    }
    else if (lowerMessage.includes("who are you")) {
        speak("I am Jsgenie, your virtual assistant, created by Radhika Mam.");
    }
    else if (lowerMessage.includes("how are you")) {
        speak("As your virtual assistant I am always here and ready to help How can I assist you today?");
    }
    else if (lowerMessage.includes("open youtube")) {
        speak("Opening YouTube for you");
        window.open("https://youtube.com/", "_blank");
    }
    else if (lowerMessage.includes("open instagram")) {
        speak("Opening Instagram for you");
        window.open("https://www.instagram.com/", "_blank");
    }
    else if (lowerMessage.includes("open facebook")) {
        window.open("https://www.facebook.com/", "_blank");
        speak("Opening Facebook for you");
    }
    else if (lowerMessage.includes("open google")) {
        window.open("https://www.google.com/", "_blank");
        speak("Opening Google for you");
    }
    else if (lowerMessage.includes("open calculator")) {
        window.open("calculator://");
        speak("Opening Calculator for you");
    }
    else if (lowerMessage.includes("time")) {
        let time = new Date().toLocaleString(undefined, {hour:"numeric", minute:"numeric"})
            speak(`The current time is ${time}`);
    }
    else if (lowerMessage.includes("date")) {
        let date = new Date().toLocaleString(undefined, {day:"numeric", month:"numeric", year:"numeric"})
            speak(`The current time is ${date}`);
    }
    else if (lowerMessage.includes("what is your name")) {
            speak("My name is JSgenie");
    }
    else if(message){
        speak(`This is what I found on internet Regarding ${message}`)
        window.open(`https://www.google.com/search?q=${message}`);    
    }
    else{
        speak("I'm sorry, I didn't understand that. Please try again.");
    }
}
