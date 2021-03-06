document.querySelector('html').addEventListener('click', roll);
let rollCount = 0;
let slotUrl = "test";
let frameDelay = 0;

function roll() { 
  resetResults();
  resetLights();
  runSlots();

  // Once slot animation complete
  setTimeout(() => { 
    document.getElementById('rollResult').innerText = getRollResult();
    document.getElementById('TraitOutput').innerText = getRandomTrait();
    document.getElementById('ItemOutput').innerText = getRandomItem();
    document.getElementById('VerbOutput').innerText = getRandomVerb();
    getLightResult();
    }, 1900);
   
    updateRollCount();
}

function getRandomTrait() {
  let randomTraitArray = ["Happy", "Loving", "Relieved", "Content", "Amused", "Joyful", "Prideful", "Excited", "Peaceful", "Lonely", "Hopeless", "Grieving", "Depraved", "Wicked", "Depressed", "Lost", "Troubled", "Resigned", "Miserable", "Worried", "Doubtful", "Nervous", "Anxious", "Terrified", "Panicked", "Horrified", "Desperate", "Confused", "Stressed", "Annoyed", "Frustrated", "Contratian", "Bitter", "Infuriated",  "Mad", "Vengeful", "Insulted",  "Vicious",  "Loathing", "Offended",  "Disturbed", "Withdrawn", "Delighted", "Astonished", "Active",  "Dishonest",  "Dull", "Logical", "Energetic", "Loyal", "Brilliant", "Generous",  "Selfish", "Charming", "Clumsy", "Humble",  "Hyper", "Patient", "Cautious"];
  let randomTrait = randomTraitArray[Math.floor(Math.random() * randomTraitArray.length)];
  return randomTrait;
}

function getRandomItem() {
 let randomItemArray = ["Tree", "Ring", "Potion", "Rope", "Supplies", "Coin", "Amulet", "Bag", "Axe", "Gemstone", "Incense", "Boots", "Blanket", "Chest", "Candle", "Boat", "Tool", "Chain", "Metal", "Shirt", "Lock", "Lockpick", "Costume", "Club", "Animal", "Poison", "Instrument", "Weapon", "Explosive", "Paper", "Ink", "Leather", "Clothes", "Armour", "Colour", "Book", "Container", "Liquid", "Silverware", "Food", "Glass", "Brush", "Fire", "Game", "Eyeglass", "Thread", "Furniture", "Feather", "Needle", "Note", "Adhesive", "Oil", "Stick", "Box", "Sign", "Mirror", "Belt", "Medication", "Drug", "Music", "Statue", "Flag", "Knife", "Ball", "Saw", "Boat", "Carraige", "Toy", "Decoration", "Flower", "Costume", "Armour", "Sand", "Eyeball", "Cage", "Pathway", "Component", "Resource", "Light", "Rock", "Weight", "Seed", "Compass", "Map", "Ration"];
 let randomItem = randomItemArray[Math.floor(Math.random() * randomItemArray.length)];
 return randomItem;
}

function getRandomVerb() {
  let randomVerbArray = ["Acting", "Breaking", "Crying", "Drinking", "Eating", "Leaving", "Laughing", "Planning", "Running", "Shouting", "Sneezing", "Touching", "Writing", "Building", "Answering", "Coughing", "Dancing", "Eating", "Imitating", "Lying", "Playing", "Screaming", "Singing", "Solving", "Turning", "Whistling", "Approving", "Buying", "Creating", "Describing", "Editing", "Inventing", "Listening", "Reading", "Seeing", "Skipping", "Studying", "Walking", "Pulling", "Pushing", "Arranging", "Coaching", "Completing", "Drawing", "Entering", "Jumping", "Painting", "Replacing", "Shopping", "Sleeping", "Teaching", "Winning", "Losing", "Whining", "Deciding", "Doubting", "Hating", "Enjoying",  "Smelling", "Learning", "Hoping", "Forgetting", "Assisting", "Baking", "Aiming", "Apologizing", "Arguing", "Adapting", "Accusing", "Bending", "Betting"];
  let randomVerb = randomVerbArray[Math.floor(Math.random() * randomVerbArray.length)];
  return randomVerb;
}


function getRollResult() {
  let randomNumber = Math.random();
  
  if (randomNumber < 0.25) { 
    console.log('Yes, and');
    return `Yes, and`
  } else if (randomNumber >= 0.25 && randomNumber < 0.5) { 
    console.log('Yes, but');
    return `Yes, but`;
  } else if (randomNumber >= 0.5 && randomNumber < 0.75) { 
    console.log('No, and')
    return `No, and`
  } else if (randomNumber >= 0.75) { 
    console.log('No, but')
    return `No, but`
  } else {
    console.log('rollNumber Error')
  }

}

function updateRollCount () {
  rollCount += 1;
  console.log(rollCount)
}

function changeFrame(slotUrl, frameDelay) {
  setTimeout(() => { 
    slotsArea.style.backgroundImage = slotUrl;
    }, frameDelay);
}
function runSlots() {
  slotsArea = document.querySelector('#slotsDiv');
  changeFrame('url("assets/X1.png")', 0);
  changeFrame('url("assets/X2.png")', 100);
  changeFrame('url("assets/X3.png")', 200);
  changeFrame('url("assets/X4.png")', 300); 
  changeFrame('url("assets/X5.png")', 400);
  changeFrame('url("assets/X6.png")', 500);
  changeFrame('url("assets/X7.png")', 600);
  changeFrame('url("assets/X8.png")', 700);
  changeFrame('url("assets/X9.png")', 800);
  changeFrame('url("assets/X10.png")', 900);
  changeFrame('url("assets/X11.png")', 1000);
  changeFrame('url("assets/X12.png")', 1100); 
  changeFrame('url("assets/X7.png")', 1200);
  changeFrame('url("assets/X6.png")', 1300);
  changeFrame('url("assets/X5.png")', 1400);
  changeFrame('url("assets/X4.png")', 1500);
  changeFrame('url("assets/X3.png")', 1600);
  changeFrame('url("assets/X2.png")', 1700);
  changeFrame('url("assets/X1.png")', 1800);
}

function resetResults() {
  document.getElementById('rollResult').innerText = "";
  document.getElementById('TraitOutput').innerText = "";
  document.getElementById('ItemOutput').innerText = "";
  document.getElementById('VerbOutput').innerText = "";
}

function resetLights() {
  document.getElementById('lightOne').style.display = "none";
  document.getElementById('lightTwo').style.display = "none";
  document.getElementById('lightThree').style.display = "none";
}

function getLightResult() {
  let randomNumber = Math.random();
  
  if (randomNumber < 0.5) { 
    console.log('Intensity One');
    document.getElementById('lightOne').style.display = "block";
  } else if (randomNumber >= 0.5 && randomNumber < 0.8) { 
    console.log('Intensity Two');
    document.getElementById('lightOne').style.display = "block";
    document.getElementById('lightTwo').style.display = "block";
  } else if (randomNumber >= 0.8 && randomNumber < 1) { 
    console.log('Intensity Three');
    document.getElementById('lightOne').style.display = "block";
    document.getElementById('lightTwo').style.display = "block";
    document.getElementById('lightThree').style.display = "block";
  } else {
    console.log('Light Error')
  }

}