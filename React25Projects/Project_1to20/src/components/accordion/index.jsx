import { useState } from "react";
import data from "./Data"
export default function Accordion() {


    const [selected, setSelected] = useState(null)
    const [enableMultiSeletion, setEnableMultiSeletion] = useState(false)
    const [multiSelected, setMultiSelected] = useState([])
    const handelSelect = (getId) => {
        console.log(getId);
        setSelected(getId === selected ? null : getId);
    }
    const handleMultiSelect = (getId) => {
        console.log('Multi Sle enabled');
        console.log(getId);

        let copyId = [...multiSelected];

        const index = copyId.indexOf(getId);
        if (index > -1) {
            copyId.splice(index, 1);
        } else {
            copyId.push(getId);
        }
        setMultiSelected(copyId);
        console.log(...copyId);

    }

    return (
        <div className="t-center">
            <div className="accordion flex mx-auto item-center flex-col w-[500px]">
                <button
                    onClick={() => setEnableMultiSeletion(!enableMultiSeletion)}
                    className="border border-black bg-slate-600 text-white px-4 py-2 w-50 mx-auto rounded-lg mb-6 cursor-pointer hover:bg-slate-900">Enable MultiSelection</button>
                {
                    data.map((item) => {
                        return (
                            <div
                                className="accordion-item mb-4 w-[500px] mx-auto bg-slate-600 p-4 text-white">

                                <div
                                    onClick={enableMultiSeletion ? () => handleMultiSelect(item.id) : () => handelSelect(item.id)}
                                    className="accordion-item-header flex justify-between item-center  mb-2">
                                    <h1 className="text-xl cursor-pointer">{item.question}</h1>
                                    <span className="check text-2xl cursor-pointer">
                                        {
                                            enableMultiSeletion ? (multiSelected === item.id ? "-" : "+")
                                                : (selected === item.id ? "-" : "+")
                                        }</span>
                                </div>
                                {
                                    enableMultiSeletion ? multiSelected.indexOf(item.id) !== -1 && (<p className="accordion-item-body">{item.answer}</p>)
                                        : selected === item.id && (<p className="accordion-item-body">{item.answer}</p>)
                                }
                            </div>

                        )
                    })
                }
            </div>
        </div>
    )
}