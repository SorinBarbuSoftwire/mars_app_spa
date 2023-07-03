import React, {Dispatch, SetStateAction, useContext, useState} from "react";

interface ClickManager {
    noClicks: number;
    setNoClicks: Dispatch<SetStateAction<number>>;
}

const CounterContext = React.createContext<ClickManager>({
    noClicks : 0,
    setNoClicks: (): void => {}
});

function CustomCounter() {
    return (
        <>
            <Comp1/>
        </>
    );
}

function Comp4() {
    const value: ClickManager = useContext(CounterContext);
    return (
        <div>
            Clicks: {value.noClicks}
        </div>
    );
}

function Comp3() {
    return (
        <>
            <Comp4/>
            <p>
                Click the button!
            </p>
        </>
    );
}

function Comp2() {
    const value: ClickManager = useContext(CounterContext);
    function handleClick(): void {
        value.setNoClicks(value.noClicks + 1);
    }

    return (
        <button onClick={handleClick}>
            Button
        </button>
    );
}

function Comp1() {
    const [noClicks, setNoClicks2] = useState<number>(0);

    return (
    <CounterContext.Provider value={{
        noClicks: noClicks,
        setNoClicks: setNoClicks2
    }}>
        <Comp2/>
        <Comp3/>
    </CounterContext.Provider>
    );
}
export default CustomCounter;