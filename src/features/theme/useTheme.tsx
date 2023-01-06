import { useSelector, useDispatch } from "react-redux";
import {
  toggleDarkMode,
  getCurrentTheme,
} from "../../features/theme/darkModeSlice";

const useTheme = () => {
  const dispatch = useDispatch();
  const theme = useSelector(getCurrentTheme);

  const lightMode = "#f3f3f3";
  const darkMode = "#181818";

  const themeColor = {
    backgroundColor: theme ? darkMode : lightMode,
    color: theme ? lightMode : darkMode,
    navButtons: theme ? "#2d2d2d" : "#ededed",
  };

  return {
    theme,
    themeColor,
    toggleDarkMode: () => dispatch(toggleDarkMode()),
  };
};

export default useTheme;
