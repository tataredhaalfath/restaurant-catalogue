import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantApiSource {
  static async catalogue() {
    const response = await fetch(API_ENDPOINT.CATALOGUE);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailResto(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    // console.log(await response.json(), 'ok');
    return responseJson.restaurant;
  }

  static async addReview(options) {
    const response = await fetch(API_ENDPOINT.ADDREVIEW, options);
    return response;
  }
}

export default RestaurantApiSource;
