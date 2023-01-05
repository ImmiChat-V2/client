import { useSelector, useDispatch } from "react-redux";
import { toggleDarkMode, getCurrentTheme } from "../../features/theme/darkModeSlice";

const useTheme = () => {
    const dispatch = useDispatch()
    const theme = useSelector(getCurrentTheme)
    return {
        theme,
        toggleDarkMode:() => dispatch(toggleDarkMode())
    }
}

export default useTheme
