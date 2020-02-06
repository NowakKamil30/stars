import 
    React,
    {useRef,
    useEffect} from 'react';

const Canvas = () =>{
    const ref = useRef();

    useEffect(()=>{
        const canvas = ref.current;
        const context = canvas.getContext('2d');
    })
    return (
        <canvas
            ref={ref}
            style={{width: '100px', height: '100px' }}
        />
    );
}

export default Canvas;