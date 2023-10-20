import Image from "next/image";
import React from "react";

import map from '../../../../public/map.svg';
import { TitleText } from "../../../components/general/TitleText";

const Access = (): JSX.Element => {
    return (
        <div className="mx-auto w-fit">
            <TitleText title='access' />
            <Image className="mt-[10px]" src={map} alt='map' width={320} height={180} />
        </div>
    );
};

export default Access;