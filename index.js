onEvent("nextBtn", "click", function() {
  var pNoun = getText("pNounOutput"); 
  var noun1 = getText("nOutput1");
  var noun2 = getText("nOutput2");
  var song = getText("songOutput");
  var verb = getText("verbOutput");
  console.log("nextbuttonclicked");
  var userMessage = "Learning to drive is a tricky process. There are a few rules you must follow."+ "\n"+ "\n" + "1. Keep two "+ pNoun+ " on the steering wheel at all times."+ "\n" +"\n" + "2. Step on the " + noun1+ " to speed up and the " + noun2 + " to slow down"+ "\n"+ "\n" +"3. Your parents will just LOVE it if you play" + song+ " on the radio." +"\n" + "\n"+"4. Make sure to honk your horn when you see " + verb +" on a street sign.";
  setText("displayOutput", userMessage);
  document.getElementById("form-input").classList.add("d-none");
  document.getElementById("resultContainer").classList.remove("d-none");
});

onEvent("startOver", "click", function() {
  setScreen("index.html");
  setText("pNounOutput","");
  setText("nOutput1","");
  setText("nOutput2","");
  setText("songOutput","");
  setText("verbOutput","");
  document.getElementById("form-input").classList.remove("d-none");
  document.getElementById("resultContainer").classList.add("d-none");
});