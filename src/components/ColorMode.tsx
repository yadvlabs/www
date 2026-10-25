import {useState} from 'react';
import {Moon, Sun} from 'lucide-react';
import {useMediaQuery} from '@astryxdesign/core/hooks';
import {IconButton} from '@astryxdesign/core/IconButton';
import {Icon} from '@astryxdesign/core/Icon';

export type ColorMode = 'light' | 'dark';

/** Same key as the inline script in each page's index.html. */
const STORAGE_KEY = 'yadv-color-mode';

function readStoredMode(): ColorMode | null {
  try {
    const value = window.localStorage.getItem(STORAGE_KEY);
    return value === 'light' || value === 'dark' ? value : null;
  } catch {
    return null;
  }
}

function storeMode(mode: ColorMode) {
  try {
    window.localStorage.setItem(STORAGE_KEY, mode);
  } catch {
    // Private windows can refuse storage; the choice then lasts this visit.
  }
}

/**
 * The visitor's colour mode: their saved choice, or the system setting until
 * they pick one. Pass `mode` to <Theme>.
 */
export function useColorMode() {
  const [chosen, setChosen] = useState<ColorMode | null>(readStoredMode);
  const systemIsDark = useMediaQuery('(prefers-color-scheme: dark)');
  const resolved: ColorMode = chosen ?? (systemIsDark ? 'dark' : 'light');
  const toggle = () => {
    const next = resolved === 'dark' ? 'light' : 'dark';
    storeMode(next);
    setChosen(next);
  };
  return {mode: chosen ?? 'system', resolved, toggle} as const;
}

export function ColorModeToggle({
  resolved,
  onToggle,
}: {
  resolved: ColorMode;
  onToggle: () => void;
}) {
  const label =
    resolved === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';
  return (
    <IconButton
      label={label}
      tooltip={label}
      variant="ghost"
      icon={<Icon icon={resolved === 'dark' ? Sun : Moon} />}
      onClick={onToggle}
    />
  );
}
