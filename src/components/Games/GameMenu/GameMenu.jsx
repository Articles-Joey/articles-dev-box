import MobileMenu from "./MobileMenu";

import "#root/src/styles/components/GameMenu.scss";
import { useEffect } from "react";

/**
  * @param {Object} props - The component props.
 * @param {Function} props.useStore - The Zustand store hook used for state management.
 * @param {React.ComponentType} props.LeftPanelContent - Component to render inside the sidebar and mobile-menu panel.
 * @param {Object} props.sidebarConfig - Configuration for the sidebar appearance and behavior.
 * @param {"Static Panel" | "Floating Panel"} props.sidebarConfig.style - Defines if the panel is static or floats over content.
 * @param {string} [props.sidebarConfig.className] - Additional CSS class for the sidebar container.
 * @param {Object} [props.sidebarConfig.cssStyle] - Inline styles to apply to the sidebar.
 * @param {Object} props.menuBarConfig - Configuration for the navigation menu bar.
 * @param {"Bar" | "Corner Button"} props.menuBarConfig.style - Visual style of the menu trigger (a full bar or a small corner button).
 * @param {"left" | "right"} [props.menuBarConfig.menuBarButtonPosition] - Position of the menu button when using "Corner Button" style.
 * @param {string} [props.menuBarConfig.menuBarClassName] - Additional CSS class for the menu bar.
 * @param {Object} [props.menuBarConfig.menuBarCssStyle] - Inline styles to apply to the menu bar.
 * @param {React.ComponentType} [props.menuBarConfig.leftSlotChildren] - Content to render in the left slot of the menu bar.
 * @param {React.ComponentType} [props.menuBarConfig.centerSlotChildren] - Content to render in the center slot of the menu bar.
 * @param {React.ComponentType} [props.menuBarConfig.rightSlotChildren] - Content to render in the right slot of the menu bar.
 */
export default function GameMenu(props) {

    const {
        useStore,
        LeftPanelContent,
        
        sidebarConfig,
        menuBarConfig,
    } = props;

    const sidebar = useStore(state => state.sidebar);
    const setShowMenu = useStore(state => state.setShowMenu);

    useEffect(() => {

        if (sidebar == true) {
            setShowMenu(false)
        }

    }, [sidebar])

    const convertedSidebarStyle = (sidebarConfig?.style).replaceAll(" ", "_");

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
                }}
            />

            <div 
                className={`panel-left card rounded-0 ${convertedSidebarStyle} ${sidebarConfig?.className || ''}`}
                style={{
                    ...sidebarConfig?.cssStyle,
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