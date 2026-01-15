// import { useState } from "react";

// import { format } from "date-fns"

import ArticlesButton from '#root/src/components/UI/Button';
import Link from '#root/src/components/UI/Link';
import { routes } from "#root/src/constants/routes";

// TODO - Add in
// import RenderLayoutItemLogo from "@/components/Layouts/RenderLayoutItemLogo";

// import ArticlesButton from "@/components/Articles/Button"
// import routes from "@/components/constants/routes"
// import Link from "next/link"
// import { useSelector } from "react-redux";

export default function Layouts({
    userLayoutsData,
    handleClose
}) {

    // TODO - Add back in
    const userReduxState = false

    return (
        <div>
            
            {/* <div className='mb-1 d-flex justify-content-between align-items-center'>

                <span>
                    <i className="fad fa-home me-1"></i>
                    <span>Users Layouts: <span className='badge bg-dark'>{userLayoutsData?.length || 0}</span> </span>
                </span>

                <span className='badge bg-articles-secondary'>
                    <i className="fad fa-info me-1"></i>
                    <span>Info</span>
                </span>

            </div> */}

            {userLayoutsData?.map(layout => {

                return (
                    <div key={layout._id} className="card card-articles shadow-articles">
                        <div className="card-body py-1 px-2 lh-sm d-flex align-items-center">

                            {/* <RenderLayoutItemLogo
                                layout={layout}
                                size={50}
                            /> */}

                            <div className='ms-2'>

                                <div>{layout.name}</div>
                                <div className='small'>Last Viewed: Never</div>

                            </div>

                        </div>


                        <div className='card-footer d-flex p-1'>
                            {userReduxState._id !== layout.user_id &&
                                <ArticlesButton
                                    className=""
                                    small
                                >
                                    <i className="fad fa-plus me-1"></i>
                                    Follow
                                </ArticlesButton>
                            }
                            <Link
                                href={`${routes.HOME}/${layout.url}`}
                                // onClick={handleClose}
                            >
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
    )
}