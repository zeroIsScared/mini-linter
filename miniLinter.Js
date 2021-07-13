let story =`Last weekend, I took literally the most beautiful bike ride of my life. The route is called 
"The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack,
 New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took
  me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short
  I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 
  4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached 
  Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that
   was very surprising to me was that near the end of the route you actually cross back into New York! At
   this point, you are very close to the end.`;

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];
 /*In the code editor, there is a string called story. We want to
  gather some information about the individual words and sentences 
  in the string. Let’s split the string into individual words and 
  save them in a new array called storyWords.
*/

  let storyWords = story.split(' ');
  console.log(story.split(' '));

  //Log how many words there are in this story to the console.

  console.log(storyWords.length);

  //There is an array of words that are unnecessary. Iterate over your array to filter out these words. Sa
  //the remaining words in an array called betterWords.

  let betterWords = storyWords.filter(element => !unnecessaryWords.includes(element));

  console.log(betterWords);
 
  //There is an array of words called overusedWords. These are words overused in this story. You want to let the
  // user of your program know how many times they have used these overused words. There are two ways to achieve this.
 
  let repeatReally= 0;  let repeatVery= 0;  let repeatBasiclly= 0;
  for (let i=0; i < betterWords.length; i++) {

     

      if ( betterWords[i] === overusedWords[0]) {
        repeatReally += 1;
        
      // console.log(`The word 'really' was written for: ${repeatReally} times.`);
      }
      else if (betterWords[i] === overusedWords[1]) {
        repeatVery += 1;
      // console.log(`The word 'very' was written for: ${repeatVery} times.`);
      }
       else if(betterWords[i] === overusedWords[2]) {
          repeatBasiclly += 1;
        //console.log(`The word 'basiclly' was written for: ${repeatBasiclly} times.`);
        };
        
        
    };
   
       
       //Now, count how many sentences are in the paragraph. This may seem tricky,
       // but remember that all of the sentences in this paragraph end with a period (.) 
       //or an exclamation mark (!). You could iterate over the array and add 1 to a sentence 
       //counter variable for each word that has a period or exclamation mark as its final character.

       // console.log('Hello!'.includes('!'));
let sentences = 0;
for (i=0; i < betterWords.length; i++) {
    if (betterWords[i].includes('!') || betterWords[i].includes('.')) {
      sentences ++;
    };
};


// Log these items to the console:
// The word count
// The sentence count
// The number of times each overused word appears
// You could choose to simply log them one by one or, for a challenge, create a function that logs all of them with some formatting.

let count =()=>{

console.log(
`The number of words that contains betterWords is equal to  ${betterWords.length}.
The number of sentences that contains betterWords is equal to ${sentences}.
The word 'really' was written for: ${repeatReally} times.
The word 'very' was written for: ${repeatVery} times.
The word 'basiclly' was written for: ${repeatBasiclly} times.`);
};

console.log(count());

//Now, log the betterWords array to the console as a single string.
let betterWordsString = betterWords.join(' ');
console.log(betterWordsString);
