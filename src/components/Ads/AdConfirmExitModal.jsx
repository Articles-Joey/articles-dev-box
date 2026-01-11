import { useEffect } from 'react';

// import Link from 'next/link'
import Link from '#root/src/components/UI/Link';

import Modal from 'react-bootstrap/Modal';

// import ROUTES from 'components/constants/routes';
// import ArticlesButton from '../Articles/Button';
import ArticlesButton from '#root/src/components/UI/Button';

export default function AdConfirmExitModal(props) {

    let { setModalShow, ad, previewData } = props;

    useEffect(() => {

        console.log("Mounted")

    }, []);

    const closeModal = () => {
        // console.log("WHYYYY")
        setModalShow(false)
    }

    return (

        <div>

            {/* <style jsx global>
                {`
                        .ad-details-modal-backdrop {
                            z-index: 1055!important;
                        }
                    `}
            </style> */}

            <Modal
                show={true}
                backdropClassName="ad-details-modal-backdrop"
                className="articles-modal"
                centered
                onHide={closeModal}
                size='md'
            >

                <Modal.Header className="align-items-center" closeButton>
                    <Modal.Title>Confirm Exit</Modal.Title>
                </Modal.Header>

                <Modal.Body
                    className=''
                >

                    <div className='ratio ratio-16x9 bg-black mb-2'>

                    </div>

                    <p className="mb-1">This advertiser has been approved and verified to display ads but always be cautious when interacting with ads. Any offsite interactions are at your own risk and should be approached with caution. We can not be held responsible for any issues that may arise.</p>

                </Modal.Body>

                <Modal.Footer className='d-flex justify-content-between'>

                    <ArticlesButton
                        variant={'articles'}
                        onClick={closeModal}
                    >
                        <i className='fad fa-times'></i>
                        Close
                    </ArticlesButton>

                    <Link
                        href={ad?.website}
                        newPage
                        // target="_blank"
                        // rel="noreferrer"
                    >
                        <ArticlesButton
                            variant={'articles'}
                            onClick={closeModal}
                        >
                            <i className='fad fa-link'></i>
                            Proceed
                        </ArticlesButton>
                    </Link>

                </Modal.Footer>

            </Modal>

        </div>

    );
}