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
 * @param {string} props.introText - Introductory text for the modal.
 * @param {Array} props.developers - List of developers.
 * @param {string} props.publisher - The publisher's name.

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
    introText
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

                {introText &&
                    <div className="mb-3">{introText}</div>
                }

                {developers ?
                    <div></div>
                    :
                    <div>
                        <h6 className="mb-2">
                            Developer: Articles Joey
                        </h6>

                        <a
                            href="https://github.com/articles-joey"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <ArticlesButton
                                // ref={el => elementsRef.current[0] = el}
                                size=""
                                className="mb-4"
                            >
                                <i className="fab fa-github me-2"></i>
                                <span>View on Github</span>
                            </ArticlesButton>
                        </a>
                    </div>


                }

                {publisher ?
                    <div></div>
                    :
                    <div>
                        <h6 className="mb-2">
                            Publisher: Articles Media
                        </h6>

                        <a
                            href="https://github.com/Articles-Media"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <ArticlesButton
                                // ref={el => elementsRef.current[1] = el}
                                size=""
                                className="mb-4"
                            >
                                <i className="fad fa-browser me-2"></i>
                                <span>View Website</span>
                            </ArticlesButton>
                        </a>
                    </div>
                }

                {/* <div className="mb-3"></div> */}

                {(owner && repo) &&
                    <div className="">
                        <div>Attributions:</div>
                        <a
                            href={`https://github.com/${owner}/${repo}/blob/main/README.md#attributions`}
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