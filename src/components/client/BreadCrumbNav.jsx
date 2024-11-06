// src/components/Breadcrumb.jsx
import React from 'react';
import { ChevronRightIcon } from '@heroicons/react/24/outline'; // For navigation arrows


const Breadcrumb = ({ paths }) => {
    return (
        <nav className="bg-gray-100 py-3 px-5 rounded-md w-full container max-w-full" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2">
                {paths.map((path, index) => (
                    <li key={index} className="flex items-center">
                        <span
                            
                            className={`text-sm font-medium ${
                                index === paths.length - 1 ? 'text-gray-500' : 'text-indigo-600'
                            } hover:underline`}
                        >
                            {path.label}
                        </span>
                        {index < paths.length - 1 && (
                            <ChevronRightIcon className="h-5 w-5 text-gray-400 mx-2" />
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
};

export default Breadcrumb;
