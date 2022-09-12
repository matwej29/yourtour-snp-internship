import { debounce } from "./scripts/helpers";
import { fixMenuOnScroll } from "./styles/components/menu/_fixed/menu_fixed";

window.onscroll = debounce(() => fixMenuOnScroll(), 10);
