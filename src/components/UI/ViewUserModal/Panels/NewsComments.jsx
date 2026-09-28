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
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { ArticlesCard, ArticlesCardBody, ArticlesCardFooter, ArticlesCardHeader } from '#root/src/components/UI/muiPrimitives';

export default function NewsComments({
    publicUserData
}) {
    return (
        <Box>
            {publicUserData?.populated_news_comments?.filter(obj => !obj.parent_id).map(obj => {
                return (
                    <ArticlesCard key={obj._id} sx={{ mb: 2 }}>

                        <ArticlesCardHeader sx={{ typography: 'body2' }}>
                            Commented on <b>{obj.populated_news?.news_title}</b>
                        </ArticlesCardHeader>

                        <ArticlesCardBody sx={{ typography: 'body2', p: 2, display: 'flex' }}>

                            <Box
                                sx={{
                                    width: '100px',
                                    height: '100px',
                                    mr: 2,
                                    flexShrink: 0,
                                }}
                            >
                                <NewsPreviewImage
                                    featured_image={obj?.populated_news?.featured_image}
                                    thumbnail_size={100}
                                />
                            </Box>

                            <Box>

                                <Typography component="span" variant="body2">
                                    {format(new Date(obj.date), 'M/dd/yy')}
                                </Typography>

                                <Box>{obj.comment}</Box>

                            </Box>

                        </ArticlesCardBody>

                        <ArticlesCardFooter>
                            <Link prefetch={false} href={`${renderNewsRoute(obj.populated_news?.news_type)}/${obj.populated_news?.url}?interaction_id=${obj._id}`}>
                                <ArticlesButton
                                    small
                                >
                                    View
                                </ArticlesButton>
                            </Link>
                        </ArticlesCardFooter>

                    </ArticlesCard>
                )
            })}
        </Box>
    )
}
