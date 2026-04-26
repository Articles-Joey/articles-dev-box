import { Modal } from "react-bootstrap"
import { useState } from "react";

import ArticlesButton from '#root/src/components/UI/Button';
import GraphicsTab from "#root/src/components/Games/Settings/GraphicsTab.jsx";
import AudioTab from "#root/src/components/Games/Settings/AudioTab.jsx";
import MultiplayerTab from "#root/src/components/Games/Settings/MultiplayerTab.jsx";
import ControlsTab from "#root/src/components/Games/Settings/ControlsTab.jsx";
import OtherTab from "#root/src/components/Games/Settings/OtherTab";

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

    const [tab, setTab] = useState(localStorage.getItem('articles_settings_tab') || 'Graphics');

    const handleTabChange = (newTab) => {
        setTab(newTab);
        localStorage.setItem('articles_settings_tab', newTab);
    };

    const darkMode = store((state) => state.darkMode);
    const setDarkMode = store((state) => state.setDarkMode);
    const arcadeMode = store((state) => state.arcadeMode);
    const setArcadeMode = store((state) => state.setArcadeMode);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    }
    const toggleArcadeMode = () => {
        setArcadeMode(!arcadeMode);
    }

    function reset() {
        // setDarkMode(false);
        // setArcadeMode(false);
    }

    function handleClose() {
        // reset();
        // setShow(false);
    }

    return (
        <Modal
            className="articles-modal"
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
                            useStore={store}
                            useTouchControlsStore={useTouchControlsStore}
                            config={config}
                        />
                    }

                    {tab == 'Graphics' &&
                        <GraphicsTab
                            useStore={store}
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
                            useStore={store}
                            config={config}
                        />
                    }

                    {/* {tab == 'Other' &&
                        <div className="mx-4 pt-3">

                            <div className="mb-3">
                                <div className="d-flex align-items-center">
                                    <Form.Check
                                        type="switch"
                                        id="dark-mode-switch"
                                        label="Dark Mode"
                                        // value={enabled}
                                        checked={darkMode}
                                        onChange={() => {
                                            toggleDarkMode();
                                        }}
                                    />
                                </div>
                                <div className="small mt-2">
                                    {`Dark Mode changes the game's color scheme to be easier on the eyes in low light environments.`}
                                </div>
                            </div>

                            <hr />

                            <div className="mb-3">
                                <div className="d-flex align-items-center">
                                    <Form.Check
                                        type="switch"
                                        id="arcade-mode-switch"
                                        label="Arcade Mode"
                                        // value={enabled}
                                        checked={arcadeMode}
                                        onChange={() => {
                                            setArcadeMode(!arcadeMode);
                                        }}
                                    />
                                </div>
                                <div className="small mt-2">Arcade Mode automates the end of game and starting new ones for hands off arcade fun.</div>
                            </div>

                            <hr />

                            <div className="mb-3">
                                <div className="d-flex align-items-center">
                                    <Form.Check
                                        type="switch"
                                        id="toontown-mode-switch"
                                        label="Toontown Mode"
                                        // value={enabled}
                                        checked={toontownMode}
                                        onChange={() => {
                                            setToontownMode(!toontownMode);
                                        }}
                                    />
                                </div>
                                <div className="small mt-2">Toontown Mode reskins the game to look like the classic Toontown Online game.</div>
                            </div>

                        </div>
                    } */}

                </div>

            </Modal.Body>

            <Modal.Footer className="justify-content-between">

                {/* <div></div> */}


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


                {/* <ArticlesButton variant="success" onClick={() => setValue(false)}>
                    Save
                </ArticlesButton> */}

            </Modal.Footer>

        </Modal>
    );
}