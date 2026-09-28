import { forwardRef } from 'react';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

export const articlesShadow = '0 0 0 1px rgba(0, 0, 0, 0.25), 0 2px 3px rgba(0, 0, 0, 0.2)';

export const articlesCardSx = {
    '--articles-card-default-background-color': '#fff',
    '--articles-card-default-font-color': 'var(--articles-card-light-font-color, #212529)',
    bgcolor: 'var(--card-background-override, var(--articles-card-default-background-color))',
    color: 'var(--articles-card-font-color, var(--articles-card-default-font-color))',
    border: '1px solid rgba(0, 0, 0, 0.175)',
    borderRadius: 1,
    overflow: 'hidden',
    '[data-mui-color-scheme="dark"] &': {
        '--articles-card-default-background-color': '#212529',
        '--articles-card-default-font-color': 'var(--articles-card-dark-font-color, #fff)',
    },
};

export const articlesCardHeaderSx = {
    px: 2,
    py: 1,
    borderBottom: '1px solid rgba(0, 0, 0, 0.175)',
    bgcolor: 'rgba(0, 0, 0, 0.03)',
};

export const articlesCardBodySx = {
    p: 2,
};

export const articlesCardFooterSx = {
    px: 2,
    py: 1,
    borderTop: '1px solid rgba(0, 0, 0, 0.175)',
    bgcolor: 'rgba(0, 0, 0, 0.03)',
};

const mergeSx = (base, sx) => sx ? [base, ...(Array.isArray(sx) ? sx : [sx])] : base;

export const ArticlesCard = forwardRef(function ArticlesCard({ sx, ...props }, ref) {
    return <Box ref={ref} className="card card-articles" sx={mergeSx(articlesCardSx, sx)} {...props} />;
});

export const ArticlesCardHeader = forwardRef(function ArticlesCardHeader({ sx, ...props }, ref) {
    return <Box ref={ref} className="card-header" sx={mergeSx(articlesCardHeaderSx, sx)} {...props} />;
});

export const ArticlesCardBody = forwardRef(function ArticlesCardBody({ sx, ...props }, ref) {
    return <Box ref={ref} className="card-body" sx={mergeSx(articlesCardBodySx, sx)} {...props} />;
});

export const ArticlesCardFooter = forwardRef(function ArticlesCardFooter({ sx, ...props }, ref) {
    return <Box ref={ref} className="card-footer" sx={mergeSx(articlesCardFooterSx, sx)} {...props} />;
});

export const ArticlesBadge = forwardRef(function ArticlesBadge({ sx, ...props }, ref) {
    return (
        <Box
            component="span"
            ref={ref}
            sx={mergeSx({
                display: 'inline-block',
                px: 0.75,
                py: 0.35,
                fontSize: '0.75em',
                fontWeight: 700,
                lineHeight: 1,
                textAlign: 'center',
                whiteSpace: 'nowrap',
                verticalAlign: 'baseline',
                borderRadius: 1,
            }, sx)}
            {...props}
        />
    );
});

export function ArticlesDialog({
    open,
    onClose,
    onExited,
    children,
    className,
    id,
    sx,
    paperSx,
    backdropClassName,
    scroll = 'paper',
    ...props
}) {
    return (
        <Dialog
            open={Boolean(open)}
            onClose={onClose}
            fullWidth
            maxWidth={false}
            scroll={scroll}
            className={className}
            id={id}
            sx={sx}
            slotProps={{
                paper: {
                    sx: {
                        '--articles-dialog-default-background-color': '#fff',
                        '--articles-dialog-default-font-color': '#212529',
                        width: 'calc(100% - 32px)',
                        maxWidth: 500,
                        maxHeight: 'calc(100% - 64px)',
                        bgcolor: 'var(--articles-dialog-background-color, var(--articles-dialog-default-background-color))',
                        color: 'var(--articles-dialog-font-color, var(--articles-dialog-default-font-color))',
                        backgroundImage: 'none',
                        '[data-bs-theme="dark"] &, [data-mui-color-scheme="dark"] &': {
                            '--articles-dialog-default-background-color': '#212529',
                            '--articles-dialog-default-font-color': '#fff',
                        },
                        ...paperSx,
                    },
                },
                backdrop: backdropClassName ? { className: backdropClassName } : undefined,
                transition: onExited ? { onExited } : undefined,
            }}
            {...props}
        >
            {children}
        </Dialog>
    );
}

export function ArticlesDialogTitle({ children, onClose, sx, ...props }) {
    return (
        <DialogTitle
            sx={mergeSx({
                display: 'flex',
                alignItems: 'center',
                minHeight: 56,
                pr: onClose ? 6 : 3,
                fontWeight: 500,
            }, sx)}
            {...props}
        >
            {children}
            {onClose && (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    size="small"
                    sx={{ position: 'absolute', right: 12, top: 12 }}
                >
                    <CloseIcon />
                </IconButton>
            )}
        </DialogTitle>
    );
}

export function ArticlesDialogContent({ sx, ...props }) {
    return <DialogContent dividers sx={mergeSx({ py: 2 }, sx)} {...props} />;
}

export function ArticlesDialogActions({ sx, ...props }) {
    return (
        <DialogActions
            sx={mergeSx({
                justifyContent: 'space-between',
                px: 3,
                py: 2,
            }, sx)}
            {...props}
        />
    );
}
