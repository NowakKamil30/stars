import 
    React,
    {useRef,
    useEffect} from 'react';
import Sky from "../classes/Sky";

const Canvas = () =>{
    const ref = useRef();

    useEffect(()=>{
        const canvas = ref.current;
        const sky = new Sky(canvas,"#000000",1000);
        sky.run();
    })
    return (
        <canvas
            ref={ref}
        />
    );
}

export default Canvas;