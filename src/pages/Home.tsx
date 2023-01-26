import { Google } from "@components/Browser/Google";
import { MenuBar } from "@components/MainScreen/MenuBar/MenuBar";
import WindowModal from "@components/Modal/Modal";

import { Icon } from "@components/shared/Icon/Icon";

interface Props {
  onLogut: () => void;
}
export const Home = ({ onLogut }: Props) => {
  return (
    <div className="h-screen  flex flex-col">
      <MenuBar />
      <div className="flex">
        {<WindowModal icon="camera" title="Camera" />}
        {<WindowModal icon="firefox-brands" title="Browser" />}
        {<WindowModal icon="newspaper" title="News" />}
        {<WindowModal icon="images" title="Gallery" />}
        {<WindowModal icon="folder" title="Folder" />}
      </div>
      ;
      <div className="mt-auto">
        <button
          onClick={onLogut}
          className="w-9 h-9  ml-6 shadow-md flex justify-center items-center select-none bg-[#8EE4BA] rounded-full mb-3"
        >
          {<Icon className="w-4 mx-2 " icon="power-off" />}
        </button>
      </div>
    </div>
  );
};
