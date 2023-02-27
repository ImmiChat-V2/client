import { useMemo } from "react";
import { useLocation } from "react-router-dom";

function useQueryParam() {
  const { search } = useLocation();
  const params = useMemo(() => new URLSearchParams(search), [search]);

  return params;
}

export default useQueryParam;
