import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';

// import { useSelector, useDispatch } from 'react-redux'

// import { togglePrivacyMode } from "@/redux/actions/siteActions";
// import ArticlesButton from './Articles/Button';

export default function IsDev({className, noOutline, children, inline}) {

    // const dispatch = useDispatch()

    // const userReduxState = useSelector((state) => state.auth.user_details)
    const userReduxState = false

    const [ isMounted, setIsMounted ] = useState()
    useEffect(() => {
        setIsMounted(true)
    }, [])

    // If you just want to wrap the sensitive info instead of conditional rendering on page with privacy_mode selector
    // I think this is better but you can do either way
    if (children && userReduxState?.roles?.isDev && isMounted) {
        return (
            <Box
                className={`is-dev-content ${noOutline ? 'no-outline' : ''} ${className || ''}`}
                sx={{ display: inline ? 'inline-block' : 'block' }}
            >
                {children}
            </Box>
        )
    }

    return

}
