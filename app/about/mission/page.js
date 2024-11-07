

import Button from "@/app/component/button";
import Image from "next/image";

import img from "@/public/images/profile.jpg";

const page = () => {
    return (
        <div>
            Mission page

            <Image src={img} alt="img" quality={100} placeholder="blur"/>
            
            <div className='-mt-12'>
                <Button></Button>
            </div>
        </div>
    );
};

export default page;