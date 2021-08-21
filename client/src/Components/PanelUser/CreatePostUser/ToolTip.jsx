import React from 'react'

function ToolTip() {
    return (
        <div>
            <div className="flex">
                <div className="relative mx-2">
                    <div className="bg-black text-white text-xs rounded py-1 px-4 right-0 bottom:100">
                        Tooltip left
                        <svg className="absolute text-black h-2 left-0 ml-3 top:100" x="0px" y="0px" viewBox="0 0 255 255" xml:space="preserve"><polygon className="fill-current" points="0,0 127.5,127.5 255,0" /></svg>
                    </div>
                </div>
                <div className="relative mx-2">
                    <div className="bg-black text-white text-xs rounded py-1 px-4 right-0 bottom:100">
                        Tooltip center
                        <svg className="absolute text-black h-2 w-full left-0 top:100" x="0px" y="0px" viewBox="0 0 255 255" xml:space="preserve"><polygon className="fill-current" points="0,0 127.5,127.5 255,0" /></svg>
                    </div>
                </div>
                <div className="relative mx-2">
                    <div className="bg-black text-white text-xs rounded py-1 px-4 right-0 bottom:100">
                        Tooltip right
                        <svg className="absolute text-black h-2 right-0 mr-3 top:100" x="0px" y="0px" viewBox="0 0 255 255" xml:space="preserve"><polygon className="fill-current" points="0,0 127.5,127.5 255,0" /></svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ToolTip
