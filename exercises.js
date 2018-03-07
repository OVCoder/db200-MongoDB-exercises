  //1  title : Star Wars
    // writer : George Lucas
    // year : 1977
    // actors : [
    // Mark Hamill
    // Harison Ford
    // Carrie Fisher
    // Peter Chushing
    // James Earl Jones
    // ]

    // db.movies.insert({"title": "Star Wars", "writer": "George Lucas", "year":              1977, "actors": ["Mark Hamill", "Harison Ford", "Carrie Fisher", "Peter Ch             ushing", "James Earl Jones"]});
    // 1977, "actors": ["Mark Hamill", "Harison Ford", "Carrie Fisher", "Peter Ch  
    // ushing", "James Earl Jones"]});

    //    2 title : Raiders of the Lost Ark
    //      writer : George Lucas
    //      year : 1981
    //      actors : [
    //      Harrison Ford
    //      ]
    
    // db.movies.insert({"title": "Raiders of the Lost Ark", "writer": "George Lucas", "year": 1981, "actors": ["Harison Ford"]});
    // cas", "year": 1981, "actors": ["Harison Ford"]});


    //  3  title : Fight Club
    //     writer : Chuck Palahniuk
    //     year : 1999
    //     actors : [
    //     Brad Pitt
    //     Edward Norton
    //     ]
    // db.movies.insert({"title": "Fight Club", "writer": "Chuck Palahniuk", "year": 1999, "actors": ["Brad Pitt", "Edward Norton"]});
    
    // 4 title : Pulp Fiction
    //   writer : Quentin Tarantino
    //   year : 1994
    //   actors : [
    //     John Travolta
    //     Uma Thurman
    //   ]
    
    //db.movies.insert({"title": "Pulp Fiction", "writer": "Quentin Tarantino", "year": 1994, "actors": ["John Travolta", "Uma Thurman"]});

    // 5   title : Inglorious Basterds
    //     writer : Quentin Tarantino
    //     year : 2009
    //     actors : [
    //     Brad Pitt
    //     Diane Kruger
    //     Eli Roth
    //     ]

    //db.movies.insert({"title": "Inglorious Basterds", "writer": "Quentin Tarantino", "year":2009, "actors": ["Brad Pitt", "Diane Kruger", "Eli Roth"]});

    // 6   title : The Hobbit: An Unexpected Journey
    //     writer : J.R.R. Tolkein
    //     year : 2012
    //     franchise : The Hobbit

    // db.movies.insert({"title": "The Hobbit: An Unexpected Journey", "writer":"J.R.R. Tolkein", "year": 2012, "franchise": "The Hobbit"});


    //   7 title : The Hobbit: The Desolation of Smaug
    //     writer : J.R.R. Tolkein
    //     year : 2013
    //     franchise : The Hobbit

    //db.movies.insert({"title": "The Hobbit: The Desolation of Smaug", "writer": "J.R.R. Tolkein", "year": 2013, "franchise": "The Hobbit"});

    //  8  title : The Hobbit: The Battle of the Five Armies
    //     writer : J.R.R. Tolkein
    //     year : 2012
    //     franchise : The Hobbit
    //     synopsis : Bilbo and Company are forced to engage in a war against an array of combatants and keep the Lonely Mountain from falling into the hands of a rising darkness.

    //db.movies.insert({"title": "The Hobbit: The Battle of the Five Armies", "writer": "J.R.R. Tolkein", "year": 2012, "franchise": "The Hobbit", "synops is": "Bilbo and Company are forced to engage in a war against an array of combatants and keep the Lonely Mountain from falling into the hands of a rising darkness."});
 

    //  9  title : Pee Wee Herman's Big Adventure
    //     writer: Phil Hartman
    //     year: 1985

    //db.movies.insert({"title": "Pee Wee Herman's Big Adventure", "writer": "Phil Hartman", "year": 1985});
 
    //10 title : Avatar
    //db.movies.insert({"title": "Avatar"});

    //Query / Find Documents
    //1.get all documents
    //db.movies.find({}).pretty();
    //2.get all documents with writer set to "Quentin Tarantino"
    //db.movies.find({"writer": "Quentin Tarantino"});
    //3.get all documents where actors include "Brad Pitt"

    //{ field: { $in: [<value1>, <value2>, ... <valueN> ] } }
    //db.movies.find({ actors: {$in: ["Brad Pitt"]}});

    //4.get all documents with franchise set to "The Hobbit"
    //db.movies.find({franchise: {$eq: "The Hobbit"}});

    //5.get all movies released in the 90s
    //db.movies.find({ $and: [ {year: {$gt: 1989}},{year: {$lt:2000}}]});
    // OR
    
    //db.movies.find({ year: {$gt: 1989, $lt: 2000}});

    //6.get all movies released before the year 2000 or after 2010
    //db.movies.find({ $or: [{year: {$lt: 2000}},{year: {$gt: 2010}}]});

    //7.add a synopsis to "The Hobbit: An Unexpected Journey" : "A reluctant
    // hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited 
    //group of dwarves to reclaim their mountain home - and the gold within it
    // - from the dragon Smaug."
    //db.cars.updateOne({ "make": "dodge" },{ $set: { "model": "durango", "year": 2015 } })
    //db.movies.updateOne({title: "The Hobbit: An Unexpected Journey"},{$set: {"synopsis":"A reluctant hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home - and the gold within it - from the dragon Smaug."}});
    
    // 8.add a synopsis to "The Hobbit: The Desolation of Smaug" : "The dwarves, 
    //along with Bilbo Baggins and Gandalf the Grey, continue their quest to reclaim
    // Erebor, their homeland, from Smaug. Bilbo Baggins is in possession of a 
    //mysterious and magical ring."

    //db.movies.updateOne({title: "The Hobbit: The Desolation of Smaug"}, { $set:{"synopsis":"The dwarves, along with Bilbo Baggins and Gandalf the Grey, continue their quest to reclaim Erebor, their homeland, from Smaug. Bilbo Baggins is in possession of a mysterious and magical ring."}});

    //9.add an actor named "Samuel L. Jackson" to the movie "Pulp Fiction"
    //db.movies.updateOne({title: "Pulp Fiction"},{ $addToSet: { "actors": "Samuel L. Jackson"} });
    
    // TEXT SEARCH
    //1.find all movies that have a synopsis that contains the word "Bilbo"
    //First, need to create text index:
    //db.movies.ensureIndex({synopsis: "text"});

    //...and then we can search for text:
    //db.movies.find( { $text: { $search: "Bilbo" } } );

    //2.find all movies that have a synopsis that contains the word "Gandalf"
    //db.movies.find({ $text: {$search: "Gandalf"}}).pretty();

    //3.find all movies that have a synopsis that contains the word "Bilbo" 
    //and not the word "Gandalf"
    //A negated term is a term that is prefixed by a minus sign -. If you negate 
    //a term, the $text operator will exclude the documents that contain those terms
    // from the results.
    //db.movies.find({ $text: {$search: "Bilbo -Gandalf"}}).pretty();

    //4.find all movies that have a synopsis that contains the word "dwarves" or "hobbit"
    //db.movies.find({$or:[{ $text: {$search: "dwarves"}},{ $text: {$search: "hobbit"}}]).pretty();
    //!To use a $text query in an $or expression, all clauses in the $or array must be indexed.
