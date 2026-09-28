import BanPanel from './AdminPanels/Bans';
import VerificationPanel from './AdminPanels/Verification';
import ModerationPanel from './AdminPanels/Moderation';
import LayoutsPanel from './AdminPanels/Layouts';
import StripePanel from './AdminPanels/Stripe';
import UserDetailsPanel from './AdminPanels/UserDetails';
import ResetPasswordPanel from './AdminPanels/ResetPassword';
import SessionsPanel from './AdminPanels/Sessions';
import Box from '@mui/material/Box';

export default function AdminTabs({
    adminMode,
    setAdminMode,
    userData,
    setUserData,
    adminUserData,
    adminUserReports,
    loadAdminUserData,
    userLastSocketLogin,
    setUserLastSocketLogin,
}) {
    return (
        <Box className="tabs" sx={{ mr: 3 }}>

            {adminMode?.tab == "User Details" &&
                <Box className="tab">
                    <UserDetailsPanel
                        userData={userData}
                        setUserData={setUserData}
                    />
                </Box>
            }

            {adminMode?.tab == "Verification" &&
                <Box className="tab">
                    <VerificationPanel
                        userData={userData}
                        adminUserData={adminUserData?.user}
                        loadAdminUserData={loadAdminUserData}
                    />
                </Box>
            }

            {adminMode?.tab == "Moderation" &&
                <Box className="tab">
                    <ModerationPanel
                        userData={userData}
                        setAdminMode={setAdminMode}
                        adminUserData={adminUserData?.user}
                        adminUserReports={adminUserReports}
                        loadAdminUserData={loadAdminUserData}
                    />
                </Box>
            }

            {adminMode?.tab == "Bans" &&
                <Box className="tab">
                    <BanPanel
                        userData={userData}
                        adminUserData={adminUserData}
                        loadAdminUserData={loadAdminUserData}
                    />
                </Box>
            }

            {adminMode?.tab == "Sessions" &&
                <Box className="tab">
                    <SessionsPanel
                        userData={userData}
                        loadAdminUserData={loadAdminUserData}
                    />
                </Box>
            }

            {adminMode?.tab == "Reset Password" &&
                <Box className="tab">
                    <ResetPasswordPanel
                        userData={userData}
                        loadAdminUserData={loadAdminUserData}
                    />
                </Box>
            }

            {adminMode?.tab == "Layouts" &&
                <Box className="tab">
                    <LayoutsPanel
                        userData={userData}
                        userLastSocketLogin={userLastSocketLogin}
                        setUserLastSocketLogin={setUserLastSocketLogin}
                    />
                </Box>
            }

            {adminMode?.tab == "Stripe" &&
                <Box className="tab">
                    <StripePanel
                        userData={userData}
                    />
                </Box>
            }

        </Box>
    );
}
