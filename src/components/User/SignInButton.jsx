"use client";
import ArticlesButton from "#root/src/components/UI/Button";
import { useEffect, useState } from "react";

export default function SignInButton({
    className,
    id,
    text
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
        <a
            href={finalLink}
            // target="_blank"
            rel="noopener noreferrer"
        >
            <ArticlesButton
                // ref={el => elementsRef.current[6] = el}
                className={`${className} w-100`}
                id={id}
                small
                style={{
                    zIndex: 10,
                    position: "relative",
                }}
                onClick={() => {                                    
    
                }}
            >
                <i className="fad fa-user"></i>
                {text || "Sign In"}
            </ArticlesButton>
        </a>
    );
}   