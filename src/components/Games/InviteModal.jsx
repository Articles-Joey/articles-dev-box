import { useEffect, useState, useRef, lazy } from "react";

import { Modal } from "react-bootstrap"

import ArticlesButton from '#root/src/components/UI/Button';

const FriendsList = lazy(() => import('../Friends/FriendsList'));

export default function InviteModal({
    show,
    setShow,
    useSocketStore,
    // useStore,
}) {

    const socket = useSocketStore((state) => state?.socket);

    const [showModal, setShowModal] = useState(true)

    return (
        <>

            <Modal
                className="articles-modal games-invite-modal"
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
                        Invite Players
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body className="flex-column p-0">

                    <div className="p-3">

                        <FriendsList
                            componentType="list"
                            show={show}
                            setShow={setShow}
                            allowInvite={() => {
                                socket.emit('invitePlayer', {
                                    ...show
                                });
                            }}
                        />

                    </div>

                </Modal.Body>

                <Modal.Footer className="justify-content-between">

                    <div>

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