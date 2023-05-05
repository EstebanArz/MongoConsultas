// use('sample_airbnb')
//1. Usando la colección listingsAndReviews de sample_airbnb, encuentre mediante el uso de agregaciones,
// cuál es la propiedad con mayor número de servicios ("amenities") de la colección.
// db.listingsAndReviews.aggregate([{
//   $addFields: {
//     numServicios: {$size:"$amenities"}
//   }
// },
// {
//   $sort: {
//     numServicios: -1
//   }
// },
// {
//   $limit: 1
// }])

// 2. Usando la colección listingsAndReviews de sample_airbnb, encuentre mediante el uso de agregaciones,
// el número de propiedades que tienen conexión a Internet, sea desde Wifi o desde cable (Ethernet).
//  Nota. Revise el campo amenities (“servicios”)
// db.listingsAndReviews.aggregate([{
//   $match: {
//     "amenities":{$in:["Wifi","Internet"]}
//   }
// }])

// 3. Usando la colección listingsAndReviews de sample_airbnb, encuentre mediante el uso de agregaciones,
//  todas las propiedades que hayan recibido 50 o más comentarios, que la valoración ("review_score_rating")
// sea mayor o igual a 80, que cuenten con conexión a Internet vía cable y que estén ubicadas en Brazil.
// db.listingsAndReviews.aggregate([{
//   $match: {
//     $and: [
//       { "number_of_reviews": { $gte: 50 } },
//       { "review_scores.review_scores_rating": { $gte: 80 } },
//       {"amenities":{$in:["Wifi","Internet"]}},
//       {"address.country":"Brazil"}
//     ]
//   }
// }])

//4. Usando la colección listingsAndReviews de sample_airbnb, muestre el costo promedio de una habitación en
// cada país para las propiedades de tipo casa.
// db.listingsAndReviews.aggregate([{
//   $match: {
//   property_type:"House"
// }},{
//   $group: {
//     _id: "$address.country",
//     precioPais: {
//       $avg: "$price"
//     }
//   }
// }])

{
  /* <iframe style="background: #F1F5F4;border: none;border-radius: 2px;box-shadow: 0 2px 10px 0 rgba(70, 76, 79, .2);width: 100vw;height: 100vh;"  src="https://charts.mongodb.com/charts-project-0-ywrbx/embed/dashboards?id=64557941-885f-4c07-8d65-e1fb``c7534a94&theme=light&autoRefresh=true&maxDataAge=3600&showTitleAndDesc=false&scalingWidth=fixed&scalingHeight=fixed"></iframe> */
}
