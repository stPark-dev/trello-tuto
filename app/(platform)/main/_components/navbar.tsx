import Image from "next/image";
import Link from "next/link";

import TaskAltIcon from '@mui/icons-material/TaskAlt';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import BusinessIcon from '@mui/icons-material/Business';
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import { AppBar, Box, Button, Toolbar } from "@mui/material";

const MainNavBar = () => {
    return (
        <div className="bg-white border border-b-gray-200">
            <div className="px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 justify-between items-center">
                    <div className="flex items-center">
                        <Link href="/" passHref>
                        <Image alt="logo" src="/logo_main.png" width={Math.ceil(1664 / 10)} height={Math.ceil(217 / 10)} />
                        </Link>
                    </div>
                    <div className="flex items-center w-full justify-between">
                        <div className="hidden sm:flex sm:space-x-10 border-l border-gray-300 my-5 ml-10 pl-14">
                            <Link
                                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-700 opacity-60 hover:opacity-100"
                                href="https://app.fixform.com/admin/tasks/all"
                            >
                                <TaskAltIcon sx={{ marginRight: 1 }} />
                                Tasks
                            </Link>
                            <Link
                                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-700 opacity-60 hover:opacity-100"
                                href="https://app.fixform.com/admin/insights/9509ea46-1cfd-403c-bc2b-209ee15b680b"
                            >
                                <QueryStatsIcon sx={{ marginRight: 1 }} />
                                Insights
                            </Link>
                            <Link
                                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-brand-900"
                                href="https://app.fixform.com/admin/settings/organisation/buildings"
                            >
                                <BusinessIcon sx={{ marginRight: 1 }} />
                                Organisation
                            </Link>
                        </div>
                        <div className="flex space-x-4 font-medium">
                            <div className="hidden sm:flex">
                                <Link
                                    href="https://support.fixform.com"
                                    target="_blank"
                                    className="inline-flex items-center text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                                >
                                    Help Center
                                </Link>
                            </div>
                            <div className="ml-auto flex items-center justify-center gap-x-2">
                                <OrganizationSwitcher
                                    hidePersonal
                                    afterCreateOrganizationUrl="/organization/:id"
                                    afterLeaveOrganizationUrl="/select-org"
                                    afterSelectOrganizationUrl="/organization/:id"
                                    appearance={{
                                        elements: {
                                            rootBox: {
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center"
                                            }
                                        }
                                    }}
                                />
                                <UserButton
                                    afterSignOutUrl="/"
                                    appearance={{
                                        elements: {
                                            avatarBox: {
                                                height: 30,
                                                width: 30
                                            }
                                        }
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainNavBar;
