import ArticlesButton from "@/components/Articles/Button"
import routes from "@/components/constants/routes"
import Link from "next/link"
import { ProgressBar } from "react-bootstrap";
import { useSelector } from "react-redux";

export default function ProposalsStance({
    activeLayoutProposalSentiments,
    populated_user,
    usersProposalSentiments,
    setShowFullStanceDetails,
    showFullStanceDetails,
    userData
}) {

    const userReduxState = useSelector((state) => state.auth.user_details)

    return (
        <div className="row mx-0 mb-2">

            {[
                {
                    name: `${populated_user?.display_name || userData.display_name}`,
                    data: activeLayoutProposalSentiments || {}
                },
                {
                    name: 'You',
                    data: usersProposalSentiments || {}
                }
            ].map(item => {

                if (item.name == 'You' && !userReduxState?._id) {
                    return (
                        <div key={item.name} className="col-lg-6 px-1">

                            <div className="card card-articles card-sm h-100">

                                <div className="card-header">
                                    <b>{item.name}</b>
                                </div>

                                <div className="card-body p-2">
                                    <small>Login or create an account to compare your political stance with this user!</small>
                                </div>

                                <div className="card-footer">

                                    <Link href={routes.SIGN_IN}>
                                        <ArticlesButton small className="">Sign In</ArticlesButton>
                                    </Link>

                                    <Link href={routes.SIGN_UP}>
                                        <ArticlesButton small className="">Sign Up</ArticlesButton>
                                    </Link>

                                </div>

                            </div>

                        </div>
                    );
                }

                return (
                    <div key={item.name} className="col-lg-6 px-1">

                        <div className="card card-articles card-sm">

                            <div
                                className="card-header"
                                onClick={() => {
                                    console.log(item.data)
                                }}
                            >
                                <b>{item.name}</b>
                            </div>

                            <div className="card-body py-2 px-2 small">

                                <div className=''>

                                    <div className='small'>Fundamental: {item?.data?.fundamental?.filter(obj => {

                                        if (item.data?.user_sentiments?.find(sen => sen.proposal_id == obj._id)) {
                                            return obj
                                        } else {
                                            return null
                                        }

                                    }).length}/{item?.data?.fundamental?.length}</div>

                                    <ProgressBar striped={true} variant="dark" className='shadow-articles mb-2' now={

                                        (item.data?.fundamental?.filter(obj => {

                                            if (item.data?.user_sentiments?.find(sen => sen.proposal_id == obj._id)) {
                                                return obj
                                            } else {
                                                return null
                                            }

                                        }).length / item.data?.fundamental?.length * 100).toFixed(2)

                                    } label={`${(item.data?.fundamental?.filter(obj => {

                                        if (item.data?.user_sentiments?.find(sen => sen.proposal_id == obj._id)) {
                                            return obj
                                        } else {
                                            return null
                                        }

                                    }).length / item.data?.fundamental?.length * 100).toFixed(2)}%`} />

                                    <ProgressBar className='shadow-articles mb-2' style={{ height: '10px' }}>
                                        <ProgressBar striped={true} variant="danger" now={((item.data?.user_sentiments?.filter(sen => sen.sentiment_status == "Disagree" && sen.populated_proposal.fundamental)?.length / item.data?.fundamental?.length) * 100).toFixed(2)} />
                                        <ProgressBar striped={true} variant="warning" now={((item.data?.user_sentiments?.filter(sen => sen.sentiment_status == "Needs Work" && sen.populated_proposal.fundamental)?.length / item.data?.fundamental?.length) * 100).toFixed(2)} />
                                        <ProgressBar striped={true} variant="success" now={((item.data?.user_sentiments?.filter(sen => sen.sentiment_status == "Agree" && sen.populated_proposal.fundamental)?.length / item.data?.fundamental?.length) * 100).toFixed(2)} />
                                    </ProgressBar>

                                    <div className=''>
                                        Disagree: {item.data?.user_sentiments?.filter(sen => {

                                            let isFundamental = item.data?.fundamental.find(obj => obj._id == sen.proposal_id)

                                            return sen.sentiment_status == "Disagree" && isFundamental

                                        })?.length || 0}
                                    </div>

                                    <div className=''>
                                        Needs Work: {item.data?.user_sentiments?.filter(sen => {

                                            let isFundamental = item.data?.fundamental.find(obj => obj._id == sen.proposal_id)

                                            return sen.sentiment_status == "Needs Work" && isFundamental

                                        })?.length || 0}
                                    </div>

                                    <div className='mb-2'>
                                        Agree: {item.data?.user_sentiments?.filter(sen => {

                                            let isFundamental = item.data?.fundamental.find(obj => obj._id == sen.proposal_id)

                                            return sen.sentiment_status == "Agree" && isFundamental

                                        })?.length || 0}
                                    </div>

                                </div>

                                {!showFullStanceDetails &&
                                    <span onClick={() => setShowFullStanceDetails(true)} className='badge bg-articles-secondary shadow-articles badge-hover'>View More</span>
                                }

                                {showFullStanceDetails &&

                                    <>
                                        <hr />

                                        <div className='mb-2'>

                                            <div className='small'>All: {item.data?.user_sentiments?.length}/{item.data?.total}</div>

                                            <ProgressBar striped={true} animated={true} variant="dark" className='shadow-articles mb-1' now={
                                                (item.data?.user_sentiments?.length / item.data?.total * 100).toFixed(2)
                                            } label={
                                                `${(item.data?.user_sentiments?.length / item.data?.total * 100).toFixed(2)}%`
                                            } />


                                            <ProgressBar className='shadow-articles mb-2' style={{ height: '10px' }}>
                                                <ProgressBar striped={true} animated={true} variant="danger" now={((item.data?.user_sentiments?.filter(sen => sen.sentiment_status == "Disagree")?.length / item.data?.total) * 100).toFixed(2)} />
                                                <ProgressBar striped={true} animated={true} variant="warning" now={((item.data?.user_sentiments?.filter(sen => sen.sentiment_status == "Needs Work")?.length / item.data?.total) * 100).toFixed(2)} />
                                                <ProgressBar striped={true} animated={true} variant="success" now={((item.data?.user_sentiments?.filter(sen => sen.sentiment_status == "Agree")?.length / item.data?.total) * 100).toFixed(2)} />
                                            </ProgressBar>

                                            <div className=''>
                                                Disagree: {item.data?.user_sentiments?.filter(sen => {

                                                    // let isFundamental = item.data?.fundamental.find(obj => obj._id == sen.proposal_id)

                                                    return sen.sentiment_status == "Disagree"

                                                })?.length || 0}
                                            </div>

                                            <div className=''>
                                                Needs Work: {item.data?.user_sentiments?.filter(sen => {

                                                    // let isFundamental = item.data?.fundamental.find(obj => obj._id == sen.proposal_id)

                                                    return sen.sentiment_status == "Needs Work"

                                                })?.length || 0}
                                            </div>

                                            <div className='mb-2'>
                                                Agree: {item.data?.user_sentiments?.filter(sen => {

                                                    // let isFundamental = item.data?.fundamental.find(obj => obj._id == sen.proposal_id)

                                                    return sen.sentiment_status == "Agree"

                                                })?.length || 0}
                                            </div>


                                            {/* <div className='lh-sm'>
    <small>Share your sentiment on all proposals!</small>
    </div> */}

                                        </div>

                                        <hr />

                                        <p className='mb-0'>
                                            <div className="row">

                                                <div className='col-9'>Comments</div>
                                                <div className='col-3'><b>{item.data?.user_comments?.length || 0}</b></div>

                                                <div className='col-9'>Submissions</div>
                                                <div className='col-3'><b>{item.data?.user_submissions}</b></div>

                                            </div>
                                        </p>
                                    </>

                                }

                            </div>

                        </div>

                    </div>
                )

            })}

        </div>
    )
}