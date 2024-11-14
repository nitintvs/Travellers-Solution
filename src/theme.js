// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ea7f1d',  // Use the provided orange color as the primary color
    },
    secondary: {
      main: '#406dab',  // Use the provided blue color as the secondary color
    },
    error: {
      main: '#e57373',  // Soft red for error messages
    },
    warning: {
      main: '#ffb74d',  // A warm yellow for warnings
    },
    info: {
      main: '#64b5f6',  // Light blue for info sections
    },
    success: {
      main: '#81c784',  // Fresh green for success messages
    },
    background: {
      default: '#fafafa', // Light gray background
      paper: '#ffffff',   // White background for cards
    },
    text: {
      primary: '#212121', // Dark text color for readability
      secondary: '#757575', // Lighter text for secondary information
    },
    divider: '#bdbdbd', // Lighter color for dividers
  },
  typography: {
    fontFamily: '"PingARLT-Regular", "Roboto", sans-serif',
    h1: { fontSize: '2.5rem', fontWeight: 700, color: '#ea7f1d' },  // Orange color for h1
    h2: { fontSize: '2rem', fontWeight: 600, color: '#406dab' },     // Blue color for h2
    h3: { fontSize: '1.75rem', fontWeight: 500, color: '#fff' },
    body1: { fontSize: '1rem', color: '#333' },
    body2: { fontSize: '0.875rem', color: '#757575' },
  },
  spacing: 8, // Default spacing for padding/margins
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '12px',  // Softer rounded corners
          textTransform: 'none',
          padding: '10px 20px',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#ea7f1d', // Use primary color for AppBar
          boxShadow: 'none',  // Remove shadow for a clean look
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',  // Light shadow for a clean yet elevated look
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',  // Slightly elevated cards
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        h1: {
          color: '#ea7f1d', 
          fontFamily: '"PingARLT-Regular", sans-serif',  // Orange for main heading
        },
        h2: {
          color: '#406dab',  // Blue for sub-headings
          fontFamily: '"PingARLT-Regular", sans-serif', 
        },
        body1: {
          fontFamily: '"PingARLT-Regular", sans-serif',  // Custom font for body text
        },
        body2: {
          fontFamily: '"PingARLT-Regular", sans-serif', // Ensure custom font is applied to body2
        },
        h6: {
          color: '#000',  // Default black color for smaller headings
          fontFamily: '"PingARLT-Regular", sans-serif', 
        },
      },
    },
  },
});

export default theme;
