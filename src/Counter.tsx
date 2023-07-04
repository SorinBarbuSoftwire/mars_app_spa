import React, {useEffect, useState} from "react";

const noClicksKey:string = "MARS_App_noClicks";

function Counter() {
    const [noClicks, setNoClicks] = useState(0);

    useEffect(() => {
        let clicksStr: string | null = localStorage.getItem(noClicksKey);
        if  (clicksStr !== null) {
            let clicksNum: number | undefined = parseInt(clicksStr);
            if (clicksNum !== undefined) {
                setNoClicks(clicksNum);
            }
        }
    }, []);

    function handleClick() {
        localStorage.setItem(noClicksKey, (noClicks + 1).toString());
        setNoClicks(noClicks + 1);
    }

    return (
        <div>
            <div>{noClicks}</div>
            <button onClick={handleClick}>
                +
            </button>
        </div>
    );
}

export default Counter;