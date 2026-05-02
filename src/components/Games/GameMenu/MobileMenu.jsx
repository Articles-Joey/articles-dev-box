import classNames from "classnames";
import ArticlesButton from "#root/src/components/UI/Button";

export default function MobileMenu({
    useStore,
    LeftPanelContent,

    menuBarConfig,
}) {

    const showMenu = useStore(state => state.showMenu);
    const setShowMenu = useStore(state => state.setShowMenu);

    const MenuButton = () => (
        <ArticlesButton
            small
            active={showMenu}
            onClick={() => {
                setShowMenu(!showMenu)
            }}
            className={"d-flex"}
        >
            <i className="fad fa-bars"></i>
            <span className="text">Menu</span>
        </ArticlesButton>
    )

    return (
        <>
            <div
                // className="menu-bar card card-articles p-1 justify-content-center"
                className={
                    classNames(
                        `menu-bar ${menuBarConfig.menuBarClassName || ''}`,
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

                <div className='flex-header align-items-center'>

                    <div className="Left d-flex align-items-center">
                        {(menuBarConfig.menuBarButtonPosition == "Left" || !menuBarConfig.menuBarButtonPosition) &&
                            <MenuButton />
                        }
                        {menuBarConfig.leftSlotChildren && menuBarConfig.leftSlotChildren}
                    </div>

                    {/* Center */}
                    <div className="Center d-flex align-items-center">
                        {(menuBarConfig.menuBarButtonPosition == "Center") &&
                            <MenuButton />
                        }
                        {menuBarConfig.centerSlotChildren && menuBarConfig.centerSlotChildren}
                    </div>

                    <div className="Right d-flex align-items-center">
                        {(menuBarConfig.menuBarButtonPosition == "Right") &&
                            <MenuButton />
                        }
                        {menuBarConfig.rightSlotChildren && menuBarConfig.rightSlotChildren}
                    </div>

                </div>

            </div>

            <div
                className={`mobile-menu ${showMenu && 'show'}`}
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