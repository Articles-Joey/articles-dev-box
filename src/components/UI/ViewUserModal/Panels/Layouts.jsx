// import { useState } from "react";

// import { format } from "date-fns"

import ArticlesButton from '#root/src/components/UI/Button';
import Link from '#root/src/components/UI/Link';
import { routes } from "#root/src/constants/routes";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { ArticlesCard, ArticlesCardBody, ArticlesCardFooter, articlesShadow } from '#root/src/components/UI/muiPrimitives';

// TODO - Add in
// import RenderLayoutItemLogo from "@/components/Layouts/RenderLayoutItemLogo";

// import ArticlesButton from "@/components/Articles/Button"
// import routes from "@/components/constants/routes"
// import Link from "next/link"
// import { useSelector } from "react-redux";

export default function Layouts({
    userLayoutsData,
    handleClose
}) {

    // TODO - Add back in
    const userReduxState = false

    return (
        <Box>
            
            {userLayoutsData?.map(layout => {

                return (
                    <ArticlesCard key={layout._id} sx={{ boxShadow: articlesShadow }}>
                        <ArticlesCardBody sx={{ py: 1, px: 2, lineHeight: 1.25, display: 'flex', alignItems: 'center' }}>

                            {/* <RenderLayoutItemLogo
                                layout={layout}
                                size={50}
                            /> */}

                            <Box sx={{ ml: 2 }}>

                                <Box>{layout.name}</Box>
                                <Typography variant="body2">Last Viewed: Never</Typography>

                            </Box>

                        </ArticlesCardBody>

                        <ArticlesCardFooter sx={{ display: 'flex', p: 1 }}>
                            {userReduxState._id !== layout.user_id &&
                                <ArticlesButton
                                    small
                                >
                                    <AddIcon fontSize="inherit" sx={{ mr: 0.5 }} />
                                    Follow
                                </ArticlesButton>
                            }
                            <Link
                                href={`${routes.HOME}/${layout.url}`}
                                // onClick={handleClose}
                            >
                                <ArticlesButton
                                    small
                                >
                                    <VisibilityIcon fontSize="inherit" sx={{ mr: 0.5 }} />
                                    View
                                </ArticlesButton>
                            </Link>
                        </ArticlesCardFooter>

                    </ArticlesCard>
                );

            })}
        </Box>
    )
}
