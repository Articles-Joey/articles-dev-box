import { useState } from "react";

// import { format } from "date-fns"

import ArticlesButton from '#root/src/components/UI/Button';
import Link from '#root/src/components/UI/Link';
import { routes } from "#root/src/constants/routes";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import InfoIcon from '@mui/icons-material/Info';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { ArticlesBadge, ArticlesCard, ArticlesCardBody, ArticlesCardFooter, articlesShadow } from '#root/src/components/UI/muiPrimitives';

// import ArticlesButton from "@/components/Articles/Button"
// import routes from "@/components/constants/routes"
// import Link from "next/link"
// import { useState } from "react";

export default function NewsSubmissions({
    userNewsSubmitted,
}) {

    const [viewAllNewsSubmitted, setViewAllNewsSubmitted] = useState(false);

    return (
        <Box>
            <Box sx={{ mb: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

                <Box component="span" sx={{ display: 'flex', alignItems: 'center' }}>
                    <NewspaperIcon fontSize="inherit" sx={{ mr: 0.5 }} />
                    <Box component="span">
                        <Box component="span">News Submissions: </Box>
                        <ArticlesBadge sx={{ bgcolor: 'grey.900', color: '#fff' }}>
                            {/* {userSubmittedCount['user-public']} */}
                            {userNewsSubmitted?.length || 0}
                        </ArticlesBadge>
                    </Box>
                </Box>

                <ArticlesBadge sx={{ bgcolor: 'var(--articles-secondary-color, #f9edcd)' }}>
                    <InfoIcon fontSize="inherit" sx={{ mr: 0.5 }} />
                    Info
                </ArticlesBadge>

            </Box>

            <Box sx={{ mb: 1 }}>
                {userNewsSubmitted?.slice(0, viewAllNewsSubmitted ? 100 : 1).map(layout => {

                    return (
                        <ArticlesCard key={layout._id} sx={{ boxShadow: articlesShadow }}>
                            <ArticlesCardBody sx={{ py: 1, px: 2, lineHeight: 1.25, display: 'flex', alignItems: 'center' }}>

                                <Box component="img" src={layout?.featured_image?.location} width={40} height={40} sx={{ objectFit: 'cover' }} alt="" />

                                <Box sx={{ ml: 2 }}>

                                    <Box>{layout.news_title}</Box>
                                    {/* <div className='small'>Last Viewed: Never</div> */}

                                </Box>

                            </ArticlesCardBody>

                            <ArticlesCardFooter sx={{ display: 'flex', p: 1 }}>
                                <Link href={`${routes.HOME}/${layout.url}`}>
                                    <ArticlesButton small>
                                        <VisibilityIcon fontSize="inherit" sx={{ mr: 0.5 }} />View
                                    </ArticlesButton>
                                </Link>
                            </ArticlesCardFooter>

                        </ArticlesCard>
                    );

                })}
            </Box>

            {userNewsSubmitted?.length > 1 ?
                <ArticlesButton onClick={() => setViewAllNewsSubmitted(!viewAllNewsSubmitted)} small>
                    {!viewAllNewsSubmitted ? 'View All' : 'View Less'}
                </ArticlesButton>
                :
                <Typography component="span" variant="body2">
                    User has no news submissions
                </Typography>
            }
        </Box>
    )
}
