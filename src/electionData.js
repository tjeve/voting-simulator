/* Generate using fake data generator or enter actual candidate data from a source like wikipedia, etc.
   
   Candidate data should be an array of objects with each object being candidate data like
   let candidate = {
       name: "",
       age: "",
       experience: "",
       state: "",
       logo: "",
       website: ""
   } //however this is not necessary for what you'll be using the data for.


   Voter data would need to be an object with their choices ranked. Something like...
   let voterBallot = {
       id: "",
       1: "",
       2: "",
       3: "",
       4: "",
       5: "",
       6: ""
   }
*/

   //Test Data
let demCandidates = [
    "Joe Biden",
    "Bernie Sanders",
    "Elizabeth Warren",
    "Andrew Yang",
    "Michael Bloomberg",
    "Pete Buttigieg",
    "Amy Klobuchar",
    "Tulsi Gabbard"
]

let numOfVoters = 200

let listCandidates = (candidates) => {
    for (let i = 0; i < candidates.length, i++) {
        console.log(candidates[i])
    }
    return null
}

console.log(listCandidates(demCandidates))