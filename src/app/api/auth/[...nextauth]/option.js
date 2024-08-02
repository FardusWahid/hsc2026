import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google';

export const option = {

    providers: [

        GoogleProvider({
           
        profile(profile){
            console.log("Google Profile:", profile);

            let userRole = "unpaid";
            const adminEmails = ["applebyte87@gmail.com","araf55090@gmail.com","tasikurr1@gmail.com","yourmomxsenpai@gmail.com"];
            const preEmails = ["farduswahid87@gmail.com", "atia.afroj5@gmail.com","labibasrabon109@gmail.com","raiyen1610@gmail.com","study.bd07@gmail.com","motiarrahman910848@gmail.com","abedaassistant@gmail.com"];
            const proUsers = ["omorbinfaruk346@gmail.com","shiblerrahman26@gmail.com","samimohammad2008@gmail.com"];
            const pmEmails = ["farduswahid31@gmail.com","najmossakibtanvir@gmail.com","najihatabassum9@gmail.com"];

            if(profile?.email && adminEmails.includes(profile.email)){
                userRole= "paid";
            }else if(profile?.email && proUsers.includes(profile.email)){
                userRole = "pro";
            }else if(profile?.email && preEmails.includes(profile?.email)){
                userRole = "premium";
            }else if(profile?.email && pmEmails.includes(profile.email)){
                userRole = "prime";
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