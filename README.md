# Movie Data

JSON data on American movies scraped from Wikipedia.

`movies.json` contains a list of 1900-2023 movies from Wikipedia in convenient form: an array of objects, each representing a movie, with a `title`, `year`, `extract`, `thumbnail`, `cast` (array), and `genres` (array):

```javascript
[
  // ...
  {
    title: "Avengers: Age of Ultron",
    year: 2015,
    cast: [
      "Robert Downey Jr.",
      "Chris Hemsworth",
      "Mark Ruffalo",
      "Chris Evans",
      "Scarlett Johansson",
      "Jeremy Renner",
      "Don Cheadle",
      "Aaron Taylor-Johnson",
      "Elizabeth Olsen",
      "Paul Bettany",
      "Cobie Smulders",
      "Anthony Mackie",
      "Hayley Atwell",
      "Idris Elba",
      "Stellan Skarsgård",
      "James Spader",
      "Samuel L. Jackson",
    ],
    genres: ["Superhero"],
    href: "Avengers:_Age_of_Ultron",
    extract:
      "Avengers: Age of Ultron is a 2015 American superhero film based on the Marvel Comics superhero team the Avengers. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is the sequel to The Avengers (2012) and the 11th film in the Marvel Cinematic Universe (MCU). Written and directed by Joss Whedon, the film features an ensemble cast including Robert Downey Jr., Chris Hemsworth, Mark Ruffalo, Chris Evans, Scarlett Johansson, Jeremy Renner, Don Cheadle, Aaron Taylor-Johnson, Elizabeth Olsen, Paul Bettany, Cobie Smulders, Anthony Mackie, Hayley Atwell, Idris Elba, Linda Cardellini, Stellan Skarsgård, James Spader, and Samuel L. Jackson. In the film, the Avengers fight Ultron (Spader)—an artificial intelligence created by Tony Stark (Downey) and Bruce Banner (Ruffalo) who plans to bring about world peace by causing human extinction.",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/en/f/ff/Avengers_Age_of_Ultron_poster.jpg",
    thumbnail_width: 220,
    thumbnail_height: 326,
  },
  // ...
  {
    title: "The Avengers",
    year: 2012,
    cast: [
      "Robert Downey Jr.",
      "Chris Evans",
      "Chris Hemsworth",
      "Mark Ruffalo",
      "Jeremy Renner",
      "Scarlett Johansson",
      "Tom Hiddleston",
      "Samuel L. Jackson",
      "Stellan Skarsgård",
      "Cobie Smulders",
      "Clark Gregg",
      "Gwyneth Paltrow",
      "Maximiliano Hernández",
      "Paul Bettany",
      "Alexis Denisof",
      "Damion Poitier",
      "Powers Boothe",
      "Jenny Agutter",
      "Stan Lee",
      "Harry Dean Stanton",
      "Jerzy Skolimowski",
      "Warren Kole",
      "Enver Gjokaj",
    ],
    genres: ["Superhero"],
    href: "The_Avengers_(2012_film)",
    extract:
      "Marvel's The Avengers, or simply The Avengers, is a 2012 American superhero film based on the Marvel Comics superhero team of the same name. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is the sixth film in the Marvel Cinematic Universe (MCU). Written and directed by Joss Whedon, the film features an ensemble cast including Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth, Scarlett Johansson, and Jeremy Renner as the Avengers, alongside Tom Hiddleston, Stellan Skarsgård, and Samuel L. Jackson. In the film, Nick Fury and the spy agency S.H.I.E.L.D. recruit Tony Stark, Steve Rogers, Bruce Banner, Thor, Natasha Romanoff, and Clint Barton to form a team capable of stopping Thor's brother Loki from subjugating Earth.",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/en/8/8a/The_Avengers_%282012_film%29_poster.jpg",
    thumbnail_width: 220,
    thumbnail_height: 326,
  },
  // ...
];
```
