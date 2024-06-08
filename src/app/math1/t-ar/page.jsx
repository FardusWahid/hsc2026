import Neo from "@/app/component/class";
import { getServerSession } from 'next-auth';
import { option } from "@/app/api/auth/[...nextauth]/option";
import { redirect } from 'next/navigation'

    const Math =  (props) => {
        
    return(

        <div>
            <Neo
            chapter="Trigonometry 2025"
            playid="PLvgzT9BBU5XzLmmMwFPTT9LStzKL5-NCn"
            />
        </div>
    )
}

export default Math