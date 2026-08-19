import { useQuery } from '@tanstack/react-query';
import { getProductsByPage } from '../../actions/products';

const useGetProducts = (page: number) => {
  const { data, error, isPending } = useQuery({
    queryFn: () => getProductsByPage(page),
    queryKey: ['productos', page],
    enabled: !!page,
  });

  return {
    data,
    error,
    isPending,
  };
};
export default useGetProducts;
