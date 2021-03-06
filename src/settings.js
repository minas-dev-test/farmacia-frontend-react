import { createMuiTheme } from "@material-ui/core";
import {
    red as primary, // Primary color
    grey as secondary, // Primary color
} from '@material-ui/core/colors'

/**
 * Material UI theme feature
 * @see https://material-ui.com/customization/themes/
 * @see https://material-ui.com/style/color/
 */
export const theme = createMuiTheme({
    palette: {
        primary,
        secondary,
    },
})