import { useState } from "react";


export default function Airline() {
    const [close, setclose] = useState(true);
    const members = [
        {
            "id" :"1",
            "key": "200",
            "text": "AirTran Airways Corporation: FL"
        },
        {
            "id" :"2",
            "key": "170",
            "text": "Alaska Airlines Inc.: AS"
        },
        {
            "id" :"3",
            "key": "198",
            "text": "American Airlines Inc.: AA"
        },
        {
            "id" :"4",
            "key": "197",
            "text": "Delta Air Lines Inc.: DL"
        },
        {
            "id" :"5",
            "key": "203",
            "text": "Envoy Air: MQ"
        },
        {
            "id" :"6",
            "key": "280",
            "text": "ExpressJet Airlines Inc.: EV"
        },
        {
            "id" :"7",
            "key": "436",
            "text": "Frontier Airlines Inc.: F9"
        },
        {
            "id" :"8",
            "key": "190",
            "text": "Hawaiian Airlines Inc.: HA"
        },
        {
            "id" :"9",
            "key": "259",
            "text": "JetBlue Airways: B6"
        },
        {
            "id" :"10",
            "key": "234",
            "text": "SkyWest Airlines Inc.: OO"
        },
        {
            "id" :"11",
            "key": "393",
            "text": "Southwest Airlines Co.: WN"
        },
        {
            "id" :"12",
            "key": "197",
            "text": "United Air Lines Inc.: UA"
        },
        {
            "id" :"13",
            "key": "255",
            "text": "US Airways Inc.: US (Merged with America West 9/05. Reportin"
        },
        {
            "id" :"14",
            "key": "271",
            "text": "Virgin America: VX"
        },
        {
            "id" :"15",
            "key": "3483",
            "text": "Overall Result",
            "type": "RESULT"
        }
    ]

    const onChangehandle = () => {
        setclose(!true)
    }
    return (
        <>
            {
                close ?
                    <div className="main">
                        <table>
                            <tbody>
                                <tr>
                                    <th>airlineanme</th>
                                    <th>no of trips</th>
                                    <th><button onClick={onChangehandle}>close</button></th>
                                </tr>
                                {
                                    members.map((item) => (
                                        <tr >
                                            <td>{item.text}</td>
                                            <td>{item.key}</td>
                                            <td></td>
                                        </tr>
                                    ))}
                            </tbody>
                        </table>
                    </div>
                    : ""
            }
        </>

    )
}