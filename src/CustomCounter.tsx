import React, {useState} from "react";

function CustomCounter() {
    return (
        <>
            {Comp1()}
        </>
    );
}

function Comp4(noClicks: number, setNoClicks: React.Dispatch<React.SetStateAction<number>>) {
    return (
        <div>
            Clicks: {noClicks}
        </div>
    );
}

function Comp3(noClicks: number, setNoClicks: React.Dispatch<React.SetStateAction<number>>) {
    return (
        <>
            {Comp4(noClicks, setNoClicks)}
            <p>
                Click the button!
            </p>
        </>
    );
}

function Comp2(noClicks: number, setNoClicks: React.Dispatch<React.SetStateAction<number>>) {
    function handleClick() {
        setNoClicks(noClicks + 1);
    }

    return (
        <button onClick={handleClick}>
            Button
        </button>
    );
}

function Comp1() {
    const [noClicks, setNoClicks] = useState(0);

    return (
        <>
            {Comp2(noClicks, setNoClicks)}
            {Comp3(noClicks, setNoClicks)}
        </>
    );
}
export default CustomCounter;