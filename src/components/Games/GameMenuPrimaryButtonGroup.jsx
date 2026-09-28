import ArticlesButton from "../UI/Button";
import useFullscreen from '#root/src/hooks/useFullscreen';
import Box from '@mui/material/Box';
import SettingsIcon from '@mui/icons-material/Settings';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import InfoIcon from '@mui/icons-material/Info';
import GitHubIcon from '@mui/icons-material/GitHub';
import GroupsIcon from '@mui/icons-material/Groups';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import FullscreenIcon from '@mui/icons-material/Fullscreen';

/**
 * @param {Object} props
 * @param {function} props.useStore Zustand store hook
 * @param {('Landing'|'GameMenu')} props.type Only "Landing" or "GameMenu" allowed
 * @param {string} [props.owner] Optional GitHub owner
 * @param {string} [props.repo] Optional GitHub repo
 * @param {function} props.useRouter Optional router hook (e.g. Next.js useRouter) for navigation without full page reloads
 */
export default function PrimaryButtonGroup({
    useStore,
    type,
    owner,
    repo,
    LeaveGameOverride,
    SidebarOverride,
    SettingsOverride,
    InfoOverride,
    CreditsOverride,
    GithubOverride,
    FullscreenOverride,
    useRouter = null,
}) {

    if (!useStore) {
        return null;
    }

    const { isFullscreen, requestFullscreen, exitFullscreen } = useFullscreen();
    const router = useRouter ? useRouter() : null;

    const setShowSettingsModal = useStore((state) => state.setShowSettingsModal);
    const toggleDarkMode = useStore((state) => state.toggleDarkMode);
    const darkMode = useStore((state) => state.darkMode);
    const setShowInfoModal = useStore((state) => state.setShowInfoModal);
    const setShowCreditsModal = useStore((state) => state.setShowCreditsModal);
    const sidebar = useStore((state) => state.sidebar);
    const setSidebar = useStore((state) => state.setSidebar);

    if (!router && type === "GameMenu") {
        console.warn("GameMenuPrimaryButtonGroup: useRouter is needed for GameMenu type to avoid full reload navigation. Please provide a router instance from your framework (e.g. Next.js useRouter) as a prop.")
    }

    switch (type) {

        case "Landing":
            return (
                <>
                    {SettingsOverride ?
                        SettingsOverride
                        :
                        <Box sx={{ width: 0.5, display: 'flex' }}>
                            <ArticlesButton
                                // ref={el => elementsRef.current[2] = el}
                                sx={{ width: 1 }}
                                small
                                onClick={() => {
                                    setShowSettingsModal(true)
                                }}
                            >
                                <SettingsIcon fontSize="inherit" sx={{ mr: 0.5 }} />
                                Settings
                            </ArticlesButton>
                            <ArticlesButton
                                // ref={el => elementsRef.current[2] = el}
                                small
                                onClick={() => {
                                    toggleDarkMode()
                                }}
                            >
                                {darkMode ? <LightModeIcon fontSize="inherit" /> : <DarkModeIcon fontSize="inherit" />}
                            </ArticlesButton>
                        </Box>
                    }

                    {InfoOverride ?
                        InfoOverride
                        :
                        <ArticlesButton
                            // ref={el => elementsRef.current[3] = el}
                            sx={{ width: 0.5 }}
                            small
                            onClick={() => {
                                setShowInfoModal(true)
                            }}
                        >
                            <InfoIcon fontSize="inherit" sx={{ mr: 0.5 }} />
                            Info
                        </ArticlesButton>}

                    {GithubOverride ?
                        GithubOverride
                        :
                        <Box
                            component="a"
                            href={`https://github.com/${owner || process.env.NEXT_PUBLIC_OWNER}/${repo || process.env.NEXT_PUBLIC_REPO}`}
                            target='_blank'
                            rel='noopener noreferrer'
                            sx={{ width: 0.5, textDecoration: 'none' }}
                        >
                            <ArticlesButton
                                // ref={el => elementsRef.current[4] = el}
                                sx={{ width: 1 }}
                                small
                                onClick={() => {

                                }}
                            >
                                <GitHubIcon fontSize="inherit" sx={{ mr: 0.5 }} />
                                Github
                            </ArticlesButton>
                        </Box>}

                    {CreditsOverride ?
                        CreditsOverride
                        :
                        <ArticlesButton
                            // ref={el => elementsRef.current[5] = el}
                            sx={{ width: 0.5 }}
                            small
                            onClick={() => {
                                setShowCreditsModal(true)
                            }}
                        >
                            <GroupsIcon fontSize="inherit" sx={{ mr: 0.5 }} />
                            Credits
                        </ArticlesButton>
                    }
                </>
            )
        case "GameMenu":
            return (
                <>
                    {LeaveGameOverride ?
                        LeaveGameOverride
                        :
                        <Box
                            component="a"
                            href={'/'}
                            sx={{ width: 0.5, textDecoration: 'none' }}
                            onClick={(e) => {

                                if (router) {
                                    e.preventDefault()
                                    router.push('/')
                                    return
                                }

                            }}
                        >
                            <ArticlesButton
                                sx={{ width: 1 }}
                                small
                            >
                                <ExitToAppIcon fontSize="inherit" sx={{ mr: 0.5 }} />
                                <Box component="span">Leave Game</Box>
                            </ArticlesButton>
                        </Box>
                    }

                    {FullscreenOverride ?
                        FullscreenOverride
                        :
                        <ArticlesButton
                            small
                            sx={{ width: 0.5 }}
                            active={isFullscreen}
                            onClick={() => {
                                if (isFullscreen) {
                                    exitFullscreen()
                                } else {
                                    requestFullscreen()
                                }
                            }}
                        >
                            {isFullscreen && <Box component="span">Exit&nbsp;</Box>}
                            {!isFullscreen && <FullscreenIcon fontSize="inherit" sx={{ mr: 0.5 }} />}
                            <Box component="span">Fullscreen</Box>
                        </ArticlesButton>}

                    {SettingsOverride ?
                        SettingsOverride
                        :
                        <Box sx={{ width: 0.5, display: 'flex' }}>
                            <ArticlesButton
                                // ref={el => elementsRef.current[2] = el}
                                sx={{ width: 1 }}
                                small
                                onClick={() => {
                                    setShowSettingsModal(true)
                                }}
                            >
                                <SettingsIcon fontSize="inherit" sx={{ mr: 0.5 }} />
                                Settings
                            </ArticlesButton>
                            <ArticlesButton
                                // ref={el => elementsRef.current[2] = el}
                                small
                                onClick={() => {
                                    toggleDarkMode()
                                }}
                            >
                                {darkMode ? <LightModeIcon fontSize="inherit" /> : <DarkModeIcon fontSize="inherit" />}
                            </ArticlesButton>
                        </Box>
                    }

                    {SidebarOverride ?
                        SidebarOverride
                        :
                        <ArticlesButton
                            // ref={el => elementsRef.current[2] = el}
                            sx={{ width: 0.5 }}
                            small
                            active={sidebar}
                            onClick={() => {
                                setSidebar(!sidebar)
                            }}
                        >
                            <SettingsIcon fontSize="inherit" sx={{ mr: 0.5 }} />
                            Sidebar
                        </ArticlesButton>
                    }
                </>
            )
        default:
            return null;

    }
}
