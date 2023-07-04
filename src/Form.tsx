import React, {useMemo, useRef, useState} from "react";
import Select, {SingleValue} from "react-select";
import {AxiosError, AxiosResponse} from "axios";
import axios from 'axios';

enum Rovers {
    Curiosity = 'curiosity',
    Opportunity = 'opportunity',
    Spirit = 'spirit',
}

enum Cams {
    FHAZ = 'fhaz',
    RHAZ = 'rhaz',
    MAST = 'mast',
    CHEMCAM = 'chemcam',
    MAHLI = 'mahli',
    MARDI = 'mardi',
    NAVCAM = 'navcam',
    PANCAM = 'pancam',
    MINITES = 'minites'
}

interface SelectOptions {
    value: Rovers | Cams | null,
    label: string
}

function Form() {
    // React Select Options
    const roverOptions: SelectOptions[] = [
        { value: Rovers.Curiosity, label: Rovers.Curiosity },
        { value: Rovers.Opportunity , label: Rovers.Opportunity },
        { value: Rovers.Spirit , label: Rovers.Spirit }
    ];
    const curiosityCamOptions: SelectOptions[] = [
        { value: Cams.FHAZ, label: Cams.FHAZ },
        { value: Cams.RHAZ, label: Cams.RHAZ },
        { value: Cams.MAST, label: Cams.MAST },
        { value: Cams.CHEMCAM, label: Cams.CHEMCAM },
        { value: Cams.MAHLI, label: Cams.MAHLI },
        { value: Cams.MARDI, label: Cams.MARDI },
        { value: Cams.NAVCAM, label: Cams.NAVCAM },
    ];
    const opportunityCamOptions: SelectOptions[] = [
        { value: Cams.FHAZ, label: Cams.FHAZ },
        { value: Cams.RHAZ, label: Cams.RHAZ },
        { value: Cams.NAVCAM, label: Cams.NAVCAM },
        { value: Cams.PANCAM, label: Cams.PANCAM },
        { value: Cams.MINITES, label: Cams.MINITES },
    ];
    const spiritCamOptions: SelectOptions[] = opportunityCamOptions;
    // Even Listeners
    const [selectedRover, setSelectedRover] = useState<Rovers | null>(null);
    const [selectedCam, setSelectedCam] = useState<Cams | null>(null);
    const camOptions: SelectOptions[] = useMemo(() => {
        switch (selectedRover) {
            case Rovers.Curiosity: {
                return curiosityCamOptions;
            }
            case Rovers.Opportunity: {
                return opportunityCamOptions;
            }
            case Rovers.Spirit: {
                return spiritCamOptions;
            }
            default: {
                return [];
            }
        }
    }, [selectedRover]);
    // Handle Change Functions
    function handleChangeRover(selectedRover: SingleValue<SelectOptions>): void {
        if (selectedRover === null || selectedRover.value === null) {
            return;
        }
        setSelectedRover(selectedRover.value as Rovers);

        // Reset cam
        setSelectedCam(null);
    }
    function handleChangeCam(selectedCam: SingleValue<SelectOptions>): void {
        if (selectedCam === null) {
            return;
        }
        if (selectedCam != null) {
            setSelectedCam(selectedCam.value as Cams);
        }
    }

    function handleSubmit(): void {
        console.log("http://localhost:8000/rovers/" + selectedRover + "/photos/" + selectedCam);
        axios.get("http://localhost:8000/rovers/" + selectedRover + "/photos/" + selectedCam)
            .then((response: AxiosResponse) => {console.log(response.data);})
            .catch((error:AxiosError) => {console.log(error.response);});
    }

    return (
        <div>
            <p>------------------</p>
            <div>Debug:</div>
            <div>Rover: {selectedRover}</div>
            <div>Cam: {selectedCam}</div>
            <p>------------------</p>

            <Select options={roverOptions}
                    onChange={(selected: SingleValue<SelectOptions>) => handleChangeRover(selected)}
            />
            <Select options={camOptions}
                    onChange={(selected: SingleValue<SelectOptions>) => handleChangeCam(selected)}
                    value={selectedCam ? camOptions.find((camOption) => camOption.value === selectedCam) : null}
            />
            <button onClick={handleSubmit}>
                Submit
            </button>

        </div>
    );
}

export default Form;