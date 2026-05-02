import { Modal } from "react-bootstrap";
import ArticlesButton from "../UI/Button";

export default function SignOutModal({
    show,
    setShow,
    action
}) {

    return (
        <Modal
            show={show}
            size={'md'}
            className={`articles-modal`}
            // modalBackdropClassName={modalBackdropClassName}
            centered
            onHide={() => setShow(false)}
        // style={style}
        // id={id}
        >

            <Modal.Header>
                <Modal.Title>
                    Confirm Sign Out
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>

                Are you sure you want to sign out? This will also sign you out on https://articles.media and other Articles Media services.

            </Modal.Body>

            <Modal.Footer className="justify-content-between">

                <ArticlesButton
                    variant="articles"
                    onClick={() => {
                        setShow(false)
                    }}
                >
                    <i className="fad fa-redo me-2"></i>
                    <span>Cancel</span>
                </ArticlesButton>

                <ArticlesButton
                    variant="articles"
                    onClick={() => {
                        action();
                        setShow(false)
                    }}
                >
                    <i className="fad fa-times me-2"></i>
                    Confirm
                </ArticlesButton>

            </Modal.Footer>

        </Modal>
    )
}