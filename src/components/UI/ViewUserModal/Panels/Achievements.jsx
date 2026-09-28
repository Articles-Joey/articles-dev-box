// import ArticlesButton from "@/components/Articles/Button"
// import routes from "@/components/constants/routes"
// import Link from "next/link"

// import achievements, { achievement_tags } from 'components/constants/achievements'

// TODO
const achievements = []
import Box from '@mui/material/Box';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { ArticlesBadge, ArticlesCard, ArticlesCardBody } from '#root/src/components/UI/muiPrimitives';

export default function Achievements({
    activeLayoutProposalSentiments
}) {
    return (
        <Box>

            <ArticlesCard className="achievements">
                <ArticlesCardBody sx={{ p: 0 }}>
                    {achievements
                        // .filter(ach_obj => {
                        //     if (achievementFilter) {
                        //         return ach_obj?.tags?.includes(achievementFilter)
                        //     } else {
                        //         return ach_obj
                        //     }
                        // })
                        // .filter(ach_obj => {
                        //     if (achievementSearch) {
                        //         return ach_obj?.name?.toLowerCase().includes(achievementSearch?.toLowerCase())
                        //     } else {
                        //         return ach_obj
                        //     }
                        // })
                        .map(achievement =>
                            <Box key={achievement.name}>

                                <Box className="achievement" sx={{ width: 1, display: 'flex', alignItems: 'center' }}>

                                    <Box className="icon" sx={{ width: 50 }}>
                                        <EmojiEventsIcon />
                                    </Box>

                                    <Box className="details" sx={{ typography: 'body2', mr: 'auto' }}>
                                        <Box component="b" className="name">{achievement.name}</Box>
                                        <Box className="description" sx={{ mb: 1 }}>{achievement.description}</Box>
                                        <Box sx={{ typography: 'body2' }}>
                                            {achievement.tags?.map(item => <ArticlesBadge key={item} sx={{ bgcolor: 'grey.900', color: '#fff', border: 1 }}>{item}</ArticlesBadge>)}
                                        </Box>
                                    </Box>

                                    <Box className="icon" sx={{ borderLeft: 1, borderColor: 'grey.900' }}>

                                        <Box sx={{ textAlign: 'center', px: 3 }}>
                                            <CheckBoxOutlineBlankIcon />
                                        </Box>

                                    </Box>

                                </Box>

                            </Box>
                        )}
                </ArticlesCardBody>
            </ArticlesCard>

        </Box>
    )
}
