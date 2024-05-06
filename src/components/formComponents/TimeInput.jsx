import { useState } from 'react';

const TimeInput = ({ className, inputLabel, selectedValue, setSelectedValue }) => {
    const [hour, setHour] = useState('00');
    const [minute, setMinute] = useState('00');

    const handleHourChange = (e) => {
        let newValue = e.target.value;
        if (newValue.length === 1 && /^[0-9]$/.test(newValue)) {
            newValue = '0' + newValue;
            setHour(newValue);
        } else if (newValue.length === 3 && /^0[0-1][0-9]|[2][0-3]$/.test(newValue)) {
            newValue = newValue.substring(1);
            setHour(newValue);
        }
    }

    const handleMinuteChange = (e) => {
        let newValue = e.target.value;
        if (newValue.length === 1 && /^[0-9]$/.test(newValue)) {
            newValue = '0' + newValue;
            setMinute(newValue);
        } else if (newValue.length === 3 && /^0[0-5][0-9]$/.test(newValue)) {
            newValue = newValue.substring(1);
            setMinute(newValue);
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

            <div className='w-fit flex flex-row'>
                <div className='border border-solid border-slate-500'>

                    <input type="text" className='w-7'
                        value={hour}
                        onChange={handleHourChange}
                    />
                    :
                    <input type="text" className='w-7'
                        value={minute}
                        onChange={handleMinuteChange}
                    />
                </div>
                hrs
            </div>
        </div>
    );
}

export default TimeInput