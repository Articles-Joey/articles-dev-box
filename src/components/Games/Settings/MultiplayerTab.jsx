import { Form } from "react-bootstrap";

import ArticlesButton from '#root/src/components/UI/Button';

export default function MultiplayerTab({
    useStore,
    config
}) {

    const serverUrl = useStore((state) => state.serverUrl);
    const setServerUrl = useStore((state) => state.setServerUrl);
    const connected = useStore((state) => state.connected);

    const connectSocket = useStore((state) => state.connectSocket);
    const disconnectSocket = useStore((state) => state.disconnectSocket);

    return (
        <div className="">

            {/* <div>
                Test: {socketServerHost ? 'test' : 'no'}
            </div> */}

            <Form.Label className="mb-0">
                <div>Status: <span className={`badge ${connected ? 'bg-success' : 'bg-danger'}`}>{connected ? 'Online' : 'Offline'}</span></div>
                Socket Server Host
            </Form.Label>
            <Form.Control
                type="text"
                value={serverUrl}
                onChange={(e) => setServerUrl(e.target.value)}
            />
            <Form.Label className="mb-0">Edit this to connect to a different multiplayer host!</Form.Label>

            <div className="mt-3">

                {connected ?
                    <ArticlesButton
                        className=""
                        onClick={() => {
                            disconnectSocket()
                        }}
                    >
                        Disconnect
                    </ArticlesButton>
                    :
                    <ArticlesButton
                        className=""
                        onClick={() => {
                            connectSocket()
                        }}
                    >
                        Connect
                    </ArticlesButton>
                }

            </div>

        </div>
    )
}