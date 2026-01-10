export default function Link(props) {
    const { href, children, newPage, ...rest } = props;

    return (
        <a 
            href={href} 
            {...rest}
            {...newPage && { target: '_blank', rel: 'noopener noreferrer' }}
        >
            {children}
        </a>
    );
}