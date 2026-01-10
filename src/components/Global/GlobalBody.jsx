"use client"

import { memo } from "react";

function GlobalBody(props) {

    return (
        <>

            {process.env.NODE_ENV === 'development' &&
                <style>
                    {`                        
                        @keyframes grow-shrink {
                            0% { transform: translateY(-50px); }
                            50% { transform: translateY(0px); }
                            100% { transform: translateY(-50px); }
                        }
                        .articles-global-body {
                            transform: translateY(-40px);
                            z-index: 1055!important;
                            position: absolute;
                            top: 0;
                            left: 0;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            width: 50px;
                            height: 50px;
                            margin: 0;
                            padding: 0;
                            background-color: green;
                            color: #FFFFFF;
                            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                            animation: grow-shrink 2s ease-in;
                    }
                `}
                </style>
            }

            <div className="articles-global-body">

                <link
                    rel="stylesheet"
                    href={`https://cdn.articles.media/fonts/fontawsome/css/all.min.css`}
                />

                <div className="content">
                    <i className="fas fa-thumbs-up"></i>
                </div>

            </div>

        </>
    );

}

export default memo(GlobalBody);