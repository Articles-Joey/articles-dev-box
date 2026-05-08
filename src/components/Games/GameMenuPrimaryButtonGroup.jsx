import ArticlesButton from "../UI/Button";
import useFullscreen from '#root/src/hooks/useFullscreen';

/**
 * @param {Object} props
 * @param {function} props.useStore Zustand store hook
 * @param {('Landing'|'GameMenu')} props.type Only "Landing" or "GameMenu" allowed
 * @param {string} [props.owner] Optional GitHub owner
 * @param {string} [props.repo] Optional GitHub repo
 */
export default function PrimaryButtonGroup({
    useStore,
    type,
    owner,
    repo,
}) {

    if (!useStore) {
        return null;
    }

    const { isFullscreen, requestFullscreen, exitFullscreen } = useFullscreen();

    const setShowSettingsModal = useStore((state) => state.setShowSettingsModal);
    const toggleDarkMode = useStore((state) => state.toggleDarkMode);
    const darkMode = useStore((state) => state.darkMode);
    const setShowInfoModal = useStore((state) => state.setShowInfoModal);
    const setShowCreditsModal = useStore((state) => state.setShowCreditsModal);
    const sidebar = useStore((state) => state.sidebar);
    const setSidebar = useStore((state) => state.setSidebar);

    switch (type) {

        case "Landing":
            return (
                <>
                    <div className='w-50 d-flex'>
                        <ArticlesButton
                            // ref={el => elementsRef.current[2] = el}
                            className={`w-100`}
                            small
                            onClick={() => {
                                setShowSettingsModal(true)
                            }}
                        >
                            <i className="fad fa-cog"></i>
                            Settings
                        </ArticlesButton>
                        <ArticlesButton
                            // ref={el => elementsRef.current[2] = el}
                            className={``}
                            small
                            onClick={() => {
                                toggleDarkMode()
                            }}
                        >
                            {darkMode ? <i className="fad fa-sun"></i> : <i className="fad fa-moon"></i>}
                        </ArticlesButton>
                    </div>

                    <ArticlesButton
                        // ref={el => elementsRef.current[3] = el}
                        className={`w-50`}
                        small
                        onClick={() => {
                            setShowInfoModal(true)
                        }}
                    >
                        <i className="fad fa-info-square"></i>
                        Info
                    </ArticlesButton>

                    <a
                        href={`https://github.com/${owner || process.env.NEXT_PUBLIC_OWNER}/${repo ||process.env.NEXT_PUBLIC_REPO}`}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='w-50'
                    >
                        <ArticlesButton
                            // ref={el => elementsRef.current[4] = el}
                            className={`w-100`}
                            small
                            onClick={() => {

                            }}
                        >
                            <i className="fab fa-github"></i>
                            Github
                        </ArticlesButton>
                    </a>

                    <ArticlesButton
                        // ref={el => elementsRef.current[5] = el}
                        className={`w-50`}
                        small
                        onClick={() => {
                            setShowCreditsModal(true)
                        }}
                    >
                        <i className="fad fa-users"></i>
                        Credits
                    </ArticlesButton>
                </>
            )
        case "GameMenu":
            return (
                <>
                    <a
                        href={'/'}
                        className="w-50"
                    >
                        <ArticlesButton
                            className='w-100'
                            small
                        >
                            <i className="fad fa-arrow-alt-square-left"></i>
                            <span>Leave Game</span>
                        </ArticlesButton>
                    </a>

                    <ArticlesButton
                        small
                        className="w-50"
                        active={isFullscreen}
                        onClick={() => {
                            if (isFullscreen) {
                                exitFullscreen()
                            } else {
                                requestFullscreen()
                            }
                        }}
                    >
                        {isFullscreen && <span>Exit </span>}
                        {!isFullscreen && <span><i className='fad fa-expand'></i></span>}
                        <span>Fullscreen</span>
                    </ArticlesButton>

                    <div className='w-50 d-flex'>
                        <ArticlesButton
                            // ref={el => elementsRef.current[2] = el}
                            className={`w-100`}
                            small
                            onClick={() => {
                                setShowSettingsModal(true)
                            }}
                        >
                            <i className="fad fa-cog"></i>
                            Settings
                        </ArticlesButton>
                        <ArticlesButton
                            // ref={el => elementsRef.current[2] = el}
                            className={``}
                            small
                            onClick={() => {
                                toggleDarkMode()
                            }}
                        >
                            {darkMode ? <i className="fad fa-sun"></i> : <i className="fad fa-moon"></i>}
                        </ArticlesButton>
                    </div>

                    <ArticlesButton
                        // ref={el => elementsRef.current[2] = el}
                        className={`w-50`}
                        small
                        active={sidebar}
                        onClick={() => {
                            setSidebar(!sidebar)
                        }}
                    >
                        <i className="fad fa-cog"></i>
                        Sidebar
                    </ArticlesButton>
                </>
            )
        default:
            return null;

    }
}