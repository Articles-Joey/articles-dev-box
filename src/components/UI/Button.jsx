import { forwardRef } from 'react';
import classNames from "classnames";
import MuiButton from '@mui/material/Button';

const ArticlesButton = forwardRef((props, ref) => {

    const {
        size,
        variant,
        style,
        sx,
        // Can just use small instead of size="sm"
        small,
        large,
        onClick,
        className,
        disabled,
        active,
        type,
        onMouseDown,
        onMouseUp,
        onMouseLeave,
        onTouchStart,
        onTouchEnd,
        title,
        ...rest
    } = props;

    const normalizedSize = small || size === 'sm'
        ? 'small'
        : large || size === 'lg'
            ? 'large'
            : size === 'md'
                ? 'medium'
                : (['small', 'medium', 'large'].includes(size) ? size : 'medium');

    const normalizedVariant = variant === 'link'
        ? 'text'
        : variant?.startsWith('outline')
            ? 'outlined'
            : 'contained';

    const color = variant === 'danger'
        ? 'error'
        : variant === 'success'
            ? 'success'
            : variant === 'warning'
                ? 'warning'
                : 'inherit';

    const isArticlesVariant = normalizedVariant === 'contained' && color === 'inherit';

    return (
        <MuiButton
            ref={ref}
            type={type || 'button'}
            disabled={disabled}
            title={title}
            size={normalizedSize}
            variant={normalizedVariant}
            color={color}
            onMouseDown={onMouseDown}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseLeave}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
            className={
                classNames(
                    className,
                    {
                        active,
                    }
                )
            }
            onClick={onClick}
            sx={[
                (theme) => {
                    const primaryColor = theme.palette?.primary?.main ?? '#f9edcd';
                    const primaryCssColor = `var(--mui-palette-primary-main, ${primaryColor})`;
                    const activeBorderColor = `color-mix(in srgb, ${primaryCssColor} 50%, #000)`;

                    return ({
                    minWidth: 0,
                    borderRadius: 0,
                    textTransform: 'none',
                    fontFamily: 'inherit',
                    fontWeight: 900,
                    ...(isArticlesVariant && {
                        '--articles-button-default-background-color': '#fff',
                        '--articles-button-default-color': '#212529',
                        '--articles-button-default-border-color': '#ced4da',
                        '--articles-button-default-hover-background-color': '#e2e6ea',
                        '--articles-button-default-hover-color': '#212529',
                        bgcolor: 'var(--articles-button-background-color, var(--articles-button-default-background-color))',
                        color: 'var(--articles-button-color, var(--articles-button-default-color))',
                        border: '1px solid var(--articles-button-border-color, var(--articles-button-default-border-color))',
                        // borderBottom: '3px solid var(--articles-button-accent-color, var(--articles-secondary-color, #f9edcd))',
                        borderBottom: `3px solid ${primaryCssColor}`,
                        boxShadow: 'none',
                        '&:hover:not(.active)': {
                            bgcolor: 'var(--articles-button-hover-background-color, var(--articles-button-default-hover-background-color))',
                            color: 'var(--articles-button-hover-color, var(--articles-button-default-hover-color))',
                            borderColor: 'var(--articles-button-hover-border-color, #dae0e5)',
                            borderBottomColor: `var(--articles-button-hover-accent-color, ${activeBorderColor})`,
                            boxShadow: 'none',
                        },
                        '&.active': {
                            bgcolor: 'var(--articles-button-active-background-color, var(--articles-secondary-color, #f9edcd))',
                            color: 'var(--articles-button-active-color, #000)',
                            borderBottomColor: `var(--articles-button-active-accent-color, ${primaryCssColor})`,
                            boxShadow: 'none',
                            bgcolor: primaryCssColor,
                            borderColor: activeBorderColor,
                        },
                        '&.Mui-disabled': {
                            bgcolor: '#fff',
                            color: 'darkgray',
                            borderColor: '#ced4da',
                            borderBottomColor: '#ffc8c8',
                            filter: 'grayscale(1)',
                            opacity: 1,
                        },
                        '[data-bs-theme="dark"] &, [data-mui-color-scheme="dark"] &': {
                            '--articles-button-default-background-color': 'rgb(70, 70, 70)',
                            '--articles-button-default-color': '#fff',
                            '--articles-button-default-border-color': 'rgb(29, 29, 29)',
                            '--articles-button-default-hover-background-color': '#000',
                            '--articles-button-default-hover-color': '#fff',
                        },
                    }),
                    ...style,
                    });
                },
                ...(Array.isArray(sx) ? sx : sx ? [sx] : []),
            ]}
            {...rest}
        >
            {props.children}
        </MuiButton>
    );
});
ArticlesButton.displayName = 'ArticlesButton';

export default ArticlesButton;
