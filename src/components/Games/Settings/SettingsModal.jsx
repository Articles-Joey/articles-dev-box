import { useState } from "react";
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import ArticlesButton from '#root/src/components/UI/Button';
import GraphicsTab from "#root/src/components/Games/Settings/GraphicsTab.jsx";
import AudioTab from "#root/src/components/Games/Settings/AudioTab.jsx";
import MultiplayerTab from "#root/src/components/Games/Settings/MultiplayerTab.jsx";
import ControlsTab from "#root/src/components/Games/Settings/ControlsTab.jsx";
import OtherTab from "#root/src/components/Games/Settings/OtherTab";
import DebugTab from "./DebugTab";
import { ArticlesDialog, ArticlesDialogActions, ArticlesDialogContent, ArticlesDialogTitle } from '#root/src/components/UI/muiPrimitives';

// import packageJson from "../../../../package.json";

export default function SettingsModal({
    show,
    setShow,
    store,
    useAudioStore,
    useTouchControlsStore,
    useSocketStore,
    config
}) {

    const [showModal, setShowModal] = useState(false);

    return (
        <ArticlesDialog
            open={show}
            onClose={() => setShow(false)}
            paperSx={{ maxHeight: 'min(780px, calc(100% - 32px))' }}
        >

            {/* Note - If not done like this then I get "Rendered fewer hooks than expected." whenever I try to consume useStore content. Doing it this way prevents that issue for now until I can figure out."  */}

            {store &&
                <ModalContent
                    setShow={setShow}
                    useStore={store}
                    useAudioStore={useAudioStore}
                    useTouchControlsStore={useTouchControlsStore}
                    useSocketStore={useSocketStore}
                    config={config}
                />
            }

        </ArticlesDialog>
    );
}

function ModalContent({
    setShow,
    useStore,
    useAudioStore,
    useTouchControlsStore,
    useSocketStore,
    config
}) {

    const [tab, setTab] = useState(localStorage.getItem('articles_settings_tab') || 'Graphics');
    const [tabMenuAnchor, setTabMenuAnchor] = useState(null);

    const handleTabChange = (newTab) => {
        setTab(newTab);
        localStorage.setItem('articles_settings_tab', newTab);
    };

    // const darkMode = store((state) => state.darkMode);
    // const setDarkMode = store((state) => state.setDarkMode);
    // const arcadeMode = store((state) => state.arcadeMode);
    // const setArcadeMode = store((state) => state.setArcadeMode);
    const debug = useStore((state) => state.debug);
    const settingsTabs = [
        'Graphics',
        'Controls',
        'Audio',
        'Multiplayer',
        'Other',
        ...((debug) ? ['Debug'] : [])
    ];
    const alphabeticalSettingsTabs = [...settingsTabs].sort((a, b) => a.localeCompare(b));

    return (
        <>
            <ArticlesDialogTitle onClose={() => setShow(false)}>Game Settings</ArticlesDialogTitle>

            <ArticlesDialogContent sx={{ p: 0 }}>

                <Box
                    sx={{
                        '--articles-settings-tabs-border-color': 'rgba(0, 0, 0, 0.45)',
                        '--articles-settings-tab-color': '#212529',
                        '--articles-settings-tab-indicator-color': '#000',
                        display: 'flex',
                        alignItems: 'stretch',
                        minWidth: 0,
                        borderBottom: '2px solid var(--articles-settings-tabs-border-color)',
                        '[data-bs-theme="dark"] &, [data-mui-color-scheme="dark"] &': {
                            '--articles-settings-tabs-border-color': 'rgba(0, 0, 0, 0.8)',
                            '--articles-settings-tab-color': '#fff',
                            '--articles-settings-tab-indicator-color': '#fff',
                        },
                    }}
                >
                    <ArticlesButton
                        id="settings-tab-menu-button"
                        aria-controls={tabMenuAnchor ? 'settings-tab-menu' : undefined}
                        aria-expanded={tabMenuAnchor ? 'true' : undefined}
                        aria-haspopup="menu"
                        title="Choose a settings section"
                        onClick={(event) => setTabMenuAnchor(event.currentTarget)}
                        sx={{
                            flexShrink: 0,
                            px: 1.5,
                            borderBottom: '2px solid var(--articles-settings-tabs-border-color)',
                            '[data-bs-theme="dark"] &, [data-mui-color-scheme="dark"] &': {
                                color: '#fff',
                            },
                        }}
                    >
                        Tabs
                        <ArrowDropDownIcon fontSize="small" sx={{ ml: 0.5 }} />
                    </ArticlesButton>

                    <Tabs
                        value={tab}
                        onChange={(_event, newTab) => handleTabChange(newTab)}
                        variant="scrollable"
                        scrollButtons="auto"
                        aria-label="Game settings sections"
                        sx={{
                            px: 1,
                            flex: 1,
                            minWidth: 0,
                            color: 'var(--articles-settings-tab-color)',
                            '& .MuiTabs-indicator': {
                                backgroundColor: 'var(--articles-settings-tab-indicator-color)',
                            },
                            '& .MuiTab-root, & .MuiTab-root.Mui-selected, & .MuiTabs-scrollButtons': {
                                color: 'var(--articles-settings-tab-color)',
                            },
                        }}
                    >
                        {settingsTabs.map(item => <Tab key={item} value={item} label={item} />)}
                    </Tabs>
                </Box>

                <Menu
                    id="settings-tab-menu"
                    anchorEl={tabMenuAnchor}
                    anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
                    transformOrigin={{ horizontal: 'left', vertical: 'top' }}
                    open={Boolean(tabMenuAnchor)}
                    onClose={() => setTabMenuAnchor(null)}
                    slotProps={{
                        list: {
                            'aria-labelledby': 'settings-tab-menu-button',
                        },
                        paper: {
                            sx: {
                                '--articles-settings-menu-background-color': '#fff',
                                '--articles-settings-menu-font-color': '#212529',
                                '--articles-settings-menu-hover-color': 'rgba(0, 0, 0, 0.08)',
                                '--articles-settings-menu-selected-color': 'rgba(0, 0, 0, 0.12)',
                                bgcolor: 'var(--articles-settings-menu-background-color)',
                                color: 'var(--articles-settings-menu-font-color)',
                                backgroundImage: 'none',
                                '[data-bs-theme="dark"] &, [data-mui-color-scheme="dark"] &': {
                                    '--articles-settings-menu-background-color': '#212529',
                                    '--articles-settings-menu-font-color': '#fff',
                                    '--articles-settings-menu-hover-color': 'rgba(255, 255, 255, 0.1)',
                                    '--articles-settings-menu-selected-color': 'rgba(255, 255, 255, 0.16)',
                                },
                            },
                        },
                    }}
                >
                    {alphabeticalSettingsTabs.map(item => (
                        <MenuItem
                            key={item}
                            selected={tab === item}
                            sx={{
                                color: 'inherit',
                                '&:hover': {
                                    bgcolor: 'var(--articles-settings-menu-hover-color)',
                                },
                                '&.Mui-selected, &.Mui-selected:hover': {
                                    bgcolor: 'var(--articles-settings-menu-selected-color)',
                                },
                            }}
                            onClick={() => {
                                handleTabChange(item);
                                setTabMenuAnchor(null);
                            }}
                        >
                            {item}
                        </MenuItem>
                    ))}
                </Menu>

                <Box sx={{ p: 3 }}>

                    {tab == 'Controls' &&
                        <ControlsTab
                            useStore={useStore}
                            useTouchControlsStore={useTouchControlsStore}
                            config={config}
                        />
                    }

                    {tab == 'Graphics' &&
                        <GraphicsTab
                            useStore={useStore}
                            config={config}
                        />
                    }

                    {tab == 'Audio' &&
                        <AudioTab
                            useAudioStore={useAudioStore}
                            config={config}
                        />
                    }

                    {tab == 'Multiplayer' &&
                        <MultiplayerTab
                            useStore={useSocketStore}
                            config={config}
                        />
                    }

                    {tab == 'Other' &&
                        <OtherTab
                            useStore={useStore}
                            config={config}
                        />
                    }

                    {tab == 'Debug' &&
                        <DebugTab
                            useStore={useStore}
                            config={config}
                        />
                    }

                </Box>

            </ArticlesDialogContent>

            <ArticlesDialogActions>

                <Box sx={{ display: 'flex', gap: 1.5 }}>

                    <ArticlesButton
                        variant="outline-dark"
                        onClick={() => {
                            setShow(false)
                        }}
                    >
                        Close
                    </ArticlesButton>

                    {config?.reset && <ArticlesButton
                        variant="danger"
                        onClick={() => {
                            config.reset()
                            // setShow(false)
                        }}
                    >
                        Reset
                    </ArticlesButton>}

                </Box>

            </ArticlesDialogActions>
        </>
    )

}
