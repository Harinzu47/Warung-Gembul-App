import API_ENDPOINT from '../global/api-endpoint';

class restaurantResource {
  static async getRestaurantList() {
    const response = await fetch(API_ENDPOINT.LIST);
    return response.json();
  }

  static async getRestaurantDetail(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }

  static async getRestaurantReview(data) {
    const response = await fetch(API_ENDPOINT.POST_REVIEW, {
      method: 'POST',
      headers: {
        'content-type': 'aplication/json',
      },
      body: JSON.stringify(data),
    });
    return response.json();
  }
}

export default restaurantResource;
