import Image from "next/image";
import React from "react";

const Footer: React.FC = () => {
    return (
        <div className="bg-main h-[48px] pl-[15px] flex justify-between items-center">
            <Image src={"/logo.png"} alt={"Logo"} height={44} width={120}  />
            <div className="text-[10px] pt-[25px] pr-[4px] text-white">
                copy right txt
            </div>
        </div>
    );
}

export default Footer;
