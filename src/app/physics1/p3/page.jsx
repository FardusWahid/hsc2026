import Neo from "@/app/component/class";
import { getServerSession } from 'next-auth';
import { option } from "@/app/api/auth/[...nextauth]/option";
import { redirect } from 'next/navigation'

    const Phy =  (props) => {
       
    return(

        <div>
            <Neo
            chapter="Dynamics"
            playid="PLvgzT9BBU5Xxt1r_-KByEu4xfu_Rt3o_c"
            />
        </div>
    )
}

export default Phy