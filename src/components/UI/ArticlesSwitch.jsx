import Switch from '@mui/material/Switch';

export default function ArticlesSwitch({
    setChecked,
    checked,
    readOnly
}) {
    return (
        <Switch
            checked={Boolean(checked)}
            readOnly={Boolean(readOnly)}
            onChange={(event) => {
                if (setChecked && !readOnly) setChecked(event.target.checked);
            }}
            inputProps={{ 'aria-label': 'Toggle setting' }}
            sx={{
                m: 0,
                '& .MuiSwitch-switchBase.Mui-checked': {
                    color: 'var(--articles-secondary-color, #1976d2)',
                },
                '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                    bgcolor: 'var(--articles-secondary-color, #1976d2)',
                },
            }}
        />
    )
}
