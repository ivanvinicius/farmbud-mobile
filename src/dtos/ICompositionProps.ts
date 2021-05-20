export interface IResponseComposition {
  id: string;
  size: string;
  price: string;
  recommendation: string;
  productivity: string;

  brand_id: string;
  brand_name: string;

  product_id: string;
  product_name: string;

  measure_id: string;
  measure_name: string;

  category_id: string;
  category_name: string;
  subcategory_id: string;
  subcategory_name: string;

  culture_id: string;
  culture_name: string;

  provider_id: string;
  provider_name: string;
}

export interface ICompositionProps
  extends Omit<IResponseComposition, 'size' | 'price' | 'recommendation'> {
  size: number;
  price: number;
  recommendation: number;

  formatted_size: string;
  formatted_price: string;
  formatted_recommendation: string;

  amount_usage: number;
  amount_quantity: number;
  amount_cost: number;

  formatted_amount_usage: string;
  formatted_amount_cost: string;
}
