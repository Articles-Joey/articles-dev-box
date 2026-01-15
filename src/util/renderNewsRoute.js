// import ROUTES from 'components/constants/routes'
import { routes } from "#root/src/constants/routes";

export default function renderNewsRoute(type) {
    switch (type) {
        case 'story':
            return routes.STORIES
        // break;
        case 'issue':
            return routes.ISSUES
        // break;
        case 'myth':
            return routes.MYTHS
        // break;
        default:
        // code block
    }
}