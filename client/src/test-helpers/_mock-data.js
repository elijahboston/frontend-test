export const mockTitle = 'Restaurants';
export const mockDescription = `Lorem ipsum dolor sit amet, consectetur adipiscing \
                    elit, sed do eiusmod tempor incididunt ut labore et \
                    dolore magna aliqua.`;

// Sample data from Yelp's GQL API
export const gridItemData = {
  "name": "Yardbird Southern Table & Bar",
  "alias": "yardbird-southern-table-and-bar-las-vegas",
  "photos": [
    "https://picsum.photos/300/300"
  ],
  "rating": 4.5,
  "price": "$$",
  "categories": [
    {
      "title": "Southern",
      "alias": "southern"
    },
    {
      "title": "American (New)",
      "alias": "newamerican"
    }
  ],
  "is_closed": false // eslint-disable-line camelcase
};