// Create an array of objects that represents famous people (see structure below).
// Create a text input in your DOM.
// Beneath that, create a container, block element in your DOM.
// Create a DOM element for each of the objects inside the container. Style your person elements however you like.
// For every even numbered element, have a light yellow background.
// For every odd numbered element, have a light blue background.
// Each element's DOM structure should be as shown below.
// When you click on one of the person elements, a dotted border should appear around it.
// When you click on one of the person elements, the text input should immediately gain focus so that you can start typing.
// When there is a highlighted person element, and you begin typing in the input box, the person's biography should be immediately bound to what you are typing, letter by letter.
// When you press the enter/return key when typing in the input field, then the content of the input field should immediately be blank.
// Sample Person Element & Children
// This is just a sample and is not what your final HTML will look like. You need to add all the appropriate id and class attribute needed to make it work as intended.

let famousPeople = [
    {
    name: "Jerry Seinfeld",
    bio: " Jerome Allen 'Jerry' Seinfeld (/ˈsaɪnfɛld/; born April 29, 1954)[1] is an American stand-up comedian, actor, writer, producer, and director. He is widely known for playing himself in the sitcom Seinfeld, which he created and wrote with Larry David. Seinfeld was heavily involved in Bee Movie, in which he voiced its protagonist. In 2010, he premiered a reality series called The Marriage Ref. He directed Colin Quinn in the Broadway show Long Story Short at the Helen Hayes Theater and the John Drew Theater at Guild Hall of East Hampton, which ran until January 2011. He is the creator and host of the web series Comedians in Cars Getting Coffee.",
    image: "https://en.wikipedia.org/wiki/File:Jerry_Seinfeld_2011_Shankbone.JPG",
    lifespan: {
      birth: "1954",
      death: "",
    }
},
{
    name: "Julia Louis-Dreyfus",
    bio: "Julia Scarlett Elizabeth Louis-Dreyfus[1] (/ˈluːi ˈdraɪfəs/; born January 13, 1961) is an American actress, comedian, and producer. In television comedy, she is known for her work in Saturday Night Live (1982–1985), Seinfeld (1989–1998), The New Adventures of Old Christine (2006–2010), and Veep (2012–present). She is one of the most celebrated television actors of her generation, winning more Emmy Awards than any other performer.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Julia_Louis-Dreyfus_VF_2012_Shankbone_3.jpg/220px-Julia_Louis-Dreyfus_VF_2012_Shankbone_3.jpg",
    lifespan: {
      birth: "1961",
      death: " ",
    }
},
{
    name: "Jason Alexander",
    bio: "Jay Scott Greenspan[1][2][3] (born September 23, 1959),[2] known by his stage name Jason Alexander, is an American actor, voice actor, comedian and director. Alexander is best known for his role as George Costanza in the television series Seinfeld. Other well-known roles include Phillip Stuckey in the film Pretty Woman (1990) and the title character in the animated series Duckman (1994–1997). Alexander has had an active career on stage, appearing in several Broadway musicals including Jerome Robbins' Broadway in 1989, for which he won the Tony Award as Best Leading Actor in a Musical. He appeared in the Los Angeles production of The Producers. He was the Artistic Director of 'Reprise! Broadway's Best in Los Angeles, where he has directed several musicals.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Jason_Alexander_Fourth_of_July_%28cropped%29.jpg/220px-Jason_Alexander_Fourth_of_July_%28cropped%29.jpg",
    lifespan: {
      birth: "1959",
      death: "",
    }
},
{
    name: "Michael Richards",
    bio: "Michael Anthony Richards (born July 24, 1949) is an American actor, writer, television producer and comedian, widely known for his portrayal of Cosmo Kramer on the television sitcom Seinfeld, for which he received the Primetime Emmy Award for Outstanding Supporting Actor in a Comedy Series three times. Richards began his career as a stand-up comedian, first entering the national spotlight when he was featured on Billy Crystal's first cable TV special. He went on to become a series regular on ABC's Fridays. Prior to Seinfeld, he made numerous guest appearances on a variety of television shows, such as Cheers. His film credits include So I Married an Axe Murderer, Airheads, Young Doctors in Love, Problem Child, Coneheads, UHF, and Trial and Error, one of his few starring roles. During the run of Seinfeld, he made a guest appearance in Mad About You. After Seinfeld, Richards starred in his own sitcom, The Michael Richards Show, which lasted less than one full season.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Michael_Richards_%281993%29.jpg/220px-Michael_Richards_%281993%29.jpg",
    lifespan: {
      birth: "1949",
      death: " ",
    }
}]

let container = document.getElementById("container");

for (let i = 0; i < famousPeople.length; i++ ) {
    container.innerHTML += 
    `<h3>${famousPeople[i].name}</h3>
    <img src =${famousPeople[i].image}>
    <p>${famousPeople[i].bio}<p>
    <footer>${famousPeople[i].lifespan.birth} - ${famousPeople[i].lifespan.death}</footer>`
    
};
