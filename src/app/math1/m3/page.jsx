import Neo from "@/app/component/class";
import { getServerSession } from 'next-auth';
import { option } from "@/app/api/auth/[...nextauth]/option";
import { redirect } from 'next/navigation'

    const Math =  (props) => {
        
    return(

        <div>
            <Neo
            chapter="Trigonometry"
            playid="PLxRwi0lKBoQOxfbEbDLusMsbGVF8DUYKN"
            />
        </div>
    )
}

export default Math