import { useEffect, useState } from 'react'
import { format } from 'date-fns';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import RefreshIcon from '@mui/icons-material/Refresh';
import SettingsIcon from '@mui/icons-material/Settings';

import ViewUserModal from '#root/src/components/UI/ViewUserModal/ViewUserModal';
import ArticlesSwitch from '#root/src/components/UI/ArticlesSwitch';
import ArticlesButton from '#root/src/components/UI/Button';

import useGameScoreboard from '#root/src/hooks/Games/useGameScoreboard';

import {
    ArticlesBadge,
    ArticlesCard,
    ArticlesCardBody,
    ArticlesCardFooter,
    ArticlesCardHeader,
    ArticlesDialog,
    ArticlesDialogActions,
    ArticlesDialogContent,
    ArticlesDialogTitle,
} from '#root/src/components/UI/muiPrimitives';

function GameScoreboard({
    game,
    metric,
    metrics,
    reloadScoreboard,
    setReloadScoreboard,
    prepend,
    append,
    append_score_text = '',
}) {

    const [showSettings, setShowSettings] = useState(false)

    // const [scoreboard, setScoreboard] = useState([])

    const [visible, setVisible] = useState(false)

    const [activeMetric, setActiveMetric] = useState(false)

    const {
        data: scoreboard,
        isLoading: scoreboardIsLoading,
        mutate: scoreboardMutate
    } = useGameScoreboard({
        game: game
    })

    useEffect(() => {

        if (reloadScoreboard) {
            setReloadScoreboard(false)
            // loadScoreboard()
            scoreboardMutate()
        }

    }, [reloadScoreboard])

    return (
        <Box
            className="scoreboard"
            sx={(theme) => ({
                mt: 2,
                maxWidth: 300,
                width: 1,
                mb: 2,
                [theme.breakpoints.up(992)]: {
                    mt: 0,
                    mb: 0,
                    display: 'block',
                    position: 'absolute',
                    left: 16,
                    top: '50%',
                    transform: 'translateY(-50%)',
                },
            })}
        >

            <ArticlesDialog open={showSettings} onClose={() => setShowSettings(false)}>

                <ArticlesDialogTitle>Scoreboard Settings</ArticlesDialogTitle>

                <ArticlesDialogContent>

                    <Box
                        sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}
                        onClick={() => setVisible(!visible)}
                    >

                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75 }}>
                            <EmojiEventsIcon fontSize="small" />
                            <Box component="span">Join Scoreboard?</Box>
                        </Box>

                        <ArticlesSwitch
                            checked={visible}
                        />

                    </Box>

                </ArticlesDialogContent>

                <ArticlesDialogActions>

                    <ArticlesButton
                        variant="articles"
                        onClick={() => {
                            setShowSettings(false)
                        }}
                    >
                        Close
                    </ArticlesButton>

                </ArticlesDialogActions>

            </ArticlesDialog>

            {prepend &&
                <Box className="prepend-container">
                    {prepend}
                </Box>
            }

            <ArticlesCard sx={(theme) => ({ mb: 3, [theme.breakpoints.up(992)]: { mb: 0 } })}>

                <ArticlesCardHeader sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

                    <span>{game} Scoreboard</span>

                    <ArticlesButton
                        onClick={() => {
                            scoreboardMutate()
                        }}
                        small
                    >
                        <RefreshIcon fontSize="small" />
                    </ArticlesButton>

                </ArticlesCardHeader>

                <ArticlesCardBody sx={{ p: 0 }}>

                    {metrics?.length > 1 &&
                        <Box sx={{ display: 'flex', borderBottom: 1, borderColor: 'divider', p: 2 }}>
                            {metrics.map((m, i) =>
                                <ArticlesBadge
                                    key={i}
                                    onClick={() => setActiveMetric(m?.label)}
                                    sx={{
                                        bgcolor: '#000',
                                        color: '#fff',
                                        mr: 2,
                                        opacity: activeMetric == m?.label ? 1 : 0.5,
                                        cursor: 'pointer'
                                    }}
                                >
                                    {m?.label}
                                </ArticlesBadge>
                            )}
                        </Box>
                    }

                    {scoreboardIsLoading &&
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, p: 2 }}>
                            <CircularProgress size={28} />
                            <Box>Loading...</Box>
                        </Box>
                    }

                    {(
                        (scoreboard?.length || 0) == 0
                        &&
                        !scoreboardIsLoading
                    ) &&
                        <Typography variant="body2" sx={{ p: 2 }}>No scores yet</Typography>
                    }

                    {scoreboard?.length > 0 && scoreboard?.map((doc, i) =>
                        <Box key={doc._id} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderBottom: 1, borderColor: 'divider', p: 2 }}>

                            <Box sx={{ display: 'flex', justifyContent: 'space-between', lineHeight: 1.25 }}>

                                <Box sx={{ display: 'flex' }}>

                                    <Typography variant="h5" sx={{ mb: 0, mr: 3 }}>{i + 1}</Typography>

                                    <Box sx={{ lineHeight: 1.25 }}>

                                        <ViewUserModal
                                            populated_user={doc.populated_user}
                                            user_id={doc.user_id}
                                        />

                                    </Box>

                                </Box>

                                <Typography variant="h5" sx={{ mb: 0 }}>
                                    {doc.score || doc.total}{append_score_text}
                                </Typography>

                            </Box>

                            {(doc.last_play && doc.public_last_play) && <Typography variant="caption" sx={{ mt: 1, fontSize: '0.75rem' }}>Played: {format(new Date(doc.last_play), 'MM/d/yy hh:mmaa')}</Typography>}

                        </Box>
                    )}

                </ArticlesCardBody>

                <ArticlesCardFooter sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

                    <Typography variant="body2">Play to get on the board!</Typography>

                    <ArticlesButton
                        small
                        onClick={() => {
                            setShowSettings(true)
                        }}
                    >
                        <SettingsIcon fontSize="small" />
                    </ArticlesButton>

                </ArticlesCardFooter>

            </ArticlesCard>

            <Box className="append-container">
                {append}
            </Box>

        </Box>
    )
}

export default GameScoreboard;
