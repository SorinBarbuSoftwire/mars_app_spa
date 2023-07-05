import React, {useMemo, useState} from "react";
import Select, {SingleValue} from "react-select";
import {AxiosError, AxiosResponse} from "axios";
import axios from 'axios';
import './style/Form.css'

type ImgDict = Record<string, string>;

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
    const [selectedSol, setSelectedSol] = useState(1);

    const [imgs, setImgs] = useState<ImgDict>({});

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

    function handleSlider(e: React.ChangeEvent<HTMLInputElement>): void {
        setSelectedSol(parseInt(e.target.value));
    }
    function handleSubmit(): void {
        setImgs({});

        axios.get("http://localhost:8000/rovers/" + selectedRover + "/photos/" + selectedCam, {
            params: {
                sol: selectedSol
            }
        })
            .then((response: AxiosResponse) => {
                const dictAux: ImgDict = {};
                let photosLen = response.data.photos.length;

                if (photosLen > 5) {
                    photosLen = 5;
                }
                for (let i = 0; i < photosLen; i++) {
                    dictAux["img" + i] = response.data.photos[i].img_src;
                }
                setImgs(dictAux);
            })
            .catch((error:AxiosError) => {
                console.log(error.response);
            });
    }
    return (
        <div id="mainDiv">
            <div id="formDiv">
                <div className="optionDiv">
                    <label className="optionLabel">Rover:</label>
                    <Select options={roverOptions}
                            onChange={(selected: SingleValue<SelectOptions>) => handleChangeRover(selected)}
                            className="formSelect"
                    />
                </div>
                <div className="optionDiv">
                    <label className="optionLabel">Cam:</label>
                    <Select options={camOptions}
                            onChange={(selected: SingleValue<SelectOptions>) => handleChangeCam(selected)}
                            value={selectedCam ? camOptions.find((camOption) => camOption.value === selectedCam) : null}
                            className="formSelect"
                    />
                </div>
                <div className="optionDiv">
                    <label className="optionLabel">Sol:<div id="solValueDiv">{selectedSol}</div></label>
                    <input type="range" min={1} max={1000} value={selectedSol} id="solRange" onChange={handleSlider}/>
                </div>
                <button id="formSubmitButton" onClick={handleSubmit} disabled={selectedCam === null}>
                    Submit
                </button>
            </div>
            <div id="imgDiv">
                {imgs['img0'] && <img className="img" src={imgs['img0']} alt="img0"/>}
                {imgs['img1'] && <img className="img" src={imgs['img1']} alt="img1"/>}
                {imgs['img2'] && <img className="img" src={imgs['img2']} alt="img2"/>}
                {imgs['img3'] && <img className="img" src={imgs['img3']} alt="img3"/>}
                {imgs['img4'] && <img className="img" src={imgs['img4']} alt="img4"/>}
            </div>

        </div>
    );
}

export default Form;