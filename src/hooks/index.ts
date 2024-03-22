import { useEffect, useState } from 'react';

/**
 * Custom hook for fetching and managing content from the back office.
 *
 * @template T - The type of the content.
 * @param {() => Promise<T | null>} callback - The callback function that actually fetches the content from Chillo back office.
 * @param {T} defaultValue - The default value for the content if the value cannot be fetched or the internet is not available.
 * @returns {T | undefined} - The fetched content or undefined if not available.
 */
function useContent<T>(
  callback: () => Promise<T | null>,
  defaultValue: T
): T | undefined {
  const [text, setText] = useState<T>();

  useEffect(() => {
    const getContent = async () => {
      const data = await callback();
      setText(data ?? defaultValue);
    };

    getContent();
  }, [callback, defaultValue]);

  return text;
}

export { useContent };
