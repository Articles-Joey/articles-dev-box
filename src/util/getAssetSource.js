/**
 * Resolves an asset path using an explicit source or NEXT_PUBLIC_MODEL_SOURCE.
 * CDN paths use NEXT_PUBLIC_CDN followed by games/NEXT_PUBLIC_GAME_NAME/public/.
 * Unknown sources warn and return the path unchanged.
 *
 * Supports both an options object and a legacy positional source argument.
 * returnSource and leadingLocalSlash are available only in the options object.
 *
 * @param {string} path - Asset path relative to the game's public directory.
 * @param {Object|string|null} [optionsOrSource=null] - Asset source options, or
 *   the legacy source argument ('CDN' or 'Local').
 * @param {string|null} [optionsOrSource.overrideSource=null] - Source to use;
 *   falsy values fall back to NEXT_PUBLIC_MODEL_SOURCE.
 * @param {boolean} [optionsOrSource.returnSource=false] - Return the selected source instead of
 *   resolving the asset path. The source may be undefined if not configured.
 * @param {boolean} [optionsOrSource.leadingLocalSlash=false] - Prepend '/' to the path when the
 *   selected source is 'Local'. Does not normalize existing leading slashes.
 * @returns {string|undefined} The resolved asset path, or the selected source
 *   when returnSource is true.
 * @example
 * getAssetSource('models/car.glb', { leadingLocalSlash: true });
 * @example
 * getAssetSource('models/car.glb', 'Local');
 */
export default function getAssetSource(
    path,
    optionsOrSource = null
) {
    const {
        overrideSource = null,
        returnSource = false,
        leadingLocalSlash = false,
    } = optionsOrSource !== null && typeof optionsOrSource === 'object'
        ? optionsOrSource
        : { overrideSource: optionsOrSource };

    const source = overrideSource || process.env.NEXT_PUBLIC_MODEL_SOURCE;

    if (returnSource) {
        return source
    }

    switch (source) {
        case 'CDN':
            return `${process.env.NEXT_PUBLIC_CDN}games/${process.env.NEXT_PUBLIC_GAME_NAME}/public/${path}`;
        case 'Local':
            return `${leadingLocalSlash ? '/' : ''}${path}`;
        default:
            console.warn(`Unknown model source: ${source} - defaulting to local model.`);
            return `${path}`;
    }
    
}
