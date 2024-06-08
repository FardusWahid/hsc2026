import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google';

export const option = {

    providers: [

        GoogleProvider({
           
        profile(profile){
            console.log("Google Profile:", profile);

            let userRole = "unpaid";
            const adminEmails = [];
            const preEmails = ["farduswahid87@gmail.com", "atia.afroj5@gmail.com", "najihatabassum9@gmail.com"];
            const proUsers = ["farduswahid31@gmail.com", "omorbinfaruk346@gmail.com", "najmossakibtanvir@gmail.com"];


            if(profile?.email && adminEmails.includes(profile.email)){
                userRole= "admin";
            }else if(profile?.email && proUsers.includes(profile.email)){
                userRole = "pro";
            }else if(profile?.email && preEmails.includes(profile?.email)){
                userRole = "premium"
            }

             return{
                ...profile,
                role: userRole,
                id: profile.sub
             };

        },



        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,

        }),
    ],

    session: {
        strategy: 'jwt',
        maxAge: 86400,
    },

    callbacks: {
        async jwt({token, user}) {
            if(user) token.role = user.role;
            return token;
        },
        async session({session, token}){
            if(session?.user) session.user.role = token.role;
            return session;
        },
    }
}