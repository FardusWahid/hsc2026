import Neo from "@/app/component/class";
import { getServerSession } from 'next-auth';
import { option } from "@/app/api/auth/[...nextauth]/option";
import { redirect } from 'next/navigation'

    const Math =  (props) => {
        
     
    return(

        <div>
            <Neo
            chapter="Circles"
            playid=""
            />
        </div>
    )
}

export default Math