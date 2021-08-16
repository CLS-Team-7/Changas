import React from 'react'

function ToolTip() {
    return (
        <div>
            <div class="flex">
                <div class="relative mx-2">
                    <div class="bg-black text-white text-xs rounded py-1 px-4 right-0 bottom:100">
                        Tooltip left
                        <svg class="absolute text-black h-2 left-0 ml-3 top:100" x="0px" y="0px" viewBox="0 0 255 255" xml:space="preserve"><polygon class="fill-current" points="0,0 127.5,127.5 255,0" /></svg>
                    </div>
                </div>
                <div class="relative mx-2">
                    <div class="bg-black text-white text-xs rounded py-1 px-4 right-0 bottom:100">
                        Tooltip center
                        <svg class="absolute text-black h-2 w-full left-0 top:100" x="0px" y="0px" viewBox="0 0 255 255" xml:space="preserve"><polygon class="fill-current" points="0,0 127.5,127.5 255,0" /></svg>
                    </div>
                </div>
                <div class="relative mx-2">
                    <div class="bg-black text-white text-xs rounded py-1 px-4 right-0 bottom:100">
                        Tooltip right
                        <svg class="absolute text-black h-2 right-0 mr-3 top:100" x="0px" y="0px" viewBox="0 0 255 255" xml:space="preserve"><polygon class="fill-current" points="0,0 127.5,127.5 255,0" /></svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ToolTip
