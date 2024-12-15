import { useDispatch, useSelector } from 'react-redux';
import { ProductDispatch, RootState } from './products-store';

export const useProductDispatch = useDispatch.withTypes<ProductDispatch>();
export const useProductSelector = useSelector.withTypes<RootState>();
