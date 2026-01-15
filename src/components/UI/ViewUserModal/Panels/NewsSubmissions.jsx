import { useState } from "react";

// import { format } from "date-fns"

import ArticlesButton from '#root/src/components/UI/Button';
import Link from '#root/src/components/UI/Link';
import { routes } from "#root/src/constants/routes";

// import ArticlesButton from "@/components/Articles/Button"
// import routes from "@/components/constants/routes"
// import Link from "next/link"
// import { useState } from "react";

export default function NewsSubmissions({
    userNewsSubmitted,
}) {

    const [viewAllNewsSubmitted, setViewAllNewsSubmitted] = useState(false);

    return (
        <div>
            <div className='mb-1 d-flex justify-content-between align-items-center'>

                <span>
                    <i className="fad fa-newspaper me-1"></i>
                    <span>
                        <span>News Submissions: </span>
                        <span className='badge bg-dark'>
                            {/* {userSubmittedCount['user-public']} */}
                            {userNewsSubmitted?.length || 0}
                        </span>
                    </span>
                </span>

                <span className='badge bg-articles-secondary'>
                    <i className="fad fa-info me-1"></i>
                    <span>Info</span>
                </span>

            </div>

            <div className='mb-1'>
                {userNewsSubmitted?.slice(0, viewAllNewsSubmitted ? 100 : 1).map(layout => {

                    return (
                        <div key={layout._id} className="card card-articles shadow-articles">
                            <div className="card-body py-1 px-2 lh-sm d-flex align-items-center">

                                <img className='' src={layout?.featured_image?.location} width={'40px'} height={'40px'} style={{ objectFit: 'cover' }} alt="" />

                                <div className='ms-2'>

                                    <div>{layout.news_title}</div>
                                    {/* <div className='small'>Last Viewed: Never</div> */}

                                </div>

                            </div>


                            <div className='card-footer d-flex p-1'>
                                <Link href={`${routes.HOME}/${layout.url}`}>
                                    <ArticlesButton small className="">
                                        <i className="fad fa-eye me-1"></i>View
                                    </ArticlesButton>
                                </Link>
                            </div>

                        </div>
                    );

                })}
            </div>

            {userNewsSubmitted?.length > 1 ?
                <ArticlesButton onClick={() => setViewAllNewsSubmitted(!viewAllNewsSubmitted)} small className="">
                    {!viewAllNewsSubmitted ? 'View All' : 'View Less'}
                </ArticlesButton>
                :
                <span className='small'>
                    User has no news submissions
                </span>
            }
        </div>
    )
}