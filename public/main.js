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
      window.alert(`Your team has won!`)
      clearInterval(interval)
      return
    }
    scoreCounter++
    const addScore = document.querySelector('.team1 h3')
    addScore.textContent = scoreCounter
  }
  document.querySelector('.add').addEventListener('click', updateTeam1ScoreAdd)

  function updateTeam1ScoreSubtract() {
    if (scoreCounter <= 0) {
      clearInterval(interval)
      return
    }
    scoreCounter--
    const subtractScore = document.querySelector('.team1 h3')
    subtractScore.textContent = scoreCounter
  }
  document
    .querySelector('.subtract')
    .addEventListener('click', updateTeam1ScoreSubtract)

  function updateTeam2ScoreAdd() {
    if (scoreCounterTwo > 20) {
      window.alert(`Your team has won!`)
      clearInterval(interval)
      return
    }
    scoreCounterTwo++
    const addScoreTwo = document.querySelector('.team2 h3')
    addScoreTwo.textContent = scoreCounterTwo
  }
  document.querySelector('.add').addEventListener('click', updateTeam2ScoreAdd)

  function updateTeam2ScoreSubtract() {
    if (scoreCounterTwo < 0) {
      clearInterval(interval)
      return
    }
    scoreCounterTwo--
    const subtractScoreTwo = document.querySelector('.team2 h3')
    subtractScoreTwo.textContent = scoreCounterTwo
  }
  document
    .querySelector('.subtract')
    .addEventListener('click', updateTeam2ScoreSubtract)

  function resetScore() {
    scoreCounter = document.querySelector('.team1 h3')
    scoreCounter = 0
    scoreCounterTwo = document.querySelector('.team2 h3')
    scoreCounterTwo = 0
  }
  document.querySelector('button').addEventListener('click', resetScore)
}
document.addEventListener('DOMContentLoaded', main)
