import useMainSiteStatus from "#root/src/hooks/useMainSiteStatus";
import useAuthSiteStatus from "#root/src/hooks/useAuthSiteStatus";
import classNames from 'classnames';

export default function ArticlesDevStatusBadge({
    useStore
}) {

    const {
        data: mainSiteStatus,
        error: mainSiteStatusError,
        isLoading: mainSiteStatusLoading,
        mutate: mainSiteStatusMutate
    } = useMainSiteStatus({
        disable: (
            process.env.NODE_ENV !== "development"
            ||
            process.env.NEXT_PUBLIC_ENABLE_ARTICLES === "false"
        )
    });

    const {
        data: authSiteStatus,
        error: authSiteStatusError,
        isLoading: authSiteStatusLoading,
        mutate: authSiteStatusMutate
    } = useAuthSiteStatus({
        disable: (
            process.env.NODE_ENV !== "development"
            ||
            process.env.NEXT_PUBLIC_ENABLE_ARTICLES === "false"
        )
    });

    const showDevStatusModal = useStore((state) => state.showDevStatusModal)
    const setShowDevStatusModal = useStore((state) => state.setShowDevStatusModal)

    return (
        <>
            <style>
                {`                        
                            @keyframes grow-shrink {
                                0% { transform: translateY(-50px); }
                                50% { transform: translateY(0px); }
                                100% { transform: translateY(-50px); }
                            }
                            .articles-dev-status {
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
                            .articles-dev-status.main-connected {
                                background-color: green;
                            }
                            .articles-dev-status.auth-connected {
                                border-color: blue;
                            }  
                        `}
            </style>
            <div
                onClick={() => {
                    setShowDevStatusModal(true)
                }}
                className={classNames(
                    `articles-dev-status`,
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
        </>
    )

}