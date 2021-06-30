//background image
import bgDesktopLight from "../assets/images/bg-desktop-light.jpg"
import bgMobileLight from "../assets/images/bg-mobile-light.jpg"
import bgDesktopDark from "../assets/images/bg-desktop-dark.jpg"
import bgMobileDark from "../assets/images/bg-mobile-dark.jpg"

//header icons
import iconSun from "../assets/icons/icon-sun.svg"
import iconMoon from "../assets/icons/icon-moon.svg"

//colors
import colors from "./colors"

const common = {
    task: "padding: 1.5rem; border-radius: 5px; display:flex;align-items:center;"
}

export const lightTheme = {
    body: {
        bgColor: colors.lVeryLightGray,
        bgImage: bgDesktopLight,
        bgImageMobile: bgMobileLight
    },
    header: {
        icon: iconMoon
    },
    task: {
        color: colors.lVeryDarkGrayishBlue,
        bgColor: colors.white,
        placeHolder: colors.lDarkGrayishBlue,
        common: common.task,
        borderBottom: colors.lVeryLightGrayishBlue,
        boxShadow: `0 10px 20px ${colors.veryLightBlack}`
    },
    radio: {
        borderColor: colors.lLightGrayishBlue
    },
    tasks: {
        color: colors.lDarkGrayishBlue,
        hoverColor: colors.lVeryDarkGrayishBlue
    }
}

export const darkTheme = {
    body: {
        bgColor: colors.dVeryDarkBlue,
        bgImage: bgDesktopDark,
        bgImageMobile: bgMobileDark
    },
    header: {
        icon: iconSun
    },
    task: {
        color: colors.dLightGrayishBlue,
        bgColor: colors.dVeryDarkDesaturatedBlue,
        placeHolder: colors.dDarkGrayishBlue,
        common: common.task,
        borderBottom: colors.lVeryDarkGrayishBlue,
        boxShadow: `0 10px 20px ${colors.lightBlack}`
    },
    radio: {
        borderColor: colors.dVeryDarkGrayishBlue2
    },
    tasks: {
        color: colors.dVeryDarkGrayishBlue,
        hoverColor: colors.dLightGrayishBlueHover
    }
}

