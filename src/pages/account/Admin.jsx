
import SideBar from '../../components/admin/sideBar';
import { Routes, Route } from 'react-router-dom';
import roleLinks from '../../components/admin/roleLinks';

function Admin() {

    // const {role} = useRole();
    const role = localStorage.getItem('user_role')
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