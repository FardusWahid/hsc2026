import Neo from "@/app/component/class";
import { getServerSession } from 'next-auth';
import { option } from "@/app/api/auth/[...nextauth]/option";
import { redirect } from 'next/navigation'

    const Math = async (props) => {
        const session = await getServerSession(option);
       if(session?.user?.role !== "premium"){
        redirect("/denied")
     }
    return(

        <div>
            <Neo
            chapter="Straight Line"
            playid="PLvgzT9BBU5Xxt1r_-KByEu4xfu_Rt3o_c"
            />
        </div>
    )
}

export default Math