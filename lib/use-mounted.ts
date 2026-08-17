"use client";

import { useCallback, useSyncExternalStore } from "react";

/** Nothing to subscribe to — the value flips once, at hydration. */
const subscribe = () => () => {};
const getSnapshot = () => true;
const getServerSnapshot = () => false;

/**
 * True once the component has hydrated on the client, false during SSR.
 *
 * Replaces the `useState(false)` + `useEffect(() => setMounted(true))` idiom,
 * which triggers a second render pass on every mount and is flagged by
 * react-hooks/set-state-in-effect.
 */
export function useMounted(): boolean {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

/**
 * Reads a sessionStorage flag. The server snapshot is always false, so the
 * locked state renders during SSR — the page keeps real prerendered HTML —
 * and the stored value swaps in at hydration without an effect.
 */
export function useSessionFlag(key: string, expected = "true"): boolean {
  const read = useCallback(() => {
    try {
      return sessionStorage.getItem(key) === expected;
    } catch {
      return false;
    }
  }, [key, expected]);

  return useSyncExternalStore(subscribe, read, getServerSnapshot);
}
