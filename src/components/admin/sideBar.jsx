
// import { Link } from "react-router-dom";
// import { useRole } from "../../hooks/useRole";
// import roleLinks from './roleLinks'

// function SideBar() {

//     const {role} = useRole();

//     return (
//         <aside className="w-64 h-screen bg-gray-800 text-white">
//             <div className="p-4">
//             <h2 className="text-2xl font-bold mb-4">Shamba Fusion</h2>
//             <ul>
//             {roleLinks[role]?.map((link, index) => (
//                 <li key={index}>
//                     <Link
//                         to={link.path}
//                         className="block py-2 px-4 rounded hover:bg-gray-700 transition"
//                     >
//                         {link.name}
//                     </Link>
//                 </li>
//             ))}
//             </ul>
//         </div>
//         </aside>
//     );
// }

// export default SideBar;

import React from 'react';
import { Link } from "react-router-dom";
import { useRole } from "../../hooks/useRole";
import roleLinks from './roleLinks';
import { ChevronRight, Menu } from 'lucide-react';

function SideBar() {
    // const {role} = useRole();
    const role = localStorage.getItem('user_role')
    return (
        <aside className="w-64 h-full bg-gradient-to-b from-primary to-primary-foreground text-primary-foreground flex flex-col">
            <div className="p-4 border-b border-primary/10">
                <h2 className="text-2xl font-bold flex items-center space-x-2">
                    <Menu className="h-6 w-6" />
                    <span>Shamba Fusion</span>
                </h2>
            </div>
            <nav className="flex-1 overflow-y-auto">
                <ul className="py-4 space-y-1">
                    {roleLinks[role]?.filter(link => link.name !== 'Landing')
                    .map((link, index) => (
                        <li key={index}>
                            <Link
                                to={link.path}
                                className="flex items-center py-2 px-4 text-sm hover:bg-primary-foreground/10 transition-colors duration-200 rounded-lg mx-2 group"
                            >
                                <span className="flex-1">{link.name}</span>
                                <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className="p-4 border-t border-primary/10">
                <p className="text-xs text-center text-primary-foreground/60">
                    © 2024 Shamba Fusion
                </p>
            </div>
        </aside>
    );
}

export default SideBar;