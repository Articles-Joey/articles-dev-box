import ArticlesButton from '#root/src/components/UI/Button';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';

export default function MultiplayerTab({
    useStore,
    config
}) {

    return (
        <Box>

            {useStore && 
                <SocketSettings useStore={useStore} />
            }

            {config?.tabs?.Multiplayer?.children}

        </Box>
    )
}

function SocketSettings({ useStore }) {

    const serverUrl = useStore((state) => state.serverUrl);
    const setServerUrl = useStore((state) => state.setServerUrl);
    const connected = useStore((state) => state.connected);

    const connectSocket = useStore((state) => state.connectSocket);
    const disconnectSocket = useStore((state) => state.disconnectSocket);

    return (
        <Box
            sx={{
                mb: 3,
                '[data-bs-theme="dark"] &, [data-mui-color-scheme="dark"] &': {
                    color: '#fff',
                    '& .MuiInputLabel-root, & .MuiInputLabel-root.Mui-focused, & .MuiInputBase-input': {
                        color: '#fff',
                    },
                    '& .MuiFormHelperText-root': {
                        color: 'rgba(255, 255, 255, 0.7)',
                    },
                    '& .MuiInputBase-input::placeholder': {
                        color: '#fff',
                        opacity: 0.7,
                    },
                    '& .MuiOutlinedInput-notchedOutline, & .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline, & .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'rgba(255, 255, 255, 0.7)',
                    },
                },
            }}
        >

            <Box sx={{ mb: 1 }}>Status: <Chip size="small" color={connected ? 'success' : 'error'} label={connected ? 'Online' : 'Offline'} /></Box>
            <TextField
                label="Socket Server Host"
                type="text"
                value={serverUrl}
                onChange={(e) => setServerUrl(e.target.value)}
                fullWidth
                size="small"
                helperText="Edit this to connect to a different multiplayer host!"
            />

            <Box sx={{ mt: 3 }}>

                {connected ?
                    <ArticlesButton
                        onClick={() => {
                            disconnectSocket()
                        }}
                    >
                        Disconnect
                    </ArticlesButton>
                    :
                    <ArticlesButton
                        onClick={() => {
                            connectSocket()
                        }}
                    >
                        Connect
                    </ArticlesButton>
                }

            </Box>

        </Box>
    )

}
