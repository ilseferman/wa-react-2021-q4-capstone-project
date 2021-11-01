import { useState, useEffect } from 'react';
import { API_BASE_URL } from '../constants';
import { useLatestAPI } from './useLatestAPI';

export function useAPI(
  documentType,
  params = { pageSize: 10, page: 1, documentTags: [] }
) {
  const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();

  const [responseData, setResponseData] = useState(() => ({
    data: {},
    isLoading: true,
  }));

  let typeEncode = encodeURIComponent(
    `[[at(document.type, "${documentType}")]]`
  );

  let tagsEncode = encodeURIComponent(
    `[[at(document.tags, ${JSON.stringify(params.documentTags)})]]`
  );

  const URL_SEARCH =
    documentType === 'product-detail'
      ? `&q=[[:d+=+at(document.id,+"${params.id}")+]]`
      : `${documentType && '&q=' + typeEncode}` +
        `${params.documentTags ? '&q=' + tagsEncode : ''}` +
        `&lang=en-us&pageSize=${params.pageSize}` +
        `${params.page ? '&page=' + params.page : ''}`;

  useEffect(() => {
    if (!apiRef || isApiMetadataLoading) {
      return () => {};
    }

    const controller = new AbortController();

    async function callFetch() {
      try {
        setResponseData({ data: {}, isLoading: true });

        const URL = `${API_BASE_URL}/documents/search?ref=${apiRef}${URL_SEARCH}`;

        const response = await fetch(URL, {
          signal: controller.signal,
        });

        const data = await response.json();

        setResponseData({ data, isLoading: false });
      } catch (err) {
        setResponseData({ data: {}, isLoading: false });
        console.error(err);
      }
    }

    callFetch();

    return () => {
      controller.abort();
    };
  }, [apiRef, isApiMetadataLoading, URL_SEARCH]);

  return responseData;
}
