import classNames from "classnames";
import ArticlesButton from "#root/src/components/UI/Button";

export default function MobileMenu({
    useStore,
    LeftPanelContent,

    menuBarConfig,
}) {

    const showMenu = useStore(state => state.showMenu);
    const setShowMenu = useStore(state => state.setShowMenu);

    return (
        <>
            <div
                // className="menu-bar card card-articles p-1 justify-content-center"
                className={
                    classNames(
                        `dev-box-game-menu menu-bar ${menuBarConfig.menuBarClassName || ''}`,
                        {
                            'card card-articles p-1 justify-content-center': menuBarConfig.style == "Bar",
                            [menuBarConfig.style.replaceAll(" ", "_")]: menuBarConfig.style,
                            [menuBarConfig.menuBarButtonPosition]: menuBarConfig.menuBarButtonPosition,
                        }
                    )
                }
                style={{
                    ...menuBarConfig.menuBarCssStyle,
                    ...(menuBarConfig.style == "Bar" && {
                        borderRadius: "0px",
                    }),
                    // ...(menuBarConfig.style == "Corner Button" && {
                    //     bottom: "0px"
                    // })
                }}
            >

                <div className='menu-bar-container flex-header align-items-center'>

                    <div className="Left d-flex align-items-center">
                        {(menuBarConfig.menuBarButtonPosition == "Left" || !menuBarConfig.menuBarButtonPosition) &&
                            <MenuButton 
                                useStore={useStore}
                                menuBarConfig={menuBarConfig}
                            />
                        }
                        {menuBarConfig.leftSlotChildren && menuBarConfig.leftSlotChildren}
                    </div>

                    {/* Center */}
                    <div className="Center d-flex align-items-center">
                        {(menuBarConfig.menuBarButtonPosition == "Center") &&
                            <MenuButton 
                                useStore={useStore}
                                menuBarConfig={menuBarConfig}
                            />
                        }
                        {menuBarConfig.centerSlotChildren && menuBarConfig.centerSlotChildren}
                    </div>

                    <div className="Right d-flex align-items-center">
                        {(menuBarConfig.menuBarButtonPosition == "Right") &&
                            <MenuButton 
                                useStore={useStore}
                                menuBarConfig={menuBarConfig}
                            />
                        }
                        {menuBarConfig.rightSlotChildren && menuBarConfig.rightSlotChildren}
                    </div>

                </div>

            </div>

            <div
                className={`dev-box-game-menu mobile-menu ${showMenu && 'show'}`}
                onClick={() => setShowMenu(false)}
                style={{
                    ...(menuBarConfig.style == "Bar" && {
                        bottom: "50px"
                    }),
                    ...(menuBarConfig.style == "Corner Button" && {
                        bottom: "0px"
                    })
                }}
            >
                <div
                    style={{
                        maxWidth: '300px',
                        maxHeight: 'calc(100vh - 100px)',
                        overflowY: 'auto',
                    }}
                    className='mobile-menu-container'
                    onClick={(e) => e.stopPropagation()}
                >

                    {LeftPanelContent && <LeftPanelContent
                    // {...panelProps}
                    />}

                </div>
            </div>
        </>
    )
}

function MenuButton({
    useStore,
    menuBarConfig,
}) {

    const showMenu = useStore(state => state.showMenu);
    const setShowMenu = useStore(state => state.setShowMenu);
    const setShowSettingsModal = useStore(state => state.setShowSettingsModal);

    return (
        <>
            <ArticlesButton
                small
                active={showMenu}
                onClick={() => {
                    console.log("Menu button clicked, toggling menu visibility");
                    setShowMenu(!showMenu)
                }}
                className={"d-flex"}
            >
                <i className="fad fa-bars"></i>
                <span className="text">Menu</span>
            </ArticlesButton>
            {menuBarConfig?.settingsWithMenuButton &&
                <ArticlesButton
                    // active={showSettingsModal}
                    onClick={() => {
                        setShowSettingsModal(true)
                    }}
                >
                    <i className='fad fa-cog'></i>
                </ArticlesButton>
            }
        </>
    )

}