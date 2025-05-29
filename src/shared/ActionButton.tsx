import AnchorLink from "react-anchor-link-smooth-scroll"
import { SelectedPage } from "./types"

type Props = {
    children: React.ReactNode;
    setSelectedPage: (value: SelectedPage) => void;
    downloadApp?:boolean
}

const openAndroidAppLink = () => {
    window.open("https://play.google.com/store/apps/details?id=eu.dscompass.myfitnesstrainer_app", "_blank");
}

const openIosAppLink = () => {
    window.open("https://apps.apple.com/app/id1372844136", "_blank");
}

const ActionButton = ({ children, setSelectedPage, downloadApp }: Props) => {
  return (
    <AnchorLink
        className="rounded-md bg-secondary-500 px-5 py-2 hover:bg-red-500 hover:text-white cursor-pointer "
        onClick={() => {
            if (downloadApp) {
                const userAgent = navigator.userAgent || navigator.vendor;
                if (/android/i.test(userAgent)) {
                    openAndroidAppLink();
                } else if (/iPad|iPhone|iPod/.test(userAgent)) {
                    openIosAppLink();
                } else {
                    openAndroidAppLink(); // Redirect to Google Play if not on Android or iOS
                }
            } else {
                setSelectedPage(SelectedPage.Memberships);
            }
        }}
        href={`#${SelectedPage.Memberships}`}
    >
        {children}
    </AnchorLink>
  )
}

export default ActionButton
