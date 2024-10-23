
import SideBar from '../../components/admin/sideBar';
import { Outlet, Routes, Route } from 'react-router-dom';
import roleLinks from '../../components/admin/roleLinks';
import { useRole } from '../../hooks/useRole';

function Admin() {

    const {role} = useRole();

    return(
        <>
            <div className="flex">
                <SideBar />
                <div className="flex-1 p-6">
                    {/* <Outlet /> */}
                    <Routes>
                    {roleLinks[role]?.map((link, index) => (
                        <Route key={index} path={link.path} element={link.element} />
                    ))}

                    </Routes>
                </div>

            </div>
            
        </>
    );
}

export default Admin;