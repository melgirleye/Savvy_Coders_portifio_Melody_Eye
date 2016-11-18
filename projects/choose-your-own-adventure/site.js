var mainCharter= {
            "species":"human"
          };
var sideCharter={
          "species":"elf"
        };

mainCharter.name= prompt("What's your name");
sideCharter.name= prompt("Who is your companion for your epic adventure");

console.log(mainCharter);
console.log(sideCharter);

var story={
  "start":{
    "narrative":mainCharter.name + " and "+ sideCharter.name + " decide to storm Ossinga  Would like to go Horseback or crazy?",
            "prompt":" Would you like to go by Horseback or by crazy? "
          }

  "Horseback":{"narrative" mainCharter.name + " riding  in the carriage ",
                "prompt":"Would you like to charge into glorious battle or civil rights"
              "choice"{
                "good":"civil rights",
                "bad":"glorious battle",

              }}

  "civil rights": {
          "orangeMan": "orange man created unsafe enviroment for "+ mainCharter.species +" , " + sideCharter.name + " will save the day ",}
          "charge": mainCharter.name + " and "+ sideCharter.name + "go start civil rights movement",
          "retreat:": " We retreated and the kkk took over. ",
          "choice"
          {
          "good":"charge",
          "bad":"retreat",
        }

        },

    "glorous battle"{
      "kkk dies": mainCharter.name + " and "+ sideCharter.name +" go to battle and people die. ",

    }


 var runStory = (storyNode){ var response = prompt(story.start.narrative);

  if (response ==="Horseback"){
      console.log(story.Horseback.narrative);}
  else if (response === "crazy") {
    console.log(story.crazy.narrative);
  }
  else {
    alert("You didn't put in a valid option. Try again!")
  }
  }
