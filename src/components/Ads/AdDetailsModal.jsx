import { useEffect } from 'react';

// import Link from 'next/link'
import Link from '#root/src/components/UI/Link';

import Modal from 'react-bootstrap/Modal';

// import ROUTES from 'components/constants/routes';
// import ArticlesButton from '../Articles/Button';
import ArticlesButton from '#root/src/components/UI/Button';

export default function AdDetailsModal(props) {

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
                    <Modal.Title>Ad Details</Modal.Title>
                </Modal.Header>

                <Modal.Body
                    className=''
                >

                    <p className="mb-1">Advertiser: <b>{ad.business}</b></p>
                    <p className="mb-0">Ad ID: <b>{previewData?._id || ad._id}</b></p>

                    <hr />

                    <div className='mb-1'>This ad is being shown to you for the following reasons</div>

                    {/* <hr className="border w-100 border-white" /> */}

                    {ad.city ?
                        <div>

                            <div className="h4 mb-1">
                                {ad.business}
                            </div>

                            <div>Is advertising to all zip codes within a</div>
                            <span><div className="badge bg-light shadow-articles">15 Mile Radius</div></span>
                            <div>of it&apos;s business</div>

                            <hr className="border w-50 border-white" />

                            <div className="d-flex align-items-center">
                                <div>Your Zip code</div>
                                <div className="badge bg-light shadow-articles ms-2">12524</div>
                                <div className="ms-2">is</div>
                                <div className="badge bg-light shadow-articles ms-2">1.7 miles away</div>
                            </div>
                        </div>
                        :
                        <div>

                            <div className="h4 mb-1">
                                {ad.business}
                            </div>

                            <div>Is advertising to all users</div>

                        </div>
                    }

                    <div className="grow"></div>

                    <hr className="w-100" />

                    {/* <div className="reason">Details about this ads financial impact can be found <Link>Here</Link>.</div> */}

                    <div className="reason lh-sm mb-2">Ads we display to you will always be transparent as to why you are seeing them.</div>

                    <Link href={'https://articles.media/settings/account'} newPage className="">
                    
                        <ArticlesButton
                            small
                        >
                            Settings
                        </ArticlesButton>
                       
                    </Link>



                    {/* <div onClick={() => adDetailsExpandedToggle()} className="explanation">
        Ad Details
    </div> */}

                </Modal.Body>

                <Modal.Footer className='d-flex justify-content-center'>
                    <ArticlesButton
                        variant={'articles'}
                        onClick={closeModal}
                    >
                        Close
                    </ArticlesButton>
                </Modal.Footer>

            </Modal>

        </div>

    );
}