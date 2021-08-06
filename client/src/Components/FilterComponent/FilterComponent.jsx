import React from 'react'
import { Disclosure } from "@headlessui/react";

function FilterComponent() {
    return (
        <div>
            <Disclosure as="nav" className="bg-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <select >
                        <option className="">xd</option>
                    </select>
                </div>
            </Disclosure>
        </div>
    )
}

export default FilterComponent
