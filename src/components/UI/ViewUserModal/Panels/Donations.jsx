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
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { ArticlesBadge, ArticlesCard, ArticlesCardBody, ArticlesCardFooter, ArticlesCardHeader } from '#root/src/components/UI/muiPrimitives';

export default function Donations({
    activeLayoutProposalSentiments,
    userDonations,
    lifetimeContribution
}) {

    const [viewAllDonations, setViewAllDonations] = useState(false);

    return (
        <ArticlesCard>

            <ArticlesCardHeader sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 1 }}>
                <Box component="span">Donations: </Box>

                <ArticlesBadge sx={{ bgcolor: 'grey.900', color: '#fff' }}>
                    {userDonations.count} - {`$${numberWithCommas((lifetimeContribution / 100 || 0).toFixed(2))}`}
                </ArticlesBadge>
            </ArticlesCardHeader>

            <ArticlesCardBody sx={{ p: 2 }}>

                {userDonations?.list?.length == 0 &&
                    <Typography component="span" variant="body2">
                        User has no donations
                    </Typography>
                }

                <Box className="donations-wrap">
                    {userDonations?.list?.slice(0, viewAllDonations ? 100 : 3).map(layout => {

                        return (
                            <Box key={layout._id} sx={{ border: 1, borderColor: 'divider' }}>

                                {/* <div className="small">Most Recent</div> */}

                                <Box sx={{ py: 1, px: 2, lineHeight: 1.25, display: 'flex', alignItems: 'center' }}>

                                    <Typography variant="body2">Most Recent</Typography>

                                    <Box sx={{ ml: 2, display: 'flex', alignItems: 'center' }}>

                                        <Typography variant="h4" sx={{ mb: 0, mr: 2 }}>{`$${numberWithCommas((layout.amount / 100).toFixed(2))}`}</Typography>
                                        <Typography variant="body2">{format(new Date(layout.date), 'M/dd/yy')}</Typography>

                                    </Box>

                                </Box>

                                <ArticlesCardFooter sx={{ display: 'flex', p: 1 }}>
                                    <Link href={`${routes.HOME}/${layout.url}`}>
                                        <ArticlesButton
                                            small
                                        >
                                            <VisibilityIcon fontSize="inherit" sx={{ mr: 0.5 }} />
                                            View
                                        </ArticlesButton>
                                    </Link>
                                </ArticlesCardFooter>

                            </Box>
                        );

                    })}
                </Box>

            </ArticlesCardBody>

            <ArticlesCardFooter sx={{ p: 1, display: 'flex', justifyContent: 'center' }}>

                {userDonations.count > 1 &&
                    <ArticlesButton
                        onClick={() => {
                            setViewAllDonations(!viewAllDonations)
                        }}
                        // small
                        sx={{ width: 1 }}
                    >
                        {!viewAllDonations ? 'View All' : 'View Less'}
                    </ArticlesButton>
                }

            </ArticlesCardFooter>

            {/* <span className='badge bg-articles-secondary'>
                            <i className="fad fa-info me-1"></i>
                            <span>Info</span>
                        </span> */}

        </ArticlesCard>
    )
}
