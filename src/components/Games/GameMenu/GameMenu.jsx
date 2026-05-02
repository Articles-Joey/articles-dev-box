import MobileMenu from "./MobileMenu";

import "#root/src/styles/components/GameMenu.scss";
import { useEffect } from "react";

/**
 * @param {Object} props
 * @param {Function} props.useStore
 * @param {React.ComponentType} props.LeftPanelContent
 * @param {"Bar" | "Corner Button"} props.menuBarStyle
 * @param {"Static Panel" | "Floating Panel"} [props.sidebarStyle]
 */
export default function GameMenu(props) {

    // menuBarStyle={"Bar"}
    // menuBarStyle={"Corner Button"}

    // sidebarStyle={"Static Panel"}
    // sidebarStyle={"Floating Panel"}

    const {
        useStore,
        LeftPanelContent,
        
        sidebarStyleConfig,
        sidebarStyle,

        menuBarConfig,
        menuBarStyle,
        menuBarButtonPosition,
    } = props;

    const sidebar = useStore(state => state.sidebar);
    const setShowMenu = useStore(state => state.setShowMenu);

    useEffect(() => {

        if (sidebar == true) {
            setShowMenu(false)
        }

    }, [sidebar])

    const convertedSidebarStyle = sidebarStyle.replaceAll(" ", "_")

    if (!useStore) {
        console.error("GameMenu: useStore is required");
        return null;
    }

    return (
        <>

            <MobileMenu 
                useStore={useStore}
                LeftPanelContent={LeftPanelContent}
                menuBarConfig={{
                    ...menuBarConfig,
                    style: menuBarConfig.style || menuBarStyle,
                    menuBarButtonPosition: menuBarConfig.menuBarButtonPosition || menuBarButtonPosition,
                }}
                // menuBarStyle={menuBarStyle}
                // menuBarButtonPosition={menuBarButtonPosition}
            />

            <div 
                className={`panel-left card rounded-0 ${convertedSidebarStyle}`}
                style={{
                    ...(convertedSidebarStyle == "Floating_Panel" && {
                        position: "absolute",
                        top: "0.5rem",
                        left: "0.5rem",
                        zIndex: 1,
                        height: "calc(100vh - 1rem)",
                        backgroundColor: "color-mix(in srgb, var(--bs-card-bg) 50%, transparent)",
                    })
                }}
            >

                <LeftPanelContent />

            </div>
            
        </>
    )
}