import BusinessIcon from '@mui/icons-material/Business';
import ArticleIcon from '@mui/icons-material/Article';
import RepeatIcon from '@mui/icons-material/Repeat';
import Link from 'next/link';

const MainSideBar = () => {
    return (
        <>
            <div className="hidden sm:flex flex-col overflow-y-auto border-r border-gray-200 bg-white pt-2 pb-2 w-1/6 min-w-min h-full">
                <div className="pt-4 pl-8 text-xl font-medium text-gray-900">
                    <h1 className="truncate text-ellipsis w-40">Organisation</h1>
                </div>
                <div className="mt-5 flex flex-grow flex-col">
                    <nav
                        className="flex-1 space-y-8 bg-white px-4 sm:px-6 lg:px-8"
                        aria-label="Sidebar"
                    >
                        <div className="space-y-1">
                            <Link
                                className="bg-gray-50 text-gray-900 hover:text-gray-900 hover:bg-gray-100 group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                                href="https://app.fixform.com/admin/settings/organisation/buildings"
                            >
                                <BusinessIcon sx={{ marginRight: 1 }} />
                                <span className="truncate flex-1">Buildings</span>
                            </Link>
                            <Link
                                className="text-gray-500 hover:text-gray-900 hover:bg-gray-50 group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                                href="https://app.fixform.com/admin/settings/organisation/notes"
                            >
                                <ArticleIcon sx={{ marginRight: 1 }} />
                                <span className="truncate flex-1">Documents</span>
                            </Link>
                            <Link
                                className="text-gray-500 hover:text-gray-900 hover:bg-gray-50 group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                                href="https://app.fixform.com/admin/settings/organisation/recurring-tasks"
                            >
                                <RepeatIcon sx={{ marginRight: 1 }} />
                                <span className="truncate flex-1">Recurring Tasks</span>
                            </Link>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    );
};
export default MainSideBar;