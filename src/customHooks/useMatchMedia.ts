import React, { FunctionComponent, useEffect, useState } from 'react';

interface ICaptureProps {
  mediaQuery?: any;
  initialValue?: any;
}

const useMatchMedia: FunctionComponent<ICaptureProps> = ({ mediaQuery, initialValue }) => {
  const [isMatching, setIsMatching] = useState(initialValue);
  useEffect(() => {
    const watcher = window.matchMedia(mediaQuery);
    setIsMatching(watcher.matches);
    const listener = (matches: { matches: any }) => {
      setIsMatching(matches.matches);
    };
    if (watcher.addEventListener) {
      watcher.addEventListener('change', listener);
    } else {
      watcher.addListener(listener);
    }
    return () => {
      if (watcher.removeEventListener) {
        return watcher.removeEventListener('change', listener);
      } else {
        return watcher.removeListener(listener);
      }
    };
  }, [mediaQuery]);

  return isMatching;
};

export default React.memo(useMatchMedia);
