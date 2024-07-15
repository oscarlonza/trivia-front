import constants from "../utils/constants"
import isAuthenticated from "./auth"

const getRankingByNickname = async (nickname) => {
  if (isAuthenticated()) {
    const response = await fetch(`${constants.apiUrl}/api/score/get-all`)
    const data = await response.json()
    if (data.process) {
      const [...rankings] = data.data
      const user = rankings.filter(x => x.nickname === nickname)[0]
      return rankings.indexOf(user) + 1
    } else {
      console.log('Error retrieving scores:', data.message)
    }
  }
  return 0
}

export {
  getRankingByNickname
}