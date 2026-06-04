// React way of using getAssetSource, allows override via useStore value if needed
// Uses process.env.NEXT_PUBLIC_MODEL_SOURCE by default but can be overridden by passing a useStore function that allows override via Zustand store via setModelSource

export default function useAssetSource(
    path, 
    useStore
) {

    const source = useStore(state => state.modelSource)

    switch (source) {
        case 'CDN':
            return `${process.env.NEXT_PUBLIC_CDN}games/${process.env.NEXT_PUBLIC_GAME_NAME}/public/${path}`;
        case 'Local':
            return `${path}`;
        default:
            console.warn(`Unknown model source: ${source} - defaulting to local model.`);
            return `${path}`;
    }

}