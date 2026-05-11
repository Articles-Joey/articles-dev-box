import ArticlesButton from "../UI/Button";

/**
 * NicknameInput component for managing and displaying the user's nickname.
 *
 * @param {Object} props
 * @param {function} props.useStore - Zustand store hook for accessing nickname state and actions.
 * @returns {JSX.Element|null} The rendered NicknameInput component or null if useStore is not provided.
 */
export default function NicknameInput({
    useStore,
    config,
}) {

    const _hasHydrated = useStore((state) => state._hasHydrated);
    const nickname = useStore((state) => state.nickname);
    const setNickname = useStore((state) => state.setNickname);
    const randomNickname = useStore((state) => state.randomNickname);

    if (!useStore) {
        return null;
    }

    return (
        <div className="d-flex w-100">
            {config?.PreComponent &&
                <>
                    {config.PreComponent}
                </>
            }
            <div className="flex-grow-1">

                <div className="form-group articles mb-0">
                    <label htmlFor="nickname">Nickname</label>
                    <div className="d-flex align-items-center">
                        <input
                            type="text"
                            value={_hasHydrated ? nickname : ''}
                            disabled={!_hasHydrated}
                            id="nickname"
                            name="nickname"
                            placeholder="Enter your nickname"
                            onChange={(e) => {
                                setNickname(e.target.value)
                            }}
                            className={`form-control form-control-sm`}
                        />
                        <ArticlesButton
                            small
                            className=""
                            onClick={() => {
                                randomNickname()
                            }}
                        >
                            <i className="fad fa-random"></i>
                        </ArticlesButton>
                    </div>
                </div>

                <div className='mt-1' style={{ fontSize: '0.8rem' }}>Visible to all players</div>

            </div>
        </div>
    )

}