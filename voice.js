for (var k = 0; k < masterArr.length; k++) {
    var msg = new SpeechSynthesisUtterance();   //Web Speech API
    msg.text = masterArr[k];

    console.log(masterArr[k]);

    // console.log(msg.text);

    window.speechSynthesis.speak(msg);
}