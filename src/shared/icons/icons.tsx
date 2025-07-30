import VkIcon from "./static/vk.svg";
import TelegramIcon from "./static/telegram.svg";
import InstagramIcon from "./static/instagram.svg";
import YoutubeIcon from "./static/youtube.svg";

export const icons: Record<string, React.ReactNode> = {
  vk: <img src={VkIcon} alt="vk" />,
  telegram: <img src={TelegramIcon} alt="telegram" />,
  instagram: <img src={InstagramIcon} alt="instagram" />,
  youtube: <img src={YoutubeIcon} alt="youtube" />,
};
