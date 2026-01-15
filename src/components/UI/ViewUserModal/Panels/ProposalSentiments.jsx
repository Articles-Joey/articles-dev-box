import { format } from "date-fns"

import ArticlesButton from '#root/src/components/UI/Button';
import Link from '#root/src/components/UI/Link';

export default function ProposalSentiments({
    activeLayoutProposalSentiments
}) {
    return (
        <div>
            {activeLayoutProposalSentiments.user_sentiments?.map(obj => {
                return (
                    <div key={obj._id} className="card card-articles card-sm border mb-2">

                        <div className="card-header small">
                            Gave their sentiment on <b>{obj.populated_proposal.title}</b>
                        </div>

                        <div className="card-body small p-2">

                            <div className='d-flex align-items-center border-bottom pb-1'>
                                {obj.sentiment_status == 'Agree' && <div className="badge shadow-articles bg-success">Agree</div>}
                                {obj.sentiment_status == 'Needs Work' && <div className="badge shadow-articles bg-warning text-dark">Needs Work</div>}
                                {obj.sentiment_status == 'Disagree' && <div className="badge shadow-articles bg-danger">Disagree</div>}

                                <span className="small ms-2">{format(new Date(obj.date), 'M/dd/yy')}</span>
                            </div>

                            <div className='mt-1'>{obj.comment}</div>

                        </div>

                        <div className="card-footer">
                            <Link
                                prefetch={false}
                                // href={`${routes.PROPOSALS}/${obj.populated_proposal.url}?interaction_id=${obj._id}`}
                                href={`https://articles.media/politics/proposals/${obj.populated_proposal.url}?interaction_id=${obj._id}`}
                            >
                                <ArticlesButton
                                    small
                                >
                                    View
                                </ArticlesButton>
                            </Link>
                        </div>

                    </div>
                )
            })}
        </div>
    )
}