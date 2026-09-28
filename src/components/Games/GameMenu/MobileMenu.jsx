import classNames from "classnames";
import ArticlesButton from "#root/src/components/UI/Button";
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu';
import SettingsIcon from '@mui/icons-material/Settings';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { articlesCardSx } from '#root/src/components/UI/muiPrimitives';

export default function MobileMenu({
    useStore,
    LeftPanelContent,

    menuBarConfig,
}) {

    const showMenu = useStore(state => state.showMenu);
    const setShowMenu = useStore(state => state.setShowMenu);
    const sidebar = useStore(state => state.sidebar);
    const menuBarStyle = menuBarConfig.style || 'Bar';

    return (
        <>
            <Box
                data-hide-in-screenshot-mode="true"
                className={
                    classNames(
                        `dev-box-game-menu menu-bar ${menuBarConfig.menuBarClassName || ''}`,
                        {
                            [menuBarStyle.replaceAll(" ", "_")]: menuBarStyle,
                            [menuBarConfig.menuBarButtonPosition]: menuBarConfig.menuBarButtonPosition,
                        }
                    )
                }
                sx={(theme) => ({
                    ...menuBarConfig.menuBarCssStyle,
                    ...(menuBarStyle == "Bar" && {
                        ...articlesCardSx,
                        position: 'fixed',
                        bottom: 0,
                        left: 0,
                        width: 1,
                        height: 50,
                        zIndex: theme.zIndex.appBar,
                        borderRadius: 0,
                        p: 1,
                        justifyContent: 'center',
                    }),
                    ...(menuBarStyle == "Corner Button" && {
                        position: 'fixed',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        width: 1,
                        height: 50,
                        zIndex: theme.zIndex.appBar,
                    }),
                    ...(sidebar && {
                        [theme.breakpoints.up(992)]: { display: 'none' },
                    }),
                })}
            >

                <Box className="menu-bar-container" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: 1 }}>

                    <Box className="Left" sx={{ display: 'flex', alignItems: 'center' }}>
                        {(menuBarConfig.menuBarButtonPosition == "Left" || !menuBarConfig.menuBarButtonPosition) &&
                            <MenuButton
                                useStore={useStore}
                                menuBarConfig={menuBarConfig}
                            />
                        }
                        {menuBarConfig.leftSlotChildren && menuBarConfig.leftSlotChildren}
                    </Box>

                    {/* Center */}
                    <Box className="Center" sx={(theme) => ({
                        display: 'flex',
                        alignItems: 'center',
                        [theme.breakpoints.up(992)]: {
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                        },
                    })}>
                        {(menuBarConfig.menuBarButtonPosition == "Center") &&
                            <MenuButton
                                useStore={useStore}
                                menuBarConfig={menuBarConfig}
                            />
                        }
                        {menuBarConfig.centerSlotChildren && menuBarConfig.centerSlotChildren}
                    </Box>

                    <Box className="Right" sx={{ display: 'flex', alignItems: 'center' }}>
                        {(menuBarConfig.menuBarButtonPosition == "Right") &&
                            <MenuButton
                                useStore={useStore}
                                menuBarConfig={menuBarConfig}
                            />
                        }
                        {menuBarConfig.rightSlotChildren && menuBarConfig.rightSlotChildren}
                    </Box>

                </Box>

            </Box>

            <Box
                data-hide-in-screenshot-mode="true"
                className={`dev-box-game-menu mobile-menu ${showMenu && 'show'}`}
                onClick={() => setShowMenu(false)}
                sx={{
                    position: 'fixed',
                    left: 0,
                    width: 1,
                    top: 0,
                    zIndex: (theme) => theme.zIndex.appBar - 1,
                    bgcolor: 'rgba(0, 0, 0, 0.75)',
                    transform: showMenu ? 'translateY(0)' : 'translateY(calc(100% + 50px))',
                    transition: (theme) => theme.transitions.create('transform', { duration: 200 }),
                    p: 2,
                    display: 'flex',
                    alignItems: 'flex-end',
                    justifyContent: 'center',
                    ...(menuBarStyle == "Bar" && {
                        bottom: "50px"
                    }),
                    ...(menuBarStyle == "Corner Button" && {
                        bottom: "0px"
                    })
                }}
            >
                <Box
                    sx={{
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

                </Box>
            </Box>
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

    const darkMode = useStore(state => state.darkMode);
    const toggleDarkMode = useStore(state => state.toggleDarkMode);

    return (
        <>
            <ArticlesButton
                small
                active={showMenu}
                onClick={() => {
                    console.log("Menu button clicked, toggling menu visibility");
                    setShowMenu(!showMenu)
                }}
                sx={{ display: 'flex' }}
            >
                <MenuIcon fontSize="small" sx={{ mr: 0.5 }} />
                <Box component="span" className="text">Menu</Box>
            </ArticlesButton>
            {menuBarConfig?.settingsWithMenuButton &&
                <ArticlesButton
                    className={`settingsButton ${menuBarConfig?.settingsButtonClassName}`}
                    sx={{
                        minHeight: "30px"
                    }}
                    onClick={() => {
                        setShowSettingsModal(true)
                    }}
                >
                    <SettingsIcon fontSize="small" />
                </ArticlesButton>
            }
            {menuBarConfig?.darkModeButton &&
                <ArticlesButton
                    className={`darkModeButton ${menuBarConfig?.darkModeButtonClassName}`}
                    sx={{
                        minHeight: "30px",
                        // backgroundColor: "lightgray",
                    }}
                    onClick={() => {
                        toggleDarkMode(true)
                    }}
                >
                    {darkMode ?
                        <LightModeIcon fontSize="small" />
                        :
                        <DarkModeIcon fontSize="small" />
                    }
                </ArticlesButton>
            }
        </>
    )

}
