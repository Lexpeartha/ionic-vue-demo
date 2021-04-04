import { menuController } from "@ionic/vue";

const useMenu = () => {
  const openMenu = () => {
    menuController.open("menu");
  };

  const closeMenu = () => {
    menuController.close("menu");
  };

  return {
    openMenu,
    closeMenu,
  };
};

export default useMenu;
