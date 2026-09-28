import { format } from "date-fns"

import ArticlesButton from '#root/src/components/UI/Button';
import Link from '#root/src/components/UI/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { ArticlesBadge, ArticlesCard, ArticlesCardBody, ArticlesCardFooter, ArticlesCardHeader, articlesShadow } from '#root/src/components/UI/muiPrimitives';

export default function ProposalSentiments({
    activeLayoutProposalSentiments
}) {
    return (
        <Box>
            {activeLayoutProposalSentiments.user_sentiments?.map(obj => {
                return (
                    <ArticlesCard key={obj._id} sx={{ mb: 2 }}>

                        <ArticlesCardHeader sx={{ typography: 'body2' }}>
                            Gave their sentiment on <b>{obj.populated_proposal.title}</b>
                        </ArticlesCardHeader>

                        <ArticlesCardBody sx={{ typography: 'body2', p: 2 }}>

                            <Box sx={{ display: 'flex', alignItems: 'center', borderBottom: 1, borderColor: 'divider', pb: 1 }}>
                                {obj.sentiment_status == 'Agree' && <ArticlesBadge sx={{ boxShadow: articlesShadow, bgcolor: 'success.main', color: '#fff' }}>Agree</ArticlesBadge>}
                                {obj.sentiment_status == 'Needs Work' && <ArticlesBadge sx={{ boxShadow: articlesShadow, bgcolor: 'warning.main', color: 'warning.contrastText' }}>Needs Work</ArticlesBadge>}
                                {obj.sentiment_status == 'Disagree' && <ArticlesBadge sx={{ boxShadow: articlesShadow, bgcolor: 'error.main', color: '#fff' }}>Disagree</ArticlesBadge>}

                                <Typography component="span" variant="body2" sx={{ ml: 2 }}>{format(new Date(obj.date), 'M/dd/yy')}</Typography>
                            </Box>

                            <Box sx={{ mt: 1 }}>{obj.comment}</Box>

                        </ArticlesCardBody>

                        <ArticlesCardFooter>
                            <Link
                                prefetch={false}
                                // href={`${routes.PROPOSALS}/${obj.populated_proposal.url}?interaction_id=${obj._id}`}
                                href={`https://articles.media/politics/proposals/${obj.populated_proposal.url}?interaction_id=${obj._id}`}
                            >
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
