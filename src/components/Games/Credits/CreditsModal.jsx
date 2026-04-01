import { Modal } from "react-bootstrap"
import { useState } from "react";

import ArticlesButton from '#root/src/components/UI/Button';

/**
 * A modal component that displays game credits and links to a GitHub repository.
 * 
 * @param {Object} props - The component props.
 * @param {boolean} props.show - Controls whether the modal is visible.
 * @param {Function} props.setShow - Function to update the visibility of the modal.
 * @param {Function} props.useStore - Zustand store hook (currently unused in this component).
 * @param {string} props.owner - The GitHub repository owner's username.
 * @param {string} props.repo - The GitHub repository name.
 * 
 * @returns {JSX.Element} The CreditsModal component.
 */
export default function CreditsModal({
    show,
    setShow,
    useStore,
    owner,
    repo,
    developers,
    publisher,
}) {

    const [showModal, setShowModal] = useState(false);

    // const [tab, setTab] = useState('Graphics');

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
                <Modal.Title>Game Credits</Modal.Title>
            </Modal.Header>

            <Modal.Body className="flex-column p-3">

                {developers ?
                    <div></div>
                    :
                    <div>Developed by: ArticlesJoey </div>
                }

                {publisher ?
                    <div></div>
                    :
                    <div>Published by: Articles Media </div>
                }

                <div className="mb-3"></div>

                {(owner && repo) &&
                    <div>
                        <div>Attributions:</div>
                        <a
                            href={`https://github.com/${owner}/${repo}/blob/main/README.md`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {/* View on GitHub */}
                            <ArticlesButton>
                                <i className="fab fa-github"></i>
                                View on GitHub
                            </ArticlesButton>
                        </a>
                    </div>
                }

            </Modal.Body>

            <Modal.Footer className="justify-content-between">

                <div>

                    {/* <ArticlesButton
                        variant="outline-dark"
                        onClick={() => {
                            setShow(false)
                        }}
                    >
                        Close
                    </ArticlesButton> */}

                </div>

                <ArticlesButton
                    variant="outline-dark"
                    onClick={() => {
                        setShow(false)
                    }}
                >
                    Close
                </ArticlesButton>

            </Modal.Footer>

        </Modal>
    );
}