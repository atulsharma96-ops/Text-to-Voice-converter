// alert("sdfghjkl");

let inp = document.getElementById("inp");
function convert() {
    // alert(inp.value);
    let text = inp.value.trim(); // space ki values ko trim kiya
    let speech = new SpeechSynthesisUtterance(text); // speech API ko object ke through call kiya
    speech.lang = "hi-IN"; // voice language
    speech.rate = 1; // voice ki speed
    speech.pitch = 1; // voice ki smoothness
    speech.volume = 1; 
    window.speechSynthesis.speak(speech); // brouser ke through speek
}