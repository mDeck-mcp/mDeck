import { useEffect, useRef } from "react";
import { useClientStore } from "../store/clientStore";
import { isTauriRuntime } from "../lib/runtime";

export function useClientDetection() {
  const detectAll = useClientStore((s) => s.detectAll);
  const ran = useRef(false);

  useEffect(() => {
    if (!isTauriRuntime()) return;
    if (ran.current) return;
    ran.current = true;
    detectAll();
  }, [detectAll]);
}
