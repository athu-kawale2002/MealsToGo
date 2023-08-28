import { mocks } from "./mock";
import camelize from "camelize";
export const restaurantsRequest = (location = "37.7749295,-122.4194155") => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("not found");
    }
    resolve(mock);
  });
};

const restaurantTransform = ({ results = [] }) => {
  const mappedResults = results.map((restaurant) => {
    return {
      ...restaurant,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARLY",
    };
  });
  return camelize(mappedResults);
};
restaurantsRequest()
  .then(restaurantTransform)
  .then((transformedRes) => {
    console.log(transformedRes);
  })
  .catch((err) => {
    console.log(err);
  });
