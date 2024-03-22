import { THEMES } from "@/types/common/constants";
import { ThemeNames } from "@/types/common/datatype";
import { atom, AtomEffect } from "recoil";

const store: null | Storage = "undefined" === typeof window ? null : window.localStorage;
/**
 * This is our Atom Effect which will behave similarly to React.useEffect with
 * the atom in the dependencies array
 *
 * @param key the value used to store and retrieve data from local storage
 */
const localStorageEffect =
  (key: string): AtomEffect<ThemeNames> =>
  ({ setSelf, onSet }) => {
    if (!store) return;

    // Retrieve the value stored at the specified key
    const stored = store.getItem(key) as ThemeNames;
    // Check if the value exists and is light or dark
    // If the value is valid, the call the provided function setSelf which initializes the atom value
    if (THEMES.includes(stored)) setSelf(stored);

    // Creates the callback triggered when the atom is changed
    onSet((value, _, isReset) => {
      // If atom has been reset then remove it from local storage
      if (isReset) store.removeItem(key);
      // If value has changed then store the value in local storage
      // the || is a fail-safe if for any reason value is null the value will revert to default
      else store.setItem(key, value || _);
    });
  };

export const themeState = atom<ThemeNames>({
  key: "ViewTrackTheme",
  default: "light",
  // Now we need to add it to our effects array
  effects: [localStorageEffect("theme")],
});
