import React from 'react';

import { Paper } from '@mui/material';

function Item( props )
{
    return (
        <Paper>
            <img src={ props.item }/>
        </Paper>
    )
}

export default Item