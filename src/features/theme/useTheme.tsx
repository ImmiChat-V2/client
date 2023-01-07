import { useSelector, useDispatch } from "react-redux";
import { toggleDarkMode, getCurrentTheme } from "features/theme/darkModeSlice";

const useTheme = () => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector(getCurrentTheme);
  const theme = isDarkMode ? 'darkMode' : 'lightMode';

  const themeColorObj = {
    lightMode: {
      backgroundColor: "#f3f3f3",
      color: "#181818",
      navButtons: "#ededed",
    },
    darkMode: {
      backgroundColor: "#181818",
      color: "#f3f3f3",
      navButtons: "#2d2d2d"
    }
  }

  return {
    isDarkMode,
    themeColor: themeColorObj[theme],
    toggleDarkMode: () => dispatch(toggleDarkMode()),
  };
};

export default useTheme;
