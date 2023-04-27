import { styles } from './App.css';
import reactLogo from './assets/react.svg';
import reduxLogo from './assets/redux_purple.svg';
import vanillaExtractLogo from './assets/vanilla_extract.svg';
import { useAppDispatch, useAppSelector } from './hooks/useRTK';
import { increment, selectCount } from './store/slices/counterSlice';

const viteLogoUrl = '/vite.svg';

function App() {
  const dispatch = useAppDispatch();
  const count = useAppSelector(selectCount);

  return (
    <>
      <div>
        <a href='https://vitejs.dev' target='_blank' rel='noreferrer'>
          <img src={viteLogoUrl} className={styles.logoVariants.vite} alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank' rel='noreferrer'>
          <img src={reactLogo} className={styles.logoVariants.react} alt='React logo' />
        </a>
        <a href='https://redux-toolkit.js.org' target='_blank' rel='noreferrer'>
          <img src={reduxLogo} className={styles.logoVariants.redux} alt='Redux Toolkit' />
        </a>
        <a href='https://vanilla-extract.style' target='_blank' rel='noreferrer'>
          <img
            src={vanillaExtractLogo}
            className={styles.logoVariants.vanillaExtract}
            alt='vanilla-extract.style'
          />
        </a>
      </div>
      <h1 className={styles.headingVariants.h1}>Vite + React + Redux + Vanilla-Extract</h1>
      <div className={styles.card}>
        <button onClick={() => dispatch(increment())}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className={styles.readTheDocs}>Click on the logos to learn more</p>
    </>
  );
}

export default App;
