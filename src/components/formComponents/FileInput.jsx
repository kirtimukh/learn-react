import React from 'react'

const FileInput = ({ inputLabel, className, validExtensions, handleFile }) => {
    const isValidFileUploaded = (file) => {
        const fileExtension = file.type.split('/')[1]
        return validExtensions.includes(fileExtension)
    }

    const handleChange = e => {
        if (e.target.files.length < 1) {
            return;
        }
        const file = e.target.files[0];
        if (isValidFileUploaded(file)) {
            handleFile(file)
        } else {
            console.log("file is invalid")
        }
    }

    return (
        <div className={className}>
            <label>
                <strong>
                    {inputLabel}:
                </strong>
                <span>&nbsp; &nbsp;</span>
            </label>
            <input
                className='w-4/6'
                type="file"
                onChange={(e) => handleChange(e)}
            />
        </div>
    )
}

export default FileInput