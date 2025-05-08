import User from "../models/users.js"

const syncAll = async () => {
    try {
      await User.sync({ alter: true })
      
    } catch (error) {
      console.error(error.message)
    }
  }

  export default syncAll
