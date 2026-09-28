import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';

import ArticlesButton from '#root/src/components/UI/Button';
import Link from '#root/src/components/UI/Link';
import { routes } from '#root/src/constants/routes';
import {
    ArticlesBadge,
    ArticlesCard,
    ArticlesCardBody,
    ArticlesCardFooter,
    ArticlesCardHeader,
    articlesShadow,
} from '#root/src/components/UI/muiPrimitives';

const percentage = (value, total) => total ? Math.min(100, Math.max(0, (value / total) * 100)) : 0;

function ProgressWithLabel({ value, animated = false }) {
    return (
        <Box sx={{ position: 'relative', mb: 2, boxShadow: articlesShadow, borderRadius: 1, overflow: 'hidden' }}>
            <LinearProgress
                variant="determinate"
                value={value}
                sx={{
                    height: 20,
                    bgcolor: 'action.disabledBackground',
                    '& .MuiLinearProgress-bar': {
                        bgcolor: 'grey.900',
                        ...(animated && {
                            backgroundImage: 'linear-gradient(45deg, rgba(255,255,255,.15) 25%, transparent 25%, transparent 50%, rgba(255,255,255,.15) 50%, rgba(255,255,255,.15) 75%, transparent 75%, transparent)',
                            backgroundSize: '1rem 1rem',
                            animation: 'articles-progress-stripes 1s linear infinite',
                        }),
                    },
                    '@keyframes articles-progress-stripes': {
                        from: { backgroundPositionX: '1rem' },
                        to: { backgroundPositionX: 0 },
                    },
                }}
            />
            <Typography
                variant="caption"
                sx={{ position: 'absolute', inset: 0, display: 'grid', placeItems: 'center', color: '#fff', fontWeight: 700 }}
            >
                {value.toFixed(2)}%
            </Typography>
        </Box>
    );
}

function SegmentedProgress({ disagree, needsWork, agree }) {
    return (
        <Box sx={{ display: 'flex', height: 10, mb: 2, boxShadow: articlesShadow, overflow: 'hidden', bgcolor: 'action.disabledBackground' }}>
            <Box sx={{ width: `${disagree}%`, bgcolor: 'error.main' }} />
            <Box sx={{ width: `${needsWork}%`, bgcolor: 'warning.main' }} />
            <Box sx={{ width: `${agree}%`, bgcolor: 'success.main' }} />
        </Box>
    );
}

export default function ProposalsStance({
    activeLayoutProposalSentiments,
    populated_user,
    usersProposalSentiments,
    setShowFullStanceDetails,
    showFullStanceDetails,
    userData
}) {
    const userReduxState = null;

    return (
        <Box
            sx={(theme) => ({
                display: 'grid',
                gridTemplateColumns: '1fr',
                gap: 1,
                mb: 2,
                [theme.breakpoints.up(992)]: { gridTemplateColumns: 'repeat(2, minmax(0, 1fr))' },
            })}
        >
            {[
                {
                    name: `${populated_user?.display_name || userData.display_name}`,
                    data: activeLayoutProposalSentiments || {}
                },
                {
                    name: 'You',
                    data: usersProposalSentiments || {}
                }
            ].map(item => {
                if (item.name === 'You' && !userReduxState?._id) {
                    return (
                        <ArticlesCard key={item.name} sx={{ height: 1 }}>
                            <ArticlesCardHeader><b>{item.name}</b></ArticlesCardHeader>
                            <ArticlesCardBody sx={{ p: 2 }}>
                                <Typography variant="body2">Login or create an account to compare your political stance with this user!</Typography>
                            </ArticlesCardBody>
                            <ArticlesCardFooter sx={{ display: 'flex', gap: 1 }}>
                                <Link href={routes.SIGN_IN}><ArticlesButton small>Sign In</ArticlesButton></Link>
                                <Link href={routes.SIGN_UP}><ArticlesButton small>Sign Up</ArticlesButton></Link>
                            </ArticlesCardFooter>
                        </ArticlesCard>
                    );
                }

                const sentiments = item.data?.user_sentiments || [];
                const fundamentals = item.data?.fundamental || [];
                const fundamentalSentiments = sentiments.filter((sentiment) =>
                    fundamentals.some((proposal) => proposal._id === sentiment.proposal_id)
                );
                const fundamentalAnswered = fundamentals.filter((proposal) =>
                    sentiments.some((sentiment) => sentiment.proposal_id === proposal._id)
                ).length;
                const count = (status, source = sentiments) => source.filter((sentiment) => sentiment.sentiment_status === status).length;
                const fundamentalTotal = fundamentals.length;
                const total = item.data?.total || 0;

                return (
                    <ArticlesCard key={item.name}>
                        <ArticlesCardHeader onClick={() => console.log(item.data)} sx={{ cursor: 'pointer' }}>
                            <b>{item.name}</b>
                        </ArticlesCardHeader>

                        <ArticlesCardBody sx={{ py: 2, px: 2, typography: 'body2' }}>
                            <Typography variant="body2">Fundamental: {fundamentalAnswered}/{fundamentalTotal}</Typography>

                            <ProgressWithLabel value={percentage(fundamentalAnswered, fundamentalTotal)} />
                            <SegmentedProgress
                                disagree={percentage(count('Disagree', fundamentalSentiments), fundamentalTotal)}
                                needsWork={percentage(count('Needs Work', fundamentalSentiments), fundamentalTotal)}
                                agree={percentage(count('Agree', fundamentalSentiments), fundamentalTotal)}
                            />

                            <Box>Disagree: {count('Disagree', fundamentalSentiments)}</Box>
                            <Box>Needs Work: {count('Needs Work', fundamentalSentiments)}</Box>
                            <Box sx={{ mb: 2 }}>Agree: {count('Agree', fundamentalSentiments)}</Box>

                            {!showFullStanceDetails && (
                                <ArticlesBadge
                                    onClick={() => setShowFullStanceDetails(true)}
                                    sx={{
                                        bgcolor: 'var(--articles-secondary-color, #f9edcd)',
                                        boxShadow: articlesShadow,
                                        cursor: 'pointer',
                                        '&:hover': { filter: 'brightness(0.95)' },
                                    }}
                                >
                                    View More
                                </ArticlesBadge>
                            )}

                            {showFullStanceDetails && (
                                <>
                                    <Divider sx={{ my: 2 }} />

                                    <Box sx={{ mb: 2 }}>
                                        <Typography variant="body2">All: {sentiments.length}/{total}</Typography>
                                        <ProgressWithLabel value={percentage(sentiments.length, total)} animated />
                                        <SegmentedProgress
                                            disagree={percentage(count('Disagree'), total)}
                                            needsWork={percentage(count('Needs Work'), total)}
                                            agree={percentage(count('Agree'), total)}
                                        />

                                        <Box>Disagree: {count('Disagree')}</Box>
                                        <Box>Needs Work: {count('Needs Work')}</Box>
                                        <Box sx={{ mb: 2 }}>Agree: {count('Agree')}</Box>
                                    </Box>

                                    <Divider sx={{ my: 2 }} />

                                    <Box sx={{ display: 'grid', gridTemplateColumns: '3fr 1fr', rowGap: 0.5 }}>
                                        <Box>Comments</Box>
                                        <Box component="b">{item.data?.user_comments?.length || 0}</Box>
                                        <Box>Submissions</Box>
                                        <Box component="b">{item.data?.user_submissions || 0}</Box>
                                    </Box>
                                </>
                            )}
                        </ArticlesCardBody>
                    </ArticlesCard>
                );
            })}
        </Box>
    );
}
