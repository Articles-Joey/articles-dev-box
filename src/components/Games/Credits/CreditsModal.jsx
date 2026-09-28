import { useState } from "react";

import ArticlesButton from '#root/src/components/UI/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import { ArticlesDialog, ArticlesDialogActions, ArticlesDialogContent, ArticlesDialogTitle } from '#root/src/components/UI/muiPrimitives';

/**
 * A modal component that displays game credits and links to a GitHub repository.
 * 
 * @param {Object} props - The component props.
 * @param {boolean} props.show - Controls whether the modal is visible.
 * @param {Function} props.setShow - Function to update the visibility of the modal.
 * @param {Function} props.useStore - Zustand store hook (currently unused in this component).
 * @param {string} props.owner - The GitHub repository owner's username.
 * @param {string} props.repo - The GitHub repository name.
 * @param {string} props.introText - Introductory text for the modal.
 * @param {Array} props.developers - List of developers.
 * @param {string} props.publisher - The publisher's name.

 * 
 * @returns {JSX.Element} The CreditsModal component.
 */
export default function CreditsModal({
    show,
    setShow,
    useStore,
    owner,
    repo,
    developers,
    publisher,
    introText,
    outroText,
}) {

    const [showModal, setShowModal] = useState(false);

    // const [tab, setTab] = useState('Graphics');

    return (
        <ArticlesDialog
            open={show}
            onClose={() => setShow(false)}
        >

            <ArticlesDialogTitle onClose={() => setShow(false)}>Game Credits</ArticlesDialogTitle>

            <ArticlesDialogContent sx={{ p: 3 }}>

                {introText &&
                    <Box sx={{ mb: 3 }}>{introText}</Box>
                }

                {developers ?
                    <Box />
                    :
                    <Box>
                        <Typography variant="subtitle1" sx={{ mb: 2 }}>
                            Developer: Articles Joey
                        </Typography>

                        <Box component="a"
                            href="https://github.com/articles-joey"
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{ display: 'inline-block', mb: 4, textDecoration: 'none' }}
                        >
                            <ArticlesButton
                                size=""
                            >
                                <GitHubIcon fontSize="inherit" sx={{ mr: 1 }} />
                                <Box component="span">View on Github</Box>
                            </ArticlesButton>
                        </Box>
                    </Box>
                }

                {publisher ?
                    <Box />
                    :
                    <Box>
                        <Typography variant="subtitle1" sx={{ mb: 2 }}>
                            Publisher: Articles Media
                        </Typography>

                        <Box component="a"
                            href="https://github.com/Articles-Media"
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{ display: 'inline-block', mb: 4, textDecoration: 'none' }}
                        >
                            <ArticlesButton size="">
                                <LanguageIcon fontSize="inherit" sx={{ mr: 1 }} />
                                <Box component="span">View Website</Box>
                            </ArticlesButton>
                        </Box>
                    </Box>
                }

                {(
                    (owner && repo)
                    ||
                    (process.env.NEXT_PUBLIC_OWNER && process.env.NEXT_PUBLIC_REPO)
                ) &&
                    <Box sx={{ mb: 3 }}>

                        <Typography variant="subtitle1" sx={{ mb: 2 }}>
                            Attributions:
                        </Typography>

                        <Box component="a"
                            href={`https://github.com/${owner || process.env.NEXT_PUBLIC_OWNER}/${repo || process.env.NEXT_PUBLIC_REPO}/blob/main/README.md#attributions`}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{ textDecoration: 'none' }}
                        >
                            {/* View on GitHub */}
                            <ArticlesButton>
                                <GitHubIcon fontSize="inherit" sx={{ mr: 0.75 }} />
                                View on GitHub
                            </ArticlesButton>
                        </Box>
                    </Box>
                }

                {outroText &&
                    <Box sx={{ mb: 3 }}>{outroText}</Box>
                }

            </ArticlesDialogContent>

            <ArticlesDialogActions>

                <Box>

                    {/* <ArticlesButton
                        variant="outline-dark"
                        onClick={() => {
                            setShow(false)
                        }}
                    >
                        Close
                    </ArticlesButton> */}

                </Box>

                <ArticlesButton
                    variant="outline-dark"
                    onClick={() => {
                        setShow(false)
                    }}
                >
                    Close
                </ArticlesButton>

            </ArticlesDialogActions>

        </ArticlesDialog>
    );
}
