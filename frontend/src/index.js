import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider, createTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import App from './App';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import './index.css';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ff7f50', // Coral/Orange accent
      light: '#ffa07a',
      dark: '#ff6347',
    },
    secondary: {
      main: '#a855f7', // Purple accent
      light: '#c084fc',
      dark: '#9333ea',
    },
    background: {
      default: '#000000', // Pure black background
      paper: '#0a0a0a', // Slightly lighter for cards
    },
    text: {
      primary: '#ffffff',
      secondary: '#a1a1aa', // Gray for secondary text
    },
    divider: 'rgba(255, 255, 255, 0.08)',
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"Playfair Display", serif',
      fontStyle: 'italic',
      fontWeight: 400,
    },
    h2: {
      fontFamily: '"Playfair Display", serif',
      fontStyle: 'italic',
      fontWeight: 400,
    },
    h3: {
      fontFamily: '"Playfair Display", serif',
      fontStyle: 'italic',
      fontWeight: 400,
    },
    h4: {
      fontFamily: '"Playfair Display", serif',
      fontStyle: 'italic',
      fontWeight: 400,
    },
    h5: {
      fontFamily: '"Playfair Display", serif',
      fontStyle: 'italic',
      fontWeight: 400,
    },
    h6: {
      fontFamily: '"Playfair Display", serif',
      fontStyle: 'italic',
      fontWeight: 400,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: '100px',
          fontWeight: 600,
        },
        contained: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          boxShadow: 'none',
          backgroundColor: '#0a0a0a',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <DndProvider backend={HTML5Backend}>
        <App />
      </DndProvider>
    </ThemeProvider>
  </React.StrictMode>
);