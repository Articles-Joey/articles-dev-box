"use client"

import useMainSiteStatus from "#root/src/hooks/useMainSiteStatus";
import useAuthSiteStatus from "#root/src/hooks/useAuthSiteStatus";

import classNames from "classnames";
import { lazy, memo, useState } from "react";
import React, { Suspense } from 'react';

// import StatusModal from "./StatusModal";
const StatusModal = lazy(() => import('./StatusModal'));

function GlobalBody(props) {

    const [statusModal, setStatusModal] = useState(false);

    const {
        data: mainSiteStatus,
        error: mainSiteStatusError,
        isLoading: mainSiteStatusLoading,
        mutate: mainSiteStatusMutate
    } = useMainSiteStatus({
        disable: process.env.NODE_ENV !== "development"
    });

    const {
        data: authSiteStatus,
        error: authSiteStatusError,
        isLoading: authSiteStatusLoading,
        mutate: authSiteStatusMutate
    } = useAuthSiteStatus({
        disable: process.env.NODE_ENV !== "development"
    });

    return (
        <>

            <link
                rel="stylesheet"
                href={`https://cdn.articles.media/fonts/fontawesome/css/all.min.css`}
            />

            {process.env.NODE_ENV === 'development' &&
                <>
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
                                background-color: yellow;
                                color: #FFFFFF;
                                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                                animation: grow-shrink 2s ease-in;
                                border: 4px solid red;
                                cursor: pointer;
                            }
                            .articles-global-body.main-connected {
                                background-color: green;
                            }
                            .articles-global-body.auth-connected {
                                border-color: blue;
                            }  
                        `}
                    </style>

                    <div
                        onClick={() => {
                            setStatusModal(true)
                        }}
                        className={classNames(
                            `articles-global-body`,
                            {
                                "main-connected": mainSiteStatus,
                                "auth-connected": authSiteStatus
                            }
                        )}
                    >

                        <div className="content">
                            <i className="fas fa-thumbs-up"></i>
                        </div>

                    </div>

                    {statusModal &&
                        <Suspense>
                            <StatusModal
                                show={statusModal}
                                setShow={setStatusModal}
                            />
                        </Suspense>
                    }
                </>
            }

        </>
    );

}

export default memo(GlobalBody);