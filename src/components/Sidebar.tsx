import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { FiMenu, FiHome, FiInfo, FiMail } from 'react-icons/fi';

const Sidebar = () => {
    const router = useRouter();
    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <div
            className={`flex flex-col h-screen py-7 px-4 bg-gray-800 text-white transition-all duration-300 ${isCollapsed ? 'w-16' : 'w-64'}`}
        >
            <button
                onClick={toggleCollapse}
                className="block w-8 h-8 mb-4 ml-auto text-white focus:outline-none"
            >
                <FiMenu />
            </button>

            <h2 className={`text-2xl font-bold mb-4 ${isCollapsed ? 'hidden' : 'block'}`}>My Sidebar</h2>

            <ul className={`${isCollapsed ? 'mt-6' : 'mt-0'} text-lg font-medium`}>
                <li
                    className={`py-2 px-3 rounded-lg ${router.pathname === '/' ? 'bg-blue-600' : ''
                        } ${isCollapsed ? 'w-16' : 'w-64'}`}
                >
                    <Link href="/">
                        {isCollapsed ? (
                            <FiHome />
                        ) : (
                            <>
                                <FiHome />
                                <p>Dashboard</p>
                            </>
                        )}
                    </Link>
                </li>
                <li
                    className={`py-2 px-3 rounded-lg ${router.pathname === '/about' ? 'bg-blue-600' : ''
                        } ${isCollapsed ? 'w-16' : 'w-64'}`}
                >
                    <Link href="/about">
                        {isCollapsed ? <FiInfo /> : 'About'}
                    </Link>
                </li>
                <li
                    className={`py-2 px-3 rounded-lg ${router.pathname === '/contact' ? 'bg-blue-600' : ''
                        } ${isCollapsed ? 'w-16' : 'w-64'}`}
                >
                    <Link href="/contact">
                        {isCollapsed ? <FiMail /> : 'Contact'}
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
