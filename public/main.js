function main() {
  function updateTeam1Name(event) {
    const teamName = document.querySelector('.team1 h2')
    teamName.textContent = event.target.value
    console.log(event.target.value)
    console.log(event)
  }
  document
    .querySelector('.team1 input')
    .addEventListener('input', updateTeam1Name)

  function updateTeam2Name(event) {
    const teamName = document.querySelector('.team2 h2')
    teamName.textContent = event.target.value
    console.log(event.target.value)
    console.log(event)
  }
  document
    .querySelector('.team2 input')
    .addEventListener('input', updateTeam2Name)

  let scoreCounter = 0
  function updateTeam1ScoreAdd() {
    if (scoreCounter > 20) {
      window.alert('Thats a mercy rule!!')
    }
    scoreCounter++
    const addScore = document.querySelector('.team1 h3')
    addScore.textContent = scoreCounter
  }
  document.querySelector('.add').addEventListener('click', updateTeam1ScoreAdd)

  // let scoreCounter = 0
  // function updateTeam1ScoreSubtract() {
  //   if (scoreCounter < 0) {
  //     window.alert('No No No!!')
  //   }
  //   scoreCounter--
  //   const subtractScore = document.querySelector('.team1 h3')
  //   subtractScore.textContent = scoreCounter
  // }
  // document
  //   .querySelector('.subtract')
  //   .addEventListener('click', updateTeam1ScoreSubtract)
}
document.addEventListener('DOMContentLoaded', main)
