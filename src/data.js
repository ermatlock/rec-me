const initialItems = [
  "Olivia Rodrigo",
  "Doja Cat",
  "Billie Eilish",
  "Kanye West",
  "BTS",
  "Lil Durk",
  "Pop Smoke",
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
  "Gunna",
  "Xxxtentacion",
  "Nicki Minaj",
  "Pooh Shiesty",
  "Kodak Black",
  "Rihanna",
  "The Beatles",
  "Megan Thee Stallion",
  "Mac Miller",
  "Trippie Redd",
  "Machine Gun Kelly",
  "Jason Aldean",
  "A Boogie wit da Hoodie",
  "twenty one pilots",
  "Kendrick Lamar",
  "Chris Brown",
  "Chris Stapleton",
  "Bruno Mars",
  "Lil Tjay",
  "Ed Sheeran",
  "NF",
  "42 Dugg",
  "Maroon 5",
  "Florida Georgia Line",
  "Luke Bryan",
  "Khalid",
  "Beyoncé",
  "Playboi Carti",
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
  "Roddy Ricch",
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
  "AC/DC",
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
  "NLE Choppa",
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
  "Ozuna",
  "Tom Petty",
  "Lee Brice",
  "YNW Melly",
  "Elton John",
  "Tyler, The Creator",
  "Rauw Alejandro",
  "Tyler Childers",
  "Blackbear",
  "AJR",
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
  "Young Dolph",
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
  "6lack",
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
  "Brent Faiyaz",
  "Jordan Davis",
  "Paramore",
  "JOJI",
  "Kali Uchis",
  "G-Eazy",
  "Frank Sinatra",
  "Maluma",
  "Key Glock",
  "MO3",
  "24kgoldn",
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
  "Toosii",
  "Arctic Monkeys",
  "Old Dominion",
  "Pitbull",
  "Guns N' Roses",
  "Childish Gambino",
  "Mitski",
  "Johnny Cash",
  "Britney Spears",
  "$Not",
  "Trey Songz",
  "Justin Timberlake",
  "G Herbo",
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
  "YG",
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
  "JellyRoll",
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
  "Yung Bleu",
  "Bob Seger",
  "Darius Rucker",
  "2 Chainz",
  "Tate McRae",
  "Grupo Firme",
  "Cody Jinks",
  "Breaking Benjamin",
  "Alicia Keys",
  "My Chemical Romance",
  "Ella Mai",
  "Hall & Oates",
  "Brantley Gilbert",
  "Sech",
  "Billy Currington",
  "Lauren Daigle",
  "The Money Man",
  "Snoop Dogg",
  "Tyga",
  "Los Dos Carnales",
  "Flo Rida",
  "Lizzo",
  "Bon Jovi",
  "Kelsea Ballerini",
  "EST Gee",
  "Jeremih",
  "Cole Swindell",
  "El Fantasma",
];


export default initialItems;


