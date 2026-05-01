import classNames from "classnames";
import ArticlesButton from "#root/src/components/UI/Button";

export default function MobileMenu({
    useStore,
    LeftPanelContent,
    menuBarStyle,
}) {

    const showMenu = useStore(state => state.showMenu);
    const setShowMenu = useStore(state => state.setShowMenu);

    // const playerLocation = useGameStore(state => state.playerLocation);

    return (
        <>
            <div 
                // className="menu-bar card card-articles p-1 justify-content-center"
                className={
                    classNames(
                        "menu-bar",
                        {
                            'card card-articles p-1 justify-content-center': menuBarStyle == "Bar",
                            [menuBarStyle.replaceAll(" ", "_")]: menuBarStyle
                        }
                    )
                }
            >

                <div className='flex-header align-items-center'>

                    <ArticlesButton
                        small
                        active={showMenu}
                        onClick={() => {
                            setShowMenu(!showMenu)
                        }}
                        className={"d-flex"}
                    >
                        <i className="fad fa-bars"></i>
                        <span className="text">Menu</span>
                    </ArticlesButton>

                    {/* <div>
                        Y: {(playerLocation?.y || 0)}
                    </div> */}

                </div>

            </div>

            <div
                className={`mobile-menu ${showMenu && 'show'}`}
                onClick={() => setShowMenu(false)}
                style={{
                    ...(menuBarStyle == "Bar" && {
                        bottom: "50px"
                    }),
                    ...(menuBarStyle == "Corner Button" && {
                        bottom: "0px"
                    })
                }}
            >
                <div
                    style={{
                        maxWidth: '300px'
                    }}
                    className='mobile-menu-container'
                    onClick={(e) => e.stopPropagation()}
                >

                    {LeftPanelContent && <LeftPanelContent
                    // {...panelProps}
                    />}

                </div>
            </div>
        </>
    )
}