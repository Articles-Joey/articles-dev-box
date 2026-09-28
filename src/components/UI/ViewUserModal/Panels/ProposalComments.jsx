import { format } from "date-fns"

import ArticlesButton from '#root/src/components/UI/Button';
import Link from '#root/src/components/UI/Link';
import { routes } from "#root/src/constants/routes";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { ArticlesCard, ArticlesCardBody, ArticlesCardFooter, ArticlesCardHeader } from '#root/src/components/UI/muiPrimitives';

export default function ProposalComments({
    activeLayoutProposalSentiments
}) {
    return (
        <Box>
            {activeLayoutProposalSentiments.user_comments?.filter(obj => !obj.parent_id).map(obj => {
                return (
                    <ArticlesCard key={obj._id} sx={{ mb: 2 }}>

                        <ArticlesCardHeader sx={{ typography: 'body2' }}>
                            Commented on <b>{obj.populated_proposal.title}</b>
                        </ArticlesCardHeader>

                        <ArticlesCardBody sx={{ typography: 'body2', p: 2 }}>

                            <Box>
                                <Typography component="span" variant="body2">{format(new Date(obj.date), 'M/dd/yy')}</Typography>

                                <Box>{obj.comment}</Box>
                            </Box>

                        </ArticlesCardBody>

                        {/* TODO */}
                        <ArticlesCardFooter>
                            <Link prefetch={false} href={`${routes.PROPOSALS}/${obj.populated_proposal.url}?interaction_id=${obj._id}`}>
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
