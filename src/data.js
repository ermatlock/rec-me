const initialItems = [
  "Olivia Rodrigo",
  "Doja Cat",
  "Billie Eilish",
  "Kanye West",
  "Ariana Grande",
  "Lil Uzi Vert",
  "Post Malone",
  "Future",
  "Justin Bieber",
  "Luke Combs",
  "Eminem",
  "The Weeknd",
  "Bad Bunny",
  "Rod Wave",
  "Polo G",
  "MoneyBagg Yo",
  "Lil Baby",
  "YoungBoy Never Broke Again",
  "Morgan Wallen",
  "Taylor Swift",
  "J. Cole",
  "Juice Wrld",
  "Drake",
  "Travis Scott",
  "DaBaby",
  "Dua Lipa",
  "Young Thug",
  "Kevin Gates",
  "Lil Wayne",
  "DJ Khaled",
  "Nicki Minaj",
  "Kodak Black",
  "Rihanna",
  "The Beatles",
  "Megan Thee Stallion",
  "Mac Miller",
  "Machine Gun Kelly",
  "Jason Aldean",
  "A Boogie wit da Hoodie",
  "twenty one pilots",
  "Kendrick Lamar",
  "Chris Brown",
  "Chris Stapleton",
  "Bruno Mars",
  "Ed Sheeran",
  "Maroon 5",
  "Florida Georgia Line",
  "Luke Bryan",
  "Khalid",
  "Beyoncé",
  "DMX",
  "Fleetwood Mac",
  "Imagine Dragons",
  "Thomas Rhett",
  "Eric Church",
  "Lil Nas X",
  "Queen",
  "Blake Shelton",
  "$uicideboy$",
  "Cardi B",
  "Kenny Chesney",
  "The Kid Laroi",
  "Migos",
  "P!nk",
  "21 Savage",
  "Jhené Aiko",
  "King Von",
  "Harry Styles",
  "Kane Brown",
  "Lady Gaga",
  "Coldplay",
  "ACDC",
  "Miley Cyrus",
  "Giveon",
  "Kid Cudi",
  "Lil Peep",
  "H.E.R",
  "Eagles",
  "Jack Harlow",
  "SZA",
  "George Strait",
  "Halsey",
  "Miranda Lambert",
  "J. Balvin",
  "2Pac",
  "Frank Ocean",
  "Meek Mill",
  "One Direction",
  "Michael Jackson",
  "Sam Hunt",
  "Linkin Park",
  "Dan + Shay",
  "Usher",
  "Lil Tecca",
  "Zac Brown Band",
  "Red Hot Chili Peppers",
  "Katy Perry",
  "Russ",
  "Panic! at the Disco",
  "Glass Animals",
  "Metallica",
  "Led Zeppelin",
  "Gucci Mane",
  "The Rolling Stones",
  "Tim McGraw",
  "Tom Petty",
  "Lee Brice",
  "Elton John",
  "Tyler, The Creator",
  "Tyler Childers",
  "Blackbear",
  "Marshmello",
  "Wiz Khalifa",
  "JAY-Z",
  "Tee Grizzley",
  "Dierks Bentley",
  "Alan Jackson",
  "Masked Wolf",
  "Lana Del Rey",
  "Demi Lovato",
  "Tory Lanez",
  "Summer Walker",
  "Notorious B.I.G.",
  "Metro Boomin",
  "Sam Smith",
  "Saweetie",
  "Nirvana",
  "Calvin Harris",
  "Fall Out Boy",
  "Shawn Mendes",
  "Sleepy hallow",
  "Five Finger Death Punch",
  "Don Toliver",
  "Pink Floyd",
  "Creedence Clearwater Revival",
  "Green Day",
  "Jon Pardi",
  "Adele",
  "Billy Joel",
  "Big Sean",
  "A$AP Rocky",
  "OneRepublic",
  "Bryson Tiller",
  "The Neighbourhood",
  "Logic",
  "Kehlani",
  "Upchurch",
  "Lewis Capaldi",
  "Original Broadway Cast of Hamilton",
  "Myke Towers",
  "John Mayer",
  "Jordan Davis",
  "Paramore",
  "Kali Uchis",
  "G-Eazy",
  "Frank Sinatra",
  "Maluma",
  "Key Glock",
  "Lynyrd Skynyrd",
  "50 Cent",
  "Maren Morris",
  "Nelly",
  "Daddy Yankee",
  "Jack Johnson",
  "City Girls",
  "Gorillaz",
  "The Chainsmokers",
  "Natanael Cano",
  "Miguel",
  "Weezer",
  "Journey",
  "Arctic Monkeys",
  "Old Dominion",
  "Pitbull",
  "Guns N' Roses",
  "Childish Gambino",
  "Mitski",
  "Johnny Cash",
  "Britney Spears",
  "Trey Songz",
  "Justin Timberlake",
  "Sublime",
  "Gabby Barrett",
  "The Lumineers",
  "Jake Owen",
  "Anuel AA",
  "Carrie Underwood",
  "Blink-182",
  "Nipsey Hussle",
  "Keith Urban",
  "Brooks & Dunn",
  "Jason Derulo",
  "Bebe Rexha",
  "Jonas Brothers",
  "Bob Marley & The Wailers",
  "Chris Young",
  "Silk Sonic",
  "Brett Young",
  "Tame Impala",
  "T.I.",
  "Selena Gomez",
  "Toby Keith",
  "Lil Skies",
  "Melanie Martinez",
  "Shinedown",
  "Mariah Carey",
  "Three Days Grace",
  "Elevation Worship",
  "Aerosmith",
  "Karol G",
  "Lil Yachty",
  "5 Seconds of Summer",
  "Cody Johnson",
  "PARTYNEXTDOOR",
  "Selena",
  "OutKast",
  "Iann Dior",
  "Joyner Lucas",
  "Romeo Santos",
  "Van Halen",
  "Ty Dolla $ign",
  "Shakira",
  "Young Jeezy",
  "T-Pain",
  "Cage The Elephant",
  "Elvis Presley",
  "Young Nudy",
  "Christian Nodal",
  "Nav",
  "Dr. Dre",
  "Disturbed",
  "David Guetta",
  "Hozier",
  "Ski Mask the Slump God",
  "Van Morrison",
  "Chase Rice",
  "The Black Eyed Peas",
  "Rascal Flatts",
  "Slipknot",
  "Foo Fighters",
  "The Beach Boys",
  "SpotemGottem",
  "Dustin Lynch",
  "Little Big Town",
  "Bob Seger",
  "Darius Rucker",
  "2 Chainz",
  "Tate McRae",
  "Cody Jinks",
  "Breaking Benjamin",
  "Alicia Keys",
  "My Chemical Romance",
  "Ella Mai",
  "Hall & Oates",
  "Snoop Dogg",
  "Tyga",
  "Flo Rida",
  "Lizzo",
  "Bon Jovi",
  "Kelsea Ballerini",
  "EST Gee",
  "Jeremih",
  "Cole Swindell",
  "El Fantasma",
];

const gameArtists = [
  "Billie Eilish",
  "Kanye West",
  "Ariana Grande",
  "Eminem",
  "Ed Sheeran",
  "The Beatles",
  "Megan Thee Stallion",
  "Mac Miller",
  "Hall & Oates",
  "Snoop Dogg",
  "Tyga",
  "Flo Rida",
  "Lizzo",
  "Bon Jovi",
  "Slipknot",
  "Foo Fighters",
  "The Beach Boys",
  "Selena Gomez",
  "Red Hot Chili Peppers"
];

const winResponses = [
  "Too easy. I made it too easy. My bad.",
  "There's no way, this game was rigged.",
  "I think you just got lucky this time.",
  "Huh, you're kinda good at this.",
  "Not terrible at all.",
  "Great shot kid, that was one in a million!",
  "You are the champion, my friend!",
  "You're simply the best, better than all the rest.",
  "I feel good as hell!",
];

const loseResponses = [
  "You Lost. We can't win them all, can we?",
  "You Lost. Soy un perdador. I'm a loser baby...",
  "Yoy lost. You fought the law, and the law won.",
  "You lost. All you can do is shake it off, shake it off."
];

const attemptResponses = [
  "nah, son",
  "You should probably give up.",
  "You don't got this.",
  "I am not confident in your abilities.",
  "Huh, you're kinda not good at this.",
  "I'm betting on you! And by that, I mean I'm betting you won't make it.",
  "This is hard.",
  "There's no way to connect these dots.",
  "WHOA! Livin'on a prayer with this one!",
  "You got to know when to hold 'em, know when to fold 'em...",
  "You still haven't found What you're looking for...",
  "nope"
];

export {
  initialItems,
  gameArtists,
  attemptResponses,
  winResponses,
  loseResponses,
};
