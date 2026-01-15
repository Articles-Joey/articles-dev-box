import { useState } from "react";

import { format } from "date-fns"

import ArticlesButton from '#root/src/components/UI/Button';
import Link from '#root/src/components/UI/Link';
import { routes } from "#root/src/constants/routes";

// import ArticlesButton from "@/components/Articles/Button"
// import routes from "@/components/constants/routes"
// import { format } from "date-fns";
// import Link from "next/link"
// import { useState } from "react";
import numberWithCommas from "#root/src/util/numberWithCommas";

export default function Donations({
    activeLayoutProposalSentiments,
    userDonations,
    lifetimeContribution
}) {

    const [viewAllDonations, setViewAllDonations] = useState(false);

    return (
        <div className='card card-articles '>


            <div className='card-header d-flex justify-content-between align-items-center p-1'>
                <span>Donations: </span>

                <span className='badge bg-dark'>
                    {userDonations.count} - {`$${numberWithCommas((lifetimeContribution / 100 || 0).toFixed(2))}`}
                </span>
            </div>

            <div className="card-body p-2">

                {userDonations?.list?.length == 0 &&
                    <span className='small'>
                        User has no donations
                    </span>
                }

                <div className='donations-wrap'>
                    {userDonations?.list?.slice(0, viewAllDonations ? 100 : 3).map(layout => {

                        return (
                            <div key={layout._id} className="border">

                                {/* <div className="small">Most Recent</div> */}

                                <div className="card-body py-1 px-2 lh-sm d-flex align-items-center">

                                    <div className="small">Most Recent</div>

                                    <div className='ms-2 d-flex align-items-center'>

                                        <div className='h4 mb-0 me-2'>{`$${numberWithCommas((layout.amount / 100).toFixed(2))}`}</div>
                                        <div className='small'>{format(new Date(layout.date), 'M/dd/yy')}</div>

                                    </div>

                                </div>


                                <div className='card-footer d-flex p-1'>
                                    <Link href={`${routes.HOME}/${layout.url}`}>
                                        <ArticlesButton
                                            className=""
                                            small
                                        >
                                            <i className="fad fa-eye me-1"></i>
                                            View
                                        </ArticlesButton>
                                    </Link>
                                </div>

                            </div>
                        );

                    })}
                </div>

            </div>

            <div className="card-footer p-1 d-flex justify-content-center">

                {userDonations.count > 1 &&
                    <ArticlesButton
                        onClick={() => {
                            setViewAllDonations(!viewAllDonations)
                        }}
                        // small
                        className="w-100"
                    >
                        {!viewAllDonations ? 'View All' : 'View Less'}
                    </ArticlesButton>
                }

            </div>

            {/* <span className='badge bg-articles-secondary'>
                            <i className="fad fa-info me-1"></i>
                            <span>Info</span>
                        </span> */}

        </div>
    )
}