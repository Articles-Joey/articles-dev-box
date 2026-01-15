import { useState } from "react";

import { format } from "date-fns"

import ArticlesButton from '#root/src/components/UI/Button';
import Link from '#root/src/components/UI/Link';
// import { routes } from "#root/src/constants/routes";

// import ArticlesButton from "@/components/Articles/Button"
// import routes from "@/components/constants/routes"
import NewsPreviewImage from "#root/src/components/News/NewsPreviewImage"
// import { format } from "date-fns"
// import Link from "next/link"

import renderNewsRoute from '#root/src/util/renderNewsRoute';

export default function NewsComments({
    publicUserData
}) {
    return (
        <div>
            {publicUserData?.populated_news_comments?.filter(obj => !obj.parent_id).map(obj => {
                return (
                    <div key={obj._id} className="card card-articles card-sm border mb-2">

                        <div className="card-header small">
                            Commented on <b>{obj.populated_news?.news_title}</b>
                        </div>

                        <div className="card-body small p-2 d-flex">

                            <div
                                style={{
                                    width: '100px',
                                    height: '100px'
                                }}
                                className='me-2 flex-shrink-0'
                            >
                                <NewsPreviewImage
                                    featured_image={obj?.populated_news?.featured_image}
                                    thumbnail_size={100}
                                />
                            </div>

                            <div>

                                <span className="small">
                                    {format(new Date(obj.date), 'M/dd/yy')}
                                </span>

                                <div>{obj.comment}</div>

                            </div>

                        </div>

                        <div className="card-footer">
                            <Link prefetch={false} href={`${renderNewsRoute(obj.populated_news?.news_type)}/${obj.populated_news?.url}?interaction_id=${obj._id}`}>
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