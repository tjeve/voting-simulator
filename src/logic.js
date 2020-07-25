

/* Pieces that I would need to simulate a ranked-choice voting system:

1. A list of candidates
2. A number of voters (this number should be within a certain range)
--- create voter ballot objects equal to the numOfVoters that are randomly generated from the number of candidates
3. Each voter would need to rank the candidates in order for however many candidate there are.
4. runMockElecion function should randomly create ballots for the numOfVoters with each candidate receiving a ranking from each voter.
--- results should display the primary, seconday, tertiary, etc candidates in order preferably
--- isWinner function should check whether a candidate received over 50% of the vote, if not...
--- then the candidate with the least amount of votes should be dropped and runMockElection function should be run again.
--- but this time the voters that primarily chose the eleminated candidate will have their votes distributed to their second choice candidate.
--- repeat until winner. 
4. The results of each election and runoff election would need to be displayed in graph form.
--- 

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


//Logic

let randomize = (list) => {
    let newList = list.sort(() => Math.random() - 0.5)
    return newList
  }
  
  //Logic
  // Logs candidates then returns whole list
  function listCandidates (candidates) {
      for (let i = 0; i < candidates.length; i++) {
        console.log(candidates[i])
      }
      return candidates
  }
  
  let ballots = []
  
  // Creates a ballot from a candidate list
  let generateBallot = (candidates) => {
    let ballot = {
      id: ballots.length + 1,
      rank: randomize(demCandidates)
    }
    // console.log("ballot: ", ballot)
    return ballot
  }
  
  let makeBallots = (numOfBallots) => {
    for (let i = 0; i < numOfBallots; i++) {
      ballots.push(generateBallot(demCandidates))
      console.log("List of Ballots: ", ballots)
    }
    return ballots
  }
  
  makeBallots(3)