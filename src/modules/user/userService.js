let users = []

const getUserByEmail = (searchEmail) => 
users.find(( obj) => obj.email === searchEmail)

export const signup = (data) => {
   if (getUserByEmail(data.email)) {
      console.log('EXISTE UM EMAIL')
   } else {
    users.push(data)
   }
   
return true
  }