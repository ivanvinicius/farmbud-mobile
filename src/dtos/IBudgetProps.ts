export interface IReponseBudget {
  provider_id: string;
  provider_name: string;
  season_id: string;
  season_name: string;
  season_description: string;
  season_start_at: string;
  season_end_at: string;
  area_id: string;
  area_name: string;
  area_description: string;
  area_size: string;
  culture_id: string;
  culture_name: string;
  productivity: string;
  amount_cost: string;
}

export interface IBudgetProps extends IReponseBudget {
  id: string;
  formatted_productivity: string;
}
