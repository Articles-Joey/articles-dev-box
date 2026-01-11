import ArticlesButton from "@/components/Articles/Button"
import routes from "@/components/constants/routes"
import Link from "next/link"
import { useState } from "react";

export default function ProposalSubmissions({
    activeLayoutProposalSentiments,
    userProposalsSubmitted
}) {

    const [viewAllProposalsSubmitted, setViewAllProposalsSubmitted] = useState(false);

    return (
        <div>

            {/* <div className='mb-1 d-flex justify-content-between align-items-center'>

                <span>
                    <i className="fad fa-scroll me-1"></i>
                    <span>
                        <span>Political Submissions: </span>
                        <span className='badge bg-dark'>
                            {userProposalsSubmitted?.length || 0}
                        </span>
                    </span>
                </span>

                <span className='badge bg-articles-secondary'>
                    <i className="fad fa-info me-1"></i>
                    <span>Info</span>
                </span>

            </div> */}

            <div className='mb-2'>

                {userProposalsSubmitted?.slice(0, viewAllProposalsSubmitted ? 100 : 1).map(layout => {

                    return (
                        <div key={layout._id} className="card card-articles card-sm shadow-articles">
                            <div className="card-body p-2 lh-sm d-flex align-items-center">

                                {/* <img className='' src={layout?.logo?.Light?.location} width={'40px'} height={'40px'} alt="" /> */}

                                <div className='ms-2'>

                                    <div>{layout.title}</div>
                                    <div className='small'>{layout.type}{layout.fundamental && '  - Fundamental'}</div>

                                </div>

                            </div>


                            <div className='card-footer d-flex'>
                                <Link
                                    href={`${routes.PROPOSALS_SUBMISSIONS_ALL}/${layout._id}`}
                                    className=""
                                >

                                    <ArticlesButton small>
                                        <span>
                                            <i className="fad fa-eye me-1"></i>
                                            View
                                        </span>
                                    </ArticlesButton>

                                </Link>
                            </div>

                        </div>
                    );

                })}
            </div>

            {userProposalsSubmitted?.length > 1 &&
                <ArticlesButton
                    // small
                    onClick={() => setViewAllProposalsSubmitted(!viewAllProposalsSubmitted)}
                    className="w-100"
                >
                    {!viewAllProposalsSubmitted ? 'View All' : 'View Less'}
                </ArticlesButton>
            }

            {userProposalsSubmitted?.length == 0 &&
                <span className='small'>
                    User has no proposal submissions
                </span>
            }
        </div>
    )
}