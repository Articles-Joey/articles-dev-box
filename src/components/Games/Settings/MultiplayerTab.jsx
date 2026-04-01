import { Form } from "react-bootstrap";

import ArticlesButton from '#root/src/components/UI/Button';

export default function MultiplayerTab({
    useStore
}) {

    const socketServerHost = useStore((state) => state.socketServerHost);
    const setSocketServerHost = useStore((state) => state.setSocketServerHost);

    return (
        <div className="p-2">

            {/* <div>
                Test: {socketServerHost ? 'test' : 'no'}
            </div> */}

            <Form.Label className="mb-0">Socket Server Host</Form.Label>
            <Form.Control
                type="text"
                value={socketServerHost}
                onChange={(e) => setSocketServerHost(e.target.value)}
            />
            <Form.Label className="mb-0">Edit this to connect to a different multiplayer host!</Form.Label>

            <div className="mt-3">
                <ArticlesButton
                    className="mb-1"
                >
                    Retry
                </ArticlesButton>
                <div>Status: <span className="badge bg-danger">Offline</span></div>
            </div>

        </div>
    )
}