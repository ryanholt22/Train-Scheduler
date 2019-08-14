const firebaseConfig = {
  apiKey: "AIzaSyCGV5nd421AXKXz-sXEd4l1XoEOCbk28Hw",
  authDomain: "train-scheduler-3b693.firebaseapp.com",
  databaseURL: "https://train-scheduler-3b693.firebaseio.com",
  projectId: "train-scheduler-3b693",
  storageBucket: "",
  messagingSenderId: "407548590888",
  appId: "1:407548590888:web:721fee0adcea1563"
};

firebase.initializeApp(firebaseConfig);


var tFrequency = 5;
var firstTime = "06:30";
var FirstTimeConverted = moment(firstTime, "HH:mm").subtract(1, "years");
var currentTime = moment();
var diffTime = moment().diff(moment(FirstTimeConverted), "minutes");
var tRemainder = diffTime % tFrequency;
var minutesTillTrain = tFrequency - tRemainder;
var nextTrain = moment().add(minutesTillTrain, "minutes");
var database = firebase.database();

console.log(FirstTimeConverted);
console.log("current time is " + moment(currentTime).format("HH:mm"));
console.log("the difference in time is", diffTime);
console.log(tRemainder);
console.log("Minutes till train ", minutesTillTrain);
console.log("Next train arrives in " + moment(nextTrain).format("HH:mm"));


$("button").on("click", function input() {
  database.ref().set({
    currTime: currentTime.format("HH:mm"),
    freq: tFrequency,
    nextArrive: nextTrain.format("HH:mm"),
    MinAway: minutesTillTrain
  });
  var inpt1 = document.getElementById("inpt1");
  var inpt2 = document.getElementById("inpt2");
  var inpt3 = document.getElementById("inpt3");
  var inpt4 = document.getElementById("inpt4");
  console.log(inpt1, inpt2, inpt3, inpt4);
  document.getElementById("btn").addEventListener("click", database);

});

$("#currentTime").append(currentTime.format("LLLL"));
