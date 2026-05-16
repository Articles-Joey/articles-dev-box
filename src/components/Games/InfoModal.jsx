import { useEffect, useState, useRef } from "react";

import { Modal } from "react-bootstrap"

// import packageInfo from '@/package.json';

import ArticlesButton from '#root/src/components/UI/Button';
// import { useModalNavigation } from "@/hooks/useModalNavigation";

// import B from "@articles-media/articles-gamepad-helper/dist/img/Xbox UI/B.svg";
// import { useStore } from "@/hooks/useStore";

export default function InfoModal({
    show,
    setShow,

    useStore,
    packageInfo,
    infoModalConfig
}) {

    const [showModal, setShowModal] = useState(true)

    const darkMode = useStore(state => state.darkMode)

    const elementsRef = useRef([]);
    // useModalNavigation(elementsRef, () => setShowModal(false));

    return (
        <>

            <Modal
                className="articles-modal games-info-modal"
                size='md'
                show={showModal}
                centered
                scrollable
                onExited={() => {
                    setShow(false)
                }}
                onHide={() => {
                    setShowModal(false)
                }}
            >

                <Modal.Header closeButton>
                    <Modal.Title>
                        {process.env.NEXT_PUBLIC_GAME_NAME} Info
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body className="flex-column p-0">

                    <div className="ratio ratio-16x9">
                        {darkMode ?
                            <img src={infoModalConfig?.previewImage}></img>
                            :
                            <img src={infoModalConfig?.previewImage}></img>
                        }
                    </div>

                    <div className="p-3">

                        <div className="">
                            {packageInfo?.description}
                        </div>

                        {infoModalConfig?.appendContent &&
                            <div className="mt-2">
                                {infoModalConfig.appendContent}
                            </div>
                        }

                    </div>

                </Modal.Body>

                <Modal.Footer className="justify-content-between">

                    <div>
                        <div className="version small">Version: {packageInfo?.version}</div>
                    </div>

                    <ArticlesButton
                        // ref={el => elementsRef.current[0] = el}
                        variant="outline-dark"
                        onClick={() => {
                            setShow(false)
                        }}
                        className="d-flex align-items-center"
                    >
                        {/* <img src={B.src} className="controller-only me-1" alt="Close" /> */}
                        Close
                    </ArticlesButton>

                </Modal.Footer>

            </Modal>

        </>
    )

}