document.getElementById('rollButton').addEventListener('click', roll);
let rollCount = 0;

function roll() { 
  document.getElementById('rollResult').innerText = getRollResult();
  updateRollCount();

  document.getElementById('TraitOutput').innerText = getRandomTrait();
  document.getElementById('ItemOutput').innerText = getRandomItem();
  document.getElementById('VerbOutput').innerText = getRandomVerb();

}

function getRandomTrait() {
  let randomTraitArray = ["Happy", "Loving", "Relieved", "Content", "Amused", "Joyful", "Prideful", "Excited", "Peaceful", "Lonely", "Heartbroken", "Disappointed", "Hopeless", "Grieving", "Depraved", "Wicked", "Depressed", "Lost", "Troubled", "Resigned", "Miserable", "Worried", "Doubtful", "Nervous", "Anxious", "Terrified", "Panicked", "Horrified", "Desperate", "Confused", "Stressed", "Annoyed", "Frustrated", "Contratian", "Bitter", "Infuriated", "Irritated", "Mad", "Vengeful", "Insulted", "Vindicated", "Vicious", "Disapproving", "Loathing", "Offended", "Uncomfortable", "Disturbed", "Withdrawn", "Delighted", "Astonished", "Active", "Adventurous", "Dishonest", "Disrespectful", "Dull", "Logical", "Energetic", "Loyal", "Brilliant", "Generous", "Mischievous", "Selfish", "Charming", "Clumsy", "Humble", "Cooperative", "Hyper", "Patient", "Cautious"];
  let randomTrait = randomTraitArray[Math.floor(Math.random() * randomTraitArray.length)];
  return randomTrait;
}

function getRandomItem() {
 let randomItemArray = ["Tree", "Ring", "Potion", "Rope", "Supplies", "Coin", "Amulet", "Bag", "Axe", "Gemstone", "Incense", "Boots", "Blanket", "Chest", "Candle", "Boat", "Tool", "Chain", "Metal", "Shirt", "Lock", "Lockpick", "Costume", "Club", "Animal", "Poison", "Instrument", "Weapon", "Explosive", "Paper", "Ink", "Leather", "Clothes", "Armour", "Colour", "Book", "Container", "Liquid", "Silverware", "Food", "Glass", "Brush", "Fire", "Game", "Eyeglass", "Thread", "Furniture", "Feather", "Needle", "Note", "Adhesive", "Oil", "Stick", "Box", "Sign", "Mirror", "Belt", "Medication", "Drug", "Music", "Statue", "flag", "knife", "ball", "Saw", "Boat", "Carraige", "Toy", "Decoration", "Flower", "Costume", "Armour", "Sand", "Eyeball", "Cage", "Pathway", "Component", "Resource", "Light", "Rock", "Weight", "Seed", "Compass", "Map", "Ration"];
 let randomItem = randomItemArray[Math.floor(Math.random() * randomItemArray.length)];
 return randomItem;
}

function getRandomVerb() {
  let randomVerbArray = ["Acting", "Breaking", "Crying", "Drinking", "Eating", "Leaving", "Laughing", "Planning", "Running", "Shouting", "Sneezing", "Touching", "Writing", "Building", "Answering", "Coughing", "Dancing", "Eating", "Imitating", "Lying", "Playing", "Screaming", "Singing", "Solving", "Turning", "Whistling", "Approving", "Buying", "Creating", "Describing", "Editing", "Inventing", "Listening", "Reading", "Seeing", "Skipping", "Studying", "Walking", "Pulling", "Pushing", "Arranging", "Coaching", "Completing", "Drawing", "Entering", "Jumping", "Painting", "Replacing", "Shopping", "Sleeping", "Teaching", "Winning", "Losing", "Whining", "Deciding", "Doubting", "Hating", "Enjoying", "Remembering", "Surprising", "Smelling", "Learning", "Hoping", "Forgetting", "Assisting", "Baking", "Aiming", "Apologizing", "Arguing", "Adapting", "Accusing", "Bending", "Betting"];
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
  document.getElementById('rollCount').innerText = `Roll Number: ${rollCount}`;
}