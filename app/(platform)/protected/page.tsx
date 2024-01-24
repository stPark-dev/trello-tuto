/* import { auth, currentUser } from "@clerk/nextjs";

const ProtectedPage = async () => {
    const user = await currentUser();
    const { userId } = auth();

    // when you use client, const { userId } = useAuth(); const { user } = useUser();
    return (
        <div>
            User: {user?.firstName} <br />
            userId: {userId} <br />
            Protected Page!
        </div>
    )
};

export default ProtectedPage; */

import { UserButton } from "@clerk/nextjs";

const ProtectedPage = async () => {

    return (
        <div>
            <UserButton afterSignOutUrl="/"/>
        </div>
    )
};

export default ProtectedPage;
