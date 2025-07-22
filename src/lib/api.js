import { axiosInstance } from "./axios"
export const getDataPageNumber=async(pageNumber)=>{
return await axiosInstance.get(`/${pageNumber}?fields=_id,code,product_name,brands,quantity,categories,ingredients_text,nutrition_grade_fr,image_url
&json=true`)
}

export const productDetails=async(barcode)=>
{
  return await axiosInstance.get(`/api/v0/product/${barcode}.json?fields=code,product_name,brands,ingredients_text,nutriments,image_url,labels_tags,allergens_tags,packaging_tags,ecoscore_grade,nova_group 
`)
}

export const searchData=async(search)=>{
return await axiosInstance.get("/cgi/search.pl", {
  params: {
    search_terms: search,
    fields: "_id,code,product_name,brands,quantity,categories,ingredients_text,nutrition_grade_fr,image_url",
    page_size: 20,
    json: true
  }
});


}

export const barcodeData=async(search)=>
{
 return await axiosInstance.get(`/api/v0/product/${search}.json`) 
}

export const sort=async(search)=>{
 return await axiosInstance.get("/cgi/search.pl", {
  params: {
    search_terms: search,
   fields: "_id,code,product_name,brands,quantity,categories,ingredients_text,nutrition_grade_fr,image_url",
    page_size: 100,
    json: true
  }
});
}


export const fetchDataByCategory=async(category)=>{
  console.log(category)
  return await axiosInstance.get(`/facets/categories/${category}.json&fields=code,product_name,brands,ingredients_text,nutriments,image_url,labels_tags,allergens_tags,packaging_tags,ecoscore_grade,nova_group 
`)
}