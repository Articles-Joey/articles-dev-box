import ArticlesButton from "@/components/Articles/Button"
import routes from "@/components/constants/routes"
import { format } from "date-fns"
import Link from "next/link"

export default function ProposalComments({
    activeLayoutProposalSentiments
}) {
    return (
        <div>
            {activeLayoutProposalSentiments.user_comments?.filter(obj => !obj.parent_id).map(obj => {
                return (
                    <div key={obj._id} className="card card-articles card-sm border mb-2">

                        <div className="card-header small">
                            Commented on <b>{obj.populated_proposal.title}</b>
                        </div>

                        <div className="card-body small p-2">

                            <div>
                                <span className="small">{format(new Date(obj.date), 'M/dd/yy')}</span>

                                <div>{obj.comment}</div>
                            </div>

                        </div>

                        {/* TODO */}
                        <div className="card-footer">
                            <Link prefetch={false} href={`${routes.PROPOSALS}/${obj.populated_proposal.url}?interaction_id=${obj._id}`}>
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