import '../styles/reset.css';
import '../styles/colors.css';
import '../styles/fonts.css';
import '../styles/global.css';
import { useTheme } from '../hooks/useTheme';


export default function App({ Component, pageProps }) {
    useTheme();
    return <Component {...pageProps} />;
  }