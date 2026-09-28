import articlesGames from "#root/src/constants/articlesGames.js";
import ArticlesButton from "#root/src/components/UI/Button";
import { useState } from "react";
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import CloseIcon from '@mui/icons-material/Close';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

export default function GamesDropdown({}) {

    const [gameSearch, setGameSearch] = useState("");
    const [anchorEl, setAnchorEl] = useState(null);

    return (
        <>
            <ArticlesButton
                small
                active={Boolean(anchorEl)}
                aria-label="Browse games"
                aria-haspopup="menu"
                aria-controls={anchorEl ? 'games-menu' : undefined}
                aria-expanded={anchorEl ? 'true' : undefined}
                onClick={(event) => setAnchorEl(event.currentTarget)}
            >
                <SportsEsportsIcon fontSize="inherit" />
                <ArrowDropUpIcon fontSize="inherit" sx={{ ml: 0.25, mr: -0.25 }} />
            </ArticlesButton>

            <Menu
                id="games-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={() => setAnchorEl(null)}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                transformOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                slotProps={{
                    paper: {
                        sx: {
                            '--articles-games-menu-background-color': '#fff',
                            '--articles-games-menu-font-color': '#212529',
                            '--articles-games-menu-muted-color': 'rgba(33, 37, 41, 0.7)',
                            '--articles-games-menu-border-color': 'rgba(0, 0, 0, 0.35)',
                            '--articles-games-menu-hover-color': 'rgba(0, 0, 0, 0.08)',
                            width: 280,
                            maxWidth: 'calc(100vw - 32px)',
                            bgcolor: 'var(--articles-games-menu-background-color)',
                            color: 'var(--articles-games-menu-font-color)',
                            backgroundImage: 'none',
                            '[data-bs-theme="dark"] &, [data-mui-color-scheme="dark"] &': {
                                '--articles-games-menu-background-color': '#212529',
                                '--articles-games-menu-font-color': '#fff',
                                '--articles-games-menu-muted-color': 'rgba(255, 255, 255, 0.7)',
                                '--articles-games-menu-border-color': 'rgba(255, 255, 255, 0.7)',
                                '--articles-games-menu-hover-color': 'rgba(255, 255, 255, 0.1)',
                            },
                        },
                    },
                }}
            >

                <Box sx={{ px: 1, mb: 1, display: 'flex', alignItems: 'center' }}>
                    <TextField
                        type="text"
                        placeholder="Search Games"
                        size="small"
                        fullWidth
                        value={gameSearch}
                        onChange={(e) => {
                            setGameSearch(e.target.value);
                        }}
                        sx={{
                            '& .MuiInputBase-input': {
                                color: 'var(--articles-games-menu-font-color)',
                            },
                            '& .MuiInputBase-input::placeholder': {
                                color: 'var(--articles-games-menu-muted-color)',
                                opacity: 1,
                            },
                            '& .MuiOutlinedInput-notchedOutline, & .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline, & .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                borderColor: 'var(--articles-games-menu-border-color)',
                            },
                        }}
                    />
                    {gameSearch && (
                        <IconButton
                            aria-label="Clear game search"
                            size="small"
                            sx={{ ml: 1, color: 'inherit' }}
                            onClick={() => setGameSearch("")}
                        ><CloseIcon fontSize="small" /></IconButton>
                    )}
                </Box>

                <Box
                    sx={{
                        maxHeight: "200px",
                        overflowY: "auto",
                    }}
                >
                    {articlesGames
                        .filter((game) =>
                            game.name.toLowerCase().includes(gameSearch.toLowerCase())
                        ).length > 0 ? (
                        articlesGames
                            .filter((game) =>
                                game.name.toLowerCase().includes(gameSearch.toLowerCase())
                            )
                            .map((game, index) => (
                                <MenuItem
                                    key={index}
                                    component="a"
                                    rel="noopener noreferrer"
                                    href={`${game.link}?utm_source=${window.location.hostname}&utm_medium=GamesDropdown`}
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        color: 'inherit',
                                        '&:hover, &.Mui-focusVisible': {
                                            bgcolor: 'var(--articles-games-menu-hover-color)',
                                        },
                                    }}
                                >
                                    <Box component="img"
                                        src={game.image}
                                        alt={game.name}
                                        loading="lazy"
                                        sx={{
                                            width: "30px",
                                            height: "30px",
                                            objectFit: "cover",
                                            marginRight: "10px",
                                        }}
                                    />
                                    {game.name}
                                </MenuItem>
                            ))
                    ) : (
                        <Box sx={{ px: 3, py: 1, typography: 'body2', textAlign: 'center', color: 'var(--articles-games-menu-muted-color)' }}>
                            No results found
                        </Box>
                    )}
                </Box>

            </Menu>
        </>
    )
}
