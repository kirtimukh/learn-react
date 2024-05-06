import React from 'react'

const Navbar = ({ formView, setFormView }) => {
    const changeView = (view) => {
        setFormView(view)
    }
    return (
        <nav className="flex items-center justify-between py-4 px-6 w-full flex-none" id='navbar'>
            <div className="flex items-center">
                <div className="text-slate-900 font-semibold text-lg">React Applications</div>
            </div>
            <div className="relative flex flex-row">
                <div
                    className={formView === 'profiler' ? 'selectedView' : ''}
                    onClick={() => changeView('profiler')}
                >Profiler</div>
                <span className='w-5'></span>
                <div
                    className={formView === 'reminder' ? 'selectedView' : ''}
                    onClick={() => changeView('reminder')}
                >Reminder</div>
            </div>
        </nav>
    )
}

export default Navbar