const farmAnimals = 'cow horse sheep pig chicken';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

// Strings

// 1. Use destructuring to assign appropriate variables based on the sounds animals make.
 
let animals =["cow" , "sheep" , "pig", "chicken", "horse"]

const[moo, baa , oink ,cluck, neigh] = animals

console.log(moo)

console.log(baa)

console.log(oink)

console.log(cluck)

console.log(neigh)




// 2. Bolt the horse wandered off, so just give us four animals, and let's name them bessie, dolly, babe, and little.

let newAnimals =["cow", "sheep","pig", "chicken"]

const[bessie, dolly, babe, little] = newAnimals

console.log(bessie)

console.log(dolly)

console.log(babe)

console.log(little)



// 3. Little the chicken had to go back to the coop, so now we're left with three. Let's use color variables of blackAndWhite, black, and pink.

let animalColours =["cow", "sheep", "pig"]

const[blackAndWhite, black, pink] = animalColours

console.log(blackAndWhite)

console.log(black)

console.log(pink)



// Arrays

// 4. Use destructuring to assign appropriate variables using the color names.

const rainbowColours =["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

const[red, orange, yellow, green, blue, indigo, violet] = rainbowColours

console.log(red)

console.log(orange)

console.log(yellow)

console.log(green)

console.log(blue)

console.log(indigo)

console.log(violet)




// 5. Some people have a really hard time picking out indigo, so let's leave that one out, using the first letter of each color as the variable names.

const newColours = ["red", "orange", "yellow", "green", "blue", "violet" ]

const[r, o, y, g, b, v] = newColours

console.log(red)

console.log(o)

console.log(y)

console.log(g)

console.log(b)

console.log(v)



// 6. But wait! Indigo is now feeling *super* left out. Let's only assign indigo using indg.

const colours = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

const[, , , , , indg] = colours;

console.log(indg)


// Objects

// 7. Use destructuring to assign all variables using the keys as the variable names

const  {muppetName, color, song, job, partner } = muppet


// 8. Use destructuring to assign songs 2 and 4, and Kermit's job and partner
 
const {album: {theMuppetMovie: { song2, song4 } }, nestedJob, nestedPartner } = nestedMuppet
