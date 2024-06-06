import Neo from "@/app/component/class";
import { getServerSession } from 'next-auth';
import { option } from "@/app/api/auth/[...nextauth]/option";
import { redirect } from 'next/navigation'

    const Phy =  (props) => {
        
    return(

        <div>
            <Neo
            chapter="Vector"
            playid="PLjo9h8F7l8RAHbgG63db1OAxPvOreASXb"
            />
        </div>
    )
}

export default Phy