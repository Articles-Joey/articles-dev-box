"use client";
import ArticlesButton from "#root/src/components/UI/Button";
import { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import PersonIcon from '@mui/icons-material/Person';

export default function SignInButton({
    className,
    id,
    text,
    size = "sm",
}) {

    const [isMounted, setIsMounted] = useState(false);

    const baseLink = process.env.NODE_ENV === "development" ? "http://localhost:3012" : "https://accounts.articles.media";

    const [finalLink, setFinalLink] = useState(`${baseLink}/login`);

    useEffect(() => {
        setIsMounted(true);
        const currentPath = window.location.pathname;
        const searchParams = window.location.search;
        const fullRedirect = encodeURIComponent(window.location.origin + currentPath + searchParams);
        setFinalLink(`${baseLink}/login?redirect=${fullRedirect}&type=subdomain`);
    }, [baseLink]);

    return (
        <Box
            component="a"
            href={finalLink}
            rel="noopener noreferrer"
            sx={{ display: 'block', width: 1, textDecoration: 'none' }}
        >
            <ArticlesButton
                className={className}
                id={id}
                size={size}
                sx={{
                    width: 1,
                    zIndex: 10,
                    position: "relative",
                }}
                onClick={() => {                                    
    
                }}
            >
                <PersonIcon fontSize="inherit" sx={{ mr: 0.75 }} />
                {text || "Sign In"}
            </ArticlesButton>
        </Box>
    );
}
