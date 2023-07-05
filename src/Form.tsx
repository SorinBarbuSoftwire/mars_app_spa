import React, {useMemo, useState} from "react";
import Select, {SingleValue} from "react-select";
import {AxiosError, AxiosResponse} from "axios";
import axios from 'axios';
import './style/Form.css'

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

    const [img1, setImg1] = useState<string>('');
    const [img2, setImg2] = useState<string>('');
    const [img3, setImg3] = useState<string>('');
    const [img4, setImg4] = useState<string>('');
    const [img5, setImg5] = useState<string>('');

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
        setImg1('');
        setImg2('');
        setImg3('');
        setImg4('');
        setImg5('');

        axios.get("http://localhost:8000/rovers/" + selectedRover + "/photos/" + selectedCam, {
            params: {
                sol: selectedSol
            }
        })
            .then((response: AxiosResponse) => {
                if (response.data.photos.length > 0) {
                    setImg1(response.data.photos[0].img_src)
                }
                if (response.data.photos.length > 1) {
                    setImg2(response.data.photos[1].img_src)
                }
                if (response.data.photos.length > 2) {
                    setImg3(response.data.photos[2].img_src)
                }
                if (response.data.photos.length > 3) {
                    setImg4(response.data.photos[3].img_src)
                }
                if (response.data.photos.length > 4) {
                    setImg5(response.data.photos[4].img_src)
                }
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
                <button onClick={handleSubmit} disabled={selectedCam === null}>
                    Submit
                </button>
            </div>
            <div id="imgDiv">
                {img1 !== '' && <img className="img" src={img1} alt="img1"/>}
                {img2 !== '' && <img className="img" src={img2} alt="img2"/>}
                {img3 !== '' && <img className="img" src={img3} alt="img3"/>}
                {img4 !== '' && <img className="img" src={img4} alt="img4"/>}
                {img5 !== '' && <img className="img" src={img5} alt="img5"/>}
            </div>

        </div>
    );
}

export default Form;