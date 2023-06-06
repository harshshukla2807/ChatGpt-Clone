import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
const util = require('node:util');

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
      
      
      (()=>{
          const google_id=process.env.GOOGLE_ID
          const google_secret=process.env.GOOGLE_SECRET
          
          if(!google_id || !google_secret){
              throw new Error("Google ID or Secret is missing")
          }
          
          return GoogleProvider({

            clientId: google_id,
          clientSecret: google_secret,
          
        })
          
      })(),
    
    // ...add more providers here
  ],
}
export default NextAuth(authOptions)