import { CurrentTime } from "@components/CurrentTime/CurrentTime";
import { Icon } from "@components/shared/Icon/Icon";
import { Toggle } from "@components/Toggle/Toggle";

export const MenuBar = () => {
  return (
    <div className="flex justify-between items-center px-2 w-full h-[25px] bg-grey font-bold">
      <span className="text-as font-bold">Preferences</span>
      <p className="flex">
        75%
        {<Icon className="w-4 mx-1 flex " icon="battery-life" />}
        <Toggle />
      </p>
      <div className="flex items-center">
        <CurrentTime />
      </div>
    </div>
  );
};
