
import { useEffect } from 'react';

const useDocumentTitle = (title: string) => {
  console.log("App Name", import.meta.env.VITE_APP_NAME);
  useEffect(() => {
    document.title = `${import.meta.env.VITE_APP_NAME} - ${title}`;
  }, [title]);
};

export default useDocumentTitle;
