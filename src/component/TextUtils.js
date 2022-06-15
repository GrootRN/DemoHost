import React, { useState } from 'react'

const TextUtils = () => {
    const [text, setText] = useState('');

    const TextChange = (e) => {
        setText(e.target.value)
    }

    const upperCase = () => {
        setText(text.toUpperCase())
    }
    const lowerCase = () => {
        setText(text.toLowerCase())
    }
    // const Capitalize = () => {
    //     <style></style>
    // }

    return (
        <div className='container' >

            <div className="mb-3">
                <h1> Enter Text to analyz </h1>
                <textarea className="form-control" placeholder='Enter text here' id="exampleFormControlTextarea1" rows="8" value={text} onChange={TextChange} ></textarea>
                <button className='btn w-5 m-2 ' onClick={upperCase} >Convert To Upper Case</button>
                <button className='btn w-5 m-2' onClick={lowerCase} >Convert To Lower Case</button>
                {/* <button className='btn w-5 m-2' onClick={Capitalize} >Convert To Lower Case</button> */}
            </div>
        </div>
    )
}

export default TextUtils