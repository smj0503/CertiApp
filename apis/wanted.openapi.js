import { wantedApi } from "@/apis/index";
const version = 'v2'

export const getJobPostings = async () => {
  return await wantedApi.get(`/${version}/jobs?category_tag=518&subcategory_tags=1027`);
};
