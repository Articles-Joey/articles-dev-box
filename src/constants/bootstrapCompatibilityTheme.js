const spacingScale = {
    0: '0',
    1: '0.25rem',
    2: '0.5rem',
    3: '1rem',
    4: '1.5rem',
    5: '3rem',
};

const defaultBreakpointValues = {
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536,
};

const spacingUtilities = {
    m: ['margin'],
    mt: ['marginTop'],
    me: ['marginInlineEnd'],
    mb: ['marginBottom'],
    ms: ['marginInlineStart'],
    mx: ['marginInlineStart', 'marginInlineEnd'],
    my: ['marginTop', 'marginBottom'],
    p: ['padding'],
    pt: ['paddingTop'],
    pe: ['paddingInlineEnd'],
    pb: ['paddingBottom'],
    ps: ['paddingInlineStart'],
    px: ['paddingInlineStart', 'paddingInlineEnd'],
    py: ['paddingTop', 'paddingBottom'],
};

const displayUtilities = {
    none: 'none',
    inline: 'inline',
    'inline-block': 'inline-block',
    block: 'block',
    grid: 'grid',
    flex: 'flex',
    'inline-flex': 'inline-flex',
};

const flexUtilities = {
    '.flex-row': { flexDirection: 'row !important' },
    '.flex-row-reverse': { flexDirection: 'row-reverse !important' },
    '.flex-column': { flexDirection: 'column !important' },
    '.flex-column-reverse': { flexDirection: 'column-reverse !important' },
    '.flex-wrap': { flexWrap: 'wrap !important' },
    '.flex-nowrap': { flexWrap: 'nowrap !important' },
    '.flex-fill': { flex: '1 1 auto !important' },
    '.flex-grow-0': { flexGrow: '0 !important' },
    '.flex-grow-1': { flexGrow: '1 !important' },
    '.flex-shrink-0': { flexShrink: '0 !important' },
    '.flex-shrink-1': { flexShrink: '1 !important' },
    '.justify-content-start': { justifyContent: 'flex-start !important' },
    '.justify-content-end': { justifyContent: 'flex-end !important' },
    '.justify-content-center': { justifyContent: 'center !important' },
    '.justify-content-between': { justifyContent: 'space-between !important' },
    '.justify-content-around': { justifyContent: 'space-around !important' },
    '.justify-content-evenly': { justifyContent: 'space-evenly !important' },
    '.align-items-start': { alignItems: 'flex-start !important' },
    '.align-items-end': { alignItems: 'flex-end !important' },
    '.align-items-center': { alignItems: 'center !important' },
    '.align-items-baseline': { alignItems: 'baseline !important' },
    '.align-items-stretch': { alignItems: 'stretch !important' },
    '.align-self-start': { alignSelf: 'flex-start !important' },
    '.align-self-end': { alignSelf: 'flex-end !important' },
    '.align-self-center': { alignSelf: 'center !important' },
    '.align-self-baseline': { alignSelf: 'baseline !important' },
    '.align-self-stretch': { alignSelf: 'stretch !important' },
};

const getResponsiveFlexSelector = (selector, breakpoint) => {
    const utilityName = selector.slice(1);
    const prefix = ['justify-content', 'align-items', 'align-self']
        .find((candidate) => utilityName.startsWith(`${candidate}-`));

    if (prefix) {
        return `.${prefix}-${breakpoint}-${utilityName.slice(prefix.length + 1)}`;
    }

    return `.flex-${breakpoint}-${utilityName.slice('flex-'.length)}`;
};

const baseCompatibilityStyles = {
    ':root, [data-bs-theme="light"], [data-mui-color-scheme="light"]': {
        '--articles-compat-body-color': '#212529',
        '--articles-compat-muted-color': 'rgba(33, 37, 41, 0.75)',
        '--articles-compat-border-color': '#dee2e6',
        '--articles-compat-card-background-color': '#fff',
        '--articles-compat-card-color': '#212529',
        '--articles-compat-card-cap-background-color': 'rgba(0, 0, 0, 0.03)',
        '--articles-compat-link-color': '#0d6efd',
        '--articles-compat-link-hover-color': '#0a58ca',
    },
    '[data-bs-theme="dark"], [data-mui-color-scheme="dark"]': {
        '--articles-compat-body-color': '#fff',
        '--articles-compat-muted-color': 'rgba(255, 255, 255, 0.75)',
        '--articles-compat-border-color': '#495057',
        '--articles-compat-card-background-color': '#212529',
        '--articles-compat-card-color': '#fff',
        '--articles-compat-card-cap-background-color': 'rgba(0, 0, 0, 0.15)',
        '--articles-compat-link-color': '#6ea8fe',
        '--articles-compat-link-hover-color': '#9ec5fe',
    },
    a: {
        color: 'var(--articles-compat-link-color)',
        textDecoration: 'underline',
    },
    'a:hover': {
        color: 'var(--articles-compat-link-hover-color)',
    },
    'h1, h2, h3, h4, h5, h6': {
        marginTop: 0,
        marginBottom: '0.5rem',
        fontWeight: 500,
        lineHeight: 1.2,
    },
    h1: { fontSize: '2.5rem' },
    h2: { fontSize: '2rem' },
    h3: { fontSize: '1.75rem' },
    h4: { fontSize: '1.5rem' },
    h5: { fontSize: '1.25rem' },
    h6: { fontSize: '1rem' },
    p: {
        marginTop: 0,
        marginBottom: '1rem',
    },
    hr: {
        margin: '1rem 0',
        color: 'inherit',
        border: 0,
        borderTop: '1px solid currentColor',
        opacity: 0.25,
    },
    'small, .small': {
        fontSize: '0.875em',
    },
    '.card': {
        '--articles-card-default-background-color': 'var(--articles-compat-card-background-color)',
        '--articles-card-default-font-color': 'var(--articles-compat-card-color)',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        minWidth: 0,
        overflowWrap: 'break-word',
        color: 'var(--articles-card-font-color, var(--articles-card-default-font-color))',
        backgroundColor: 'var(--card-background-override, var(--articles-card-default-background-color))',
        backgroundClip: 'border-box',
        border: '1px solid var(--articles-compat-border-color)',
        borderRadius: '0.375rem',
    },
    '.card-header': {
        padding: '0.5rem 1rem',
        marginBottom: 0,
        backgroundColor: 'var(--articles-compat-card-cap-background-color)',
        borderBottom: '1px solid var(--articles-compat-border-color)',
    },
    '.card-body': {
        flex: '1 1 auto',
        padding: '1rem',
        color: 'inherit',
    },
    '.card-footer': {
        padding: '0.5rem 1rem',
        backgroundColor: 'var(--articles-compat-card-cap-background-color)',
        borderTop: '1px solid var(--articles-compat-border-color)',
    },
    '.card-sm': {
        fontSize: '0.875rem',
    },
    '.card-sm .card-header, .card-sm .card-body, .card-sm .card-footer': {
        padding: '0.5rem',
    },
    '.badge': {
        display: 'inline-block',
        padding: '0.35em 0.65em',
        fontSize: '0.75em',
        fontWeight: 700,
        lineHeight: 1,
        textAlign: 'center',
        whiteSpace: 'nowrap',
        verticalAlign: 'baseline',
        borderRadius: '0.375rem',
    },
    '.container, .container-fluid': {
        width: '100%',
        paddingInline: 'calc(var(--articles-compat-gutter-x, 1.5rem) * 0.5)',
        marginInline: 'auto',
    },
    '.w-25': { width: '25% !important' },
    '.w-50': { width: '50% !important' },
    '.w-75': { width: '75% !important' },
    '.w-100': { width: '100% !important' },
    '.w-auto': { width: 'auto !important' },
    '.h-25': { height: '25% !important' },
    '.h-50': { height: '50% !important' },
    '.h-75': { height: '75% !important' },
    '.h-100': { height: '100% !important' },
    '.h-auto': { height: 'auto !important' },
    '.mw-100': { maxWidth: '100% !important' },
    '.mh-100': { maxHeight: '100% !important' },
    '.vw-100': { width: '100vw !important' },
    '.vh-100': { height: '100vh !important' },
    '.min-vw-100': { minWidth: '100vw !important' },
    '.min-vh-100': { minHeight: '100vh !important' },
    '.text-start': { textAlign: 'start !important' },
    '.text-center': { textAlign: 'center !important' },
    '.text-end': { textAlign: 'end !important' },
    '.text-lowercase': { textTransform: 'lowercase !important' },
    '.text-uppercase': { textTransform: 'uppercase !important' },
    '.text-capitalize': { textTransform: 'capitalize !important' },
    '.text-wrap': { whiteSpace: 'normal !important' },
    '.text-nowrap': { whiteSpace: 'nowrap !important' },
    '.text-muted': { color: 'var(--articles-compat-muted-color) !important' },
    '.text-white': { color: '#fff !important' },
    '.text-dark': { color: '#212529 !important' },
    '.text-reset': { color: 'inherit !important' },
    '.fw-light': { fontWeight: '300 !important' },
    '.fw-normal': { fontWeight: '400 !important' },
    '.fw-medium': { fontWeight: '500 !important' },
    '.fw-semibold': { fontWeight: '600 !important' },
    '.fw-bold': { fontWeight: '700 !important' },
    '.fst-italic': { fontStyle: 'italic !important' },
    '.fst-normal': { fontStyle: 'normal !important' },
    '.bg-dark': { color: '#fff !important', backgroundColor: '#212529 !important' },
    '.border': { border: '1px solid var(--articles-compat-border-color) !important' },
    '.border-0': { border: '0 !important' },
    '.border-top': { borderTop: '1px solid var(--articles-compat-border-color) !important' },
    '.border-end': { borderInlineEnd: '1px solid var(--articles-compat-border-color) !important' },
    '.border-bottom': { borderBottom: '1px solid var(--articles-compat-border-color) !important' },
    '.border-start': { borderInlineStart: '1px solid var(--articles-compat-border-color) !important' },
    '.rounded': { borderRadius: '0.375rem !important' },
    '.rounded-0': { borderRadius: '0 !important' },
    '.rounded-circle': { borderRadius: '50% !important' },
    '.position-static': { position: 'static !important' },
    '.position-relative': { position: 'relative !important' },
    '.position-absolute': { position: 'absolute !important' },
    '.position-fixed': { position: 'fixed !important' },
    '.position-sticky': { position: 'sticky !important' },
    '.overflow-auto': { overflow: 'auto !important' },
    '.overflow-hidden': { overflow: 'hidden !important' },
    '.overflow-visible': { overflow: 'visible !important' },
    '.overflow-scroll': { overflow: 'scroll !important' },
    '.visible': { visibility: 'visible !important' },
    '.invisible': { visibility: 'hidden !important' },
    ...flexUtilities,
};

for (const [name, value] of Object.entries(displayUtilities)) {
    baseCompatibilityStyles[`.d-${name}`] = { display: `${value} !important` };
}

for (const [prefix, properties] of Object.entries(spacingUtilities)) {
    for (const [size, value] of Object.entries(spacingScale)) {
        baseCompatibilityStyles[`.${prefix}-${size}`] = Object.fromEntries(
            properties.map((property) => [property, `${value} !important`]),
        );
    }

    if (prefix.startsWith('m')) {
        baseCompatibilityStyles[`.${prefix}-auto`] = Object.fromEntries(
            properties.map((property) => [property, 'auto !important']),
        );
    }
}

for (const [size, value] of Object.entries(spacingScale)) {
    baseCompatibilityStyles[`.gap-${size}`] = { gap: `${value} !important` };
    baseCompatibilityStyles[`.row-gap-${size}`] = { rowGap: `${value} !important` };
    baseCompatibilityStyles[`.column-gap-${size}`] = { columnGap: `${value} !important` };
}

const createBootstrapCompatibilityStyles = (theme) => {
    const styles = { ...baseCompatibilityStyles };
    const breakpointKeys = theme?.breakpoints?.keys?.filter((key) => key !== 'xs')
        ?? Object.keys(defaultBreakpointValues);

    for (const breakpoint of breakpointKeys) {
        const minWidth = theme?.breakpoints?.values?.[breakpoint]
            ?? defaultBreakpointValues[breakpoint];
        const mediaQuery = theme?.breakpoints?.up
            ? theme.breakpoints.up(breakpoint)
            : `@media (min-width: ${minWidth}px)`;
        const responsiveStyles = {};

        for (const [name, value] of Object.entries(displayUtilities)) {
            responsiveStyles[`.d-${breakpoint}-${name}`] = { display: `${value} !important` };
        }

        for (const [prefix, properties] of Object.entries(spacingUtilities)) {
            for (const [size, value] of Object.entries(spacingScale)) {
                responsiveStyles[`.${prefix}-${breakpoint}-${size}`] = Object.fromEntries(
                    properties.map((property) => [property, `${value} !important`]),
                );
            }

            if (prefix.startsWith('m')) {
                responsiveStyles[`.${prefix}-${breakpoint}-auto`] = Object.fromEntries(
                    properties.map((property) => [property, 'auto !important']),
                );
            }
        }

        for (const [selector, declarations] of Object.entries(flexUtilities)) {
            responsiveStyles[getResponsiveFlexSelector(selector, breakpoint)] = declarations;
        }

        if (minWidth !== undefined) {
            responsiveStyles['.container'] = { maxWidth: minWidth };
        }

        styles[mediaQuery] = responsiveStyles;
    }

    return styles;
};

const bootstrapCompatibilityStyles = createBootstrapCompatibilityStyles();

const bootstrapCompatibilityTheme = {
    MuiCssBaseline: {
        styleOverrides: createBootstrapCompatibilityStyles,
    },
};

export {
    bootstrapCompatibilityStyles,
    bootstrapCompatibilityTheme,
    createBootstrapCompatibilityStyles,
};

export default bootstrapCompatibilityTheme;
