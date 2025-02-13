import { useEffect } from "react";
let localStateValue = undefined;

function useState(initial) {
    if (localStateValue === undefined) {
        localStateValue = initial;
    }
    const setValue = (val) => {
        localStateValue = val;
    }
    const retVals = [localStateValue, setValue];
    return retVals;
}
export default function Demo({useState}) {
    const [text1, setText1] = useState("First");
    useEffect(() => {
        document.title = `${text1.length}`;
    })
    const [text2, setText2] = useState("Last");
    return(
        <div className="container" >
            <h3>simple state and lifecycle management</h3>
            <input onChange={(e) => setText1(e.target.value)} value={text1} />
            <hr />
            <input onChange={(e) => setText2(e.target.value)} value={text2} />
            <hr />
            <h2>{text1} {text2} </h2>
        </div>
    )
}