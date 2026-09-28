import { useState } from "react";

// import { format } from "date-fns"

import ArticlesButton from '#root/src/components/UI/Button';
import Link from '#root/src/components/UI/Link';
import { routes } from "#root/src/constants/routes";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { ArticlesCard, ArticlesCardBody, ArticlesCardFooter, articlesShadow } from '#root/src/components/UI/muiPrimitives';

export default function ProposalSubmissions({
    activeLayoutProposalSentiments,
    userProposalsSubmitted
}) {

    const [viewAllProposalsSubmitted, setViewAllProposalsSubmitted] = useState(false);

    return (
        <Box>

            <Box sx={{ mb: 2 }}>

                {userProposalsSubmitted?.slice(0, viewAllProposalsSubmitted ? 100 : 1).map(layout => {

                    return (
                        <ArticlesCard key={layout._id} sx={{ boxShadow: articlesShadow }}>
                            <ArticlesCardBody sx={{ p: 2, lineHeight: 1.25, display: 'flex', alignItems: 'center' }}>

                                {/* <img className='' src={layout?.logo?.Light?.location} width={'40px'} height={'40px'} alt="" /> */}

                                <Box sx={{ ml: 2 }}>

                                    <Box>{layout.title}</Box>
                                    <Typography variant="body2">{layout.type}{layout.fundamental && '  - Fundamental'}</Typography>

                                </Box>

                            </ArticlesCardBody>

                            <ArticlesCardFooter sx={{ display: 'flex' }}>
                                <Link
                                    href={`${routes.PROPOSALS_SUBMISSIONS_ALL}/${layout._id}`}
                                >

                                    <ArticlesButton small>
                                        <Box component="span">
                                            <VisibilityIcon fontSize="inherit" sx={{ mr: 0.5 }} />
                                            View
                                        </Box>
                                    </ArticlesButton>

                                </Link>
                            </ArticlesCardFooter>

                        </ArticlesCard>
                    );

                })}
            </Box>

            {userProposalsSubmitted?.length > 1 &&
                <ArticlesButton
                    // small
                    onClick={() => setViewAllProposalsSubmitted(!viewAllProposalsSubmitted)}
                    sx={{ width: 1 }}
                >
                    {!viewAllProposalsSubmitted ? 'View All' : 'View Less'}
                </ArticlesButton>
            }

            {userProposalsSubmitted?.length == 0 &&
                <Typography component="span" variant="body2">
                    User has no proposal submissions
                </Typography>
            }
        </Box>
    )
}
