import MuiLink from '@mui/material/Link';

export default function Link(props) {
    const { href, children, newPage, sx, ...rest } = props;

    return (
        <MuiLink
            href={href} 
            {...rest}
            {...newPage && { target: '_blank', rel: 'noopener noreferrer' }}
            sx={sx}
        >
            {children}
        </MuiLink>
    );
}
