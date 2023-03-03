import geometryBoxPic from '../../public/geometry-box.webp'
import monarchBoxPic from '../../public/monarch-box.webp'
import powerNapBoxPic from '../../public/powernap-box.webp'
import southernWeatherBoxPic from '../../public/southernweather-box.webp'
import tropicalWeatherBoxPic from '../../public/tropicalweather-box.webp'

import { IProduct } from "@components/components/Product"

export const products: IProduct[] = [
  {
    id: 'geometry',
    name: 'Geometry',
    price: 18.50,
    image: geometryBoxPic,
    description: `Geometry has been defined as "describing spaces that lie beyond the normal range of human experience." Soon it will also be defined as "that coffee from Onyx that I am in love with and completely redefined my relationship with coffee." It's our answer for everything and has two of our favorite coffees—a washed processed Ethiopian & Colombian. This blend has become one of our favorite coffees. We love it as a filter coffee, and we love it as espresso. And not only does is it taste great as either but it's easy to dial in as espresso or filter.`,
    url: 'api/products/geometry'
  },
  {
    id: 'monarch',
    name: 'Monarch',
    price: 18.00,
    image: monarchBoxPic,
    description: `Monarch is our most developed roast that conveys a flavor profile that we intentionally designed to work well with milk. Cream and plant based beverages mix with ease, creating a rich, decadent flavor. It involves a natural, sugar-dense coffee that binds to the fats and creates multiple complex caramelized notes during the roasting process. Look for dark chocolate and undertones of thick winey berries. Enjoy as drip or espresso.`,
    url: 'api/products/monarch'
  },
  {
    id: 'tropicalweather',
    name: 'Tropical Weather',
    price: 21.00,
    image: tropicalWeatherBoxPic,
    description: `Tropical Weather is a seasonal blend that celebrates coffees from our favorite coffee producing country: Ethiopia. We take a fresh washed offering that provides delicate florals and juicy texture, and incorporate a natural processed coffee that promotes pungent fruits and natural sugars. The result is indeed better than the sum of its parts. If you miss the long days of summer then Tropical Weather is your cup of sunshine. With a floral aroma, notes of berries and plum, along with the tannins and sweetness of sweet tea, you'll be leaving the house wearing shorts all year long.`,
    url: 'api/products/tropicalweather'
  },
  {
    id: 'powernap',
    name: 'Power Nap',
    price: 21.00,
    image: powerNapBoxPic,
    description: `OK, so you need a quick burst of energy, but your bedtime is in three hours. You, my friend, need a POWER NAP. You already love our floral washed Worka from Ethiopia. Well, we blended it with a natural sugar cane process Colombia creating Power Nap. We created this "half-caf" blend just for you, a pre-roast blend of 50% of our beloved Ethiopia Worka and 50% of our Decaf Colombia Huila. The resulting cup is silky sweet and reminiscent of ripe peach and cocoa, with a sweet finish of brown sugar. It's so tasty; you might just have two cups and stay up past your bedtime...`,
    url: 'api/products/powernap'
  },
  {
    id: 'southerweather',
    name: 'Southern Weather',
    price: 17.50,
    image: southernWeatherBoxPic,
    description: `Southern Weather embodies everything we love about specialty coffee and has evolved into a foundational blend. We brew this in our own cafes as a “House” filter option and love how it balances the relationship between modern citric acidity flavors with full bodied chocolates. This comfortable, yet surprisingly complex and sophisticated coffee is approachable to all. It performs well on its own for the purist or with fats such as dairy or plant based beverages, making it a true answer for all coffee needs.`,
    url: 'api/products/southernweather'
  },
]