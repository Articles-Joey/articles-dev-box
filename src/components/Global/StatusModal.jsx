import { Modal } from "react-bootstrap"
import { useState } from "react";
import ArticlesButton from "../UI/Button"
import useMainSiteStatus from "#root/src/hooks/useMainSiteStatus";
import useAuthSiteStatus from "#root/src/hooks/useAuthSiteStatus";

export default function StatusModal({
    show,
    setShow
}) {

    const [showMainDetails, setShowMainDetails] = useState(false);
    const [showAuthDetails, setShowAuthDetails] = useState(false);

    const getStatusCode = (data, error, loading) => {
        if (loading) return "...";
        if (error) return error.response?.status || "Error";
        if (data) return "200";
        return "-";
    }

    const {
        data: mainSiteStatus,
        error: mainSiteStatusError,
        isLoading: mainSiteStatusLoading,
        mutate: mainSiteStatusMutate
    } = useMainSiteStatus({
        disable: process.env.NODE_ENV !== "development"
    });

    const {
        data: authSiteStatus,
        error: authSiteStatusError,
        isLoading: authSiteStatusLoading,
        mutate: authSiteStatusMutate
    } = useAuthSiteStatus({
        disable: process.env.NODE_ENV !== "development"
    });

    return (
        <Modal show={show} size={'md'} className="articles-modal" centered onHide={() => setShow(false)}>

            <Modal.Header>
                <Modal.Title>
                    Status Details
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>

                <div className="d-flex align-items-center mb-2">
                    <h5 className="mb-0 me-2">Main Site Status: {getStatusCode(mainSiteStatus, mainSiteStatusError, mainSiteStatusLoading)}</h5>
                    <ArticlesButton variant="link" size="sm" className="p-0" onClick={() => setShowMainDetails(!showMainDetails)}>
                        {showMainDetails ? 'Hide' : 'View'} More
                    </ArticlesButton>
                </div>
                {showMainDetails && (
                    <pre>
                        {mainSiteStatusLoading && 'Loading...'}
                        {mainSiteStatusError && `Error: ${mainSiteStatusError.message}`}
                        {mainSiteStatus && JSON.stringify(mainSiteStatus, null, 2)}
                    </pre>
                )}

                <div className="d-flex align-items-center mb-2">
                    <h5 className="mb-0 me-2">Auth Site Status: {getStatusCode(authSiteStatus, authSiteStatusError, authSiteStatusLoading)}</h5>
                    <ArticlesButton variant="link" size="sm" className="p-0" onClick={() => setShowAuthDetails(!showAuthDetails)}>
                        {showAuthDetails ? 'Hide' : 'View'} More
                    </ArticlesButton>
                </div>
                {showAuthDetails && (
                    <pre>
                        {authSiteStatusLoading && 'Loading...'}
                        {authSiteStatusError && `Error: ${authSiteStatusError.message}`}
                        {authSiteStatus && JSON.stringify(authSiteStatus, null, 2)}
                    </pre>
                )}

            </Modal.Body>

            <Modal.Footer className="justify-content-between">

                <ArticlesButton
                    variant="articles"
                    onClick={() => {
                        setShow(false)
                    }}
                >
                    Close
                </ArticlesButton>

            </Modal.Footer>

        </Modal>
    )

}