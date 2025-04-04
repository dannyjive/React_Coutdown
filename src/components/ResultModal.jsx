import { useRef, useImperativeHandle } from "react";


export default function ResultModal({ref, result, targetTime}){
    
    const dialog = useRef();

    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal();
            }
        }
    });

    return (
    <dialog ref={dialog} className="result-modal">
        <h2>You {result}</h2>
        <p>The target time was <strong>{targetTime}</strong></p>
        <p>You stopped the timer with <strong>X seconds left.</strong></p>
        <form method='dialog'>
            <button>Close</button>
        </form>
    </dialog>
    );
}