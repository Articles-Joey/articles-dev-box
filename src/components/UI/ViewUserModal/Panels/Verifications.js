import ArticlesButton from "@/components/Articles/Button"
import ArticlesDate from "@/components/Articles/Date"
import routes from "@/components/constants/routes"
import Link from "next/link"
import ViewUserModal from "../ViewUserModal"

export default function Verifications({
    activeLayoutProposalSentiments,
    userData
}) {
    return (
        <div>

            <div className=''>
                {userData?.verified?.verified_methods?.map((item, item_i) => {

                    if (Object.keys(item)?.length > 0) {
                        return (
                            <div
                                key={item_i}
                                className='card card-articles card-sm object mb-2'
                            >
                                <div className="card-header">
                                    {item?.method_name}
                                </div>
                                <div className="card-body p-2">
                                    <div className="small">
                                        <div className="d-flex align-items-center">
                                            <span className="me-2">Approved On: </span><ArticlesDate date={item.approved_date} />
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <span className="me-2">Approved By: </span><ViewUserModal user_id={item.approved_by} dangerousPopulate />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    } else {
                        return (
                            <div
                                key={item_i}
                                className='single'
                            >
                                {item}
                            </div>
                        )
                    }

                })}
            </div>

        </div>
    )
}