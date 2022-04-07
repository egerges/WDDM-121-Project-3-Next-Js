import "../styles/global.css";
// Adding bootstrap css 
import 'bootstrap/dist/css/bootstrap.css';
// Adding fontawesome css
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
