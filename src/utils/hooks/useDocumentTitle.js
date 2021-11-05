import { useEffect, useCallback } from 'react';
import { useAppContext } from '../context';
function useDocumentTitle(title){
  const {appContext, setAppContext} = useAppContext();
  const updateTitle = useCallback(
    () => {
      setAppContext((prev)=> {
        return {...prev, title}
      });
    },
    [setAppContext, title],
  )
  useEffect(() => {    
    updateTitle();
    document.title = appContext.title; 
  }, [updateTitle, appContext.title])
}

export default useDocumentTitle;