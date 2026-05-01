import { Modal } from "react-bootstrap"
import { useState } from "react";

import ArticlesButton from '#root/src/components/UI/Button';
import GraphicsTab from "#root/src/components/Games/Settings/GraphicsTab.jsx";
import AudioTab from "#root/src/components/Games/Settings/AudioTab.jsx";
import MultiplayerTab from "#root/src/components/Games/Settings/MultiplayerTab.jsx";
import ControlsTab from "#root/src/components/Games/Settings/ControlsTab.jsx";
import OtherTab from "#root/src/components/Games/Settings/OtherTab";
import DebugTab from "./DebugTab";

import "#root/src/styles/components/SettingsModal.scss";

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

    // if (!store) {
    //     console.error("GameMenu: useStore is required");
    //     return null;
    // }

    // const toggleDarkMode = () => {
    //     setDarkMode(!darkMode);
    // }
    // const toggleArcadeMode = () => {
    //     setArcadeMode(!arcadeMode);
    // }

    // function reset() {
    //     // setDarkMode(false);
    //     // setArcadeMode(false);
    // }

    // function handleClose() {
    //     // reset();
    //     // setShow(false);
    // }

    // if (!store) {
    //     console.error("GameMenu: useStore is required");
    //     return null;
    // }

    return (
        <Modal
            className="articles-modal articles-settings-modal"
            size='md'
            show={show}
            // To much jumping with little content for now
            centered
            scrollable
            onExited={() => {
                // setShow(false)
            }}
            onHide={() => {
                // setShowModal(false)
                setShow(false)
            }}
        >

            {/* Note - If not done like this then I get "Rendered fewer hooks than expected." whenever I try to consume useStore content. Doing it this way prevents that issue for now until I can figure out."  */}

            {store &&
                <ModalContent
                    useStore={store}
                    useAudioStore={useAudioStore}
                    useTouchControlsStore={useTouchControlsStore}
                    useSocketStore={useSocketStore}
                    config={config}
                />
            }

        </Modal>
    );
}

function ModalContent({
    useStore,
    useAudioStore,
    useTouchControlsStore,
    useSocketStore,
    config
}) {

    const [tab, setTab] = useState(localStorage.getItem('articles_settings_tab') || 'Graphics');

    const handleTabChange = (newTab) => {
        setTab(newTab);
        localStorage.setItem('articles_settings_tab', newTab);
    };

    // const darkMode = store((state) => state.darkMode);
    // const setDarkMode = store((state) => state.setDarkMode);
    // const arcadeMode = store((state) => state.arcadeMode);
    // const setArcadeMode = store((state) => state.setArcadeMode);
    const debug = useStore((state) => state.debug);

    return (
        <>
            <Modal.Header closeButton>
                <Modal.Title>Game Settings</Modal.Title>
            </Modal.Header>

            <Modal.Body className="flex-column p-0">

                <div className='p-2'>
                    {[
                        'Graphics',
                        'Controls',
                        'Audio',
                        'Multiplayer',
                        // 'Chat',
                        'Other',
                        ...((debug) ? ['Debug'] : [])
                    ].map(item =>
                        <ArticlesButton
                            key={item}
                            active={tab == item}
                            onClick={() => { handleTabChange(item) }}
                        >
                            {item}
                        </ArticlesButton>
                    )}
                </div>

                <hr className="my-0" />

                <div className="p-3">

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

                </div>

            </Modal.Body>

            <Modal.Footer className="justify-content-between">

                <div>

                    <ArticlesButton
                        variant="outline-dark"
                        onClick={() => {
                            setShow(false)
                        }}
                    >
                        Close
                    </ArticlesButton>

                    <ArticlesButton
                        variant="outline-danger ms-3"
                        onClick={() => {
                            reset()
                            // setShow(false)
                        }}
                    >
                        Reset
                    </ArticlesButton>

                </div>

            </Modal.Footer>
        </>
    )

}