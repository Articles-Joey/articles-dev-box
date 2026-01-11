import BanPanel from './AdminPanels/Bans';
import VerificationPanel from './AdminPanels/Verification';
import ModerationPanel from './AdminPanels/Moderation';
import LayoutsPanel from './AdminPanels/Layouts';
import StripePanel from './AdminPanels/Stripe';
import UserDetailsPanel from './AdminPanels/UserDetails';
import ResetPasswordPanel from './AdminPanels/ResetPassword';
import SessionsPanel from './AdminPanels/Sessions';

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
        <div className="tabs me-3">

            {adminMode?.tab == "User Details" &&
                <div className="tab">
                    <UserDetailsPanel
                        userData={userData}
                        setUserData={setUserData}
                    />
                </div>
            }

            {adminMode?.tab == "Verification" &&
                <div className="tab">
                    <VerificationPanel
                        userData={userData}
                        adminUserData={adminUserData?.user}
                        loadAdminUserData={loadAdminUserData}
                    />
                </div>
            }

            {adminMode?.tab == "Moderation" &&
                <div className="tab">
                    <ModerationPanel
                        userData={userData}
                        setAdminMode={setAdminMode}
                        adminUserData={adminUserData?.user}
                        adminUserReports={adminUserReports}
                        loadAdminUserData={loadAdminUserData}
                    />
                </div>
            }

            {adminMode?.tab == "Bans" &&
                <div className="tab">
                    <BanPanel
                        userData={userData}
                        adminUserData={adminUserData}
                        loadAdminUserData={loadAdminUserData}
                    />
                </div>
            }

            {adminMode?.tab == "Sessions" &&
                <div className="tab">
                    <SessionsPanel
                        userData={userData}
                        loadAdminUserData={loadAdminUserData}
                    />
                </div>
            }

            {adminMode?.tab == "Reset Password" &&
                <div className="tab">
                    <ResetPasswordPanel
                        userData={userData}
                        loadAdminUserData={loadAdminUserData}
                    />
                </div>
            }

            {adminMode?.tab == "Layouts" &&
                <div className="tab">
                    <LayoutsPanel
                        userData={userData}
                        userLastSocketLogin={userLastSocketLogin}
                        setUserLastSocketLogin={setUserLastSocketLogin}
                    />
                </div>
            }

            {adminMode?.tab == "Stripe" &&
                <div className="tab">
                    <StripePanel
                        userData={userData}
                    />
                </div>
            }

        </div>
    );
}