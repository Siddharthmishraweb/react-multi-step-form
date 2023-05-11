import FormInputs from './FormInputs'
import useFormContext from "../hooks/useFormContext";
import { Button } from 'react-bootstrap';


const Form = () => {

    const {
        page,
        setPage,
        data,
        title,
        canSubmit,
        disablePrev,
        disableNext,
        prevHide,
        nextHide,
        submitHide
    } = useFormContext()

    const handlePrev = () => setPage(prev => prev - 1)

    const handleNext = () => setPage(prev => prev + 1)

    const handleSubmit = e => {
        e.preventDefault()
        console.log(JSON.stringify(data))
    }


    const content = (
        <form className="form flex-col" onSubmit={handleSubmit}>

            <header className="form-header">
                <h2 style={{fontFamily:'Inter', fontWeight: '400'}}>{title[page]}</h2>

                <div className="button-container">
                    <button type="button" className={`button ${prevHide}`} onClick={handlePrev} disabled={disablePrev} style={{ color:"white", backgroundColor: '#7C55C5' , width: "100%" }}>Prev</button>
                </div>
            </header>
 

            <FormInputs />

            <footer>
                <button type="button" className={`button ${nextHide}`} onClick={handleNext} disabled={disableNext} style={{ color:"white", backgroundColor: '#7C55C5' , width: "100%" }}>Next</button>
                <button type="submit" className={`button ${submitHide}`} disabled={!canSubmit} style={{ color:"white", backgroundColor: '#7C55C5', width: "100%"  }}>Submit</button>
            </footer>

        </form>
    )

    return content
}
export default Form