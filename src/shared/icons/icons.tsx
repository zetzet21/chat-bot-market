import VkIcon from "./static/vk.svg";
import TelegramIcon from "./static/telegram.svg";
import InstagramIcon from "./static/instagram.svg";
import YoutubeIcon from "./static/youtube.svg";

export const icons: Record<string, React.ReactNode> = {
  vk: <img src={VkIcon} alt="vk" style={{ width: 24, height: 24 }} />,
  telegram: (
    <img src={TelegramIcon} alt="telegram" style={{ width: 24, height: 24 }} />
  ),
  instagram: (
    <img
      src={InstagramIcon}
      alt="instagram"
      style={{ width: 24, height: 24 }}
    />
  ),
  youtube: (
    <img src={YoutubeIcon} alt="youtube" style={{ width: 24, height: 24 }} />
  ),
};
