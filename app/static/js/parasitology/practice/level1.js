var congratulations = ["You've hit an egg!", "Way to go!", "Awesome!", "You're an expert!",
                        "Hooray!", "Well done!", "That's what I'm talkin' bout.", "Good job bro!"];
var boos = ["Nope, try again.", "Nice try, but nope!", "Good hustle, try again!", "That was close."];
imageClickHandler = function(event) {
  var egg;
  var clickedEgg = {'eggType': event.target.eggType,
                      'objType': event.target.objType,
                      'x': event.target.x,
                      'y': event.target.y,
                      'identifier': event.target.identifier,
                      'infoId': event.target.infoId
                    };

  vm.lastFoundEggInfoId(clickedEgg.infoId);
  var eggExist = false;
  if(vm.foundEggs().length === 0) {
    vm.foundEggs.push(clickedEgg);
  } else {
    for(var i=0; i<vm.foundEggs().length; i++) {
      egg = vm.foundEggs()[i];
      if(clickedEgg.identifier === egg.identifier) {
        eggExist = true;
        break;
      }
    }
    if(eggExist !== true) {
      vm.foundEggs.push(clickedEgg);
    } else {
      Materialize.toast("You've already found it.", 3000);
    }
  }
  // if egg not exists
  if(eggExist === false) {
    console.log('You have found something.');
    if(clickedEgg.objType === 'egg') {
      var toastMsg = congratulations[Math.floor(Math.random() * congratulations.length)];
      console.log(toastMsg);
      Materialize.toast(toastMsg, 3000);
    } else {
      var toastMsg = boos[Math.floor(Math.random() * boos.length)];
      Materialize.toast(toastMsg, 3000);
      vm.lastFoundEggInfoId(-1);
    }
  }
}
