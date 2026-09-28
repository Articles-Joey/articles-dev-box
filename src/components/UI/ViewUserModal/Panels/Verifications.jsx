// import { useState } from "react";

// import { format } from "date-fns"

// import ArticlesButton from '#root/src/components/UI/Button';
import ArticlesDate from '#root/src/components/UI/ArticlesDate';
// import Link from '#root/src/components/UI/Link';
// import { routes } from "#root/src/constants/routes";

// import ArticlesButton from "@/components/Articles/Button"
// import ArticlesDate from "@/components/Articles/Date"
// import routes from "@/components/constants/routes"
// import Link from "next/link"
import ViewUserModal from '#root/src/components/UI/ViewUserModal/ViewUserModal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { ArticlesCard, ArticlesCardBody, ArticlesCardHeader } from '#root/src/components/UI/muiPrimitives';

export default function Verifications({
    activeLayoutProposalSentiments,
    userData
}) {
    return (
        <Box>

            <Box>
                {userData?.verified?.verified_methods?.map((item, item_i) => {

                    if (Object.keys(item)?.length > 0) {
                        return (
                            <ArticlesCard
                                key={item_i}
                                className="object"
                                sx={{ mb: 2 }}
                            >
                                <ArticlesCardHeader>
                                    {item?.method_name}
                                </ArticlesCardHeader>
                                <ArticlesCardBody sx={{ p: 2 }}>
                                    <Box sx={{ typography: 'body2' }}>
                                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                            <Box component="span" sx={{ mr: 2 }}>Approved On: </Box><ArticlesDate date={item.approved_date} />
                                        </Box>
                                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                            <Box component="span" sx={{ mr: 2 }}>Approved By: </Box><ViewUserModal user_id={item.approved_by} dangerousPopulate />
                                        </Box>
                                    </Box>
                                </ArticlesCardBody>
                            </ArticlesCard>
                        )
                    } else {
                        return (
                            <Box
                                key={item_i}
                                className='single'
                            >
                                {item}
                            </Box>
                        )
                    }

                })}
            </Box>

        </Box>
    )
}
