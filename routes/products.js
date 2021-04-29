const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.send({
    status: 'success',
    message: 'Successfully fetched list of products',
    data: [
      {
        name: 'Oregano oil',
        price: '$10.00',
        description: `Grown organic and harvested locally, this powerehouse herb can be used to create salves, ointments, and used with carrier oils to treat ailments from strep throat to digestive issues.`,
        image:
          'https://www.google.com/search?q=oregano+oil+image&rlz=1C5CHFA_enUS944US944&sxsrf=ALeKk03-05nUDsiVI3arArp_m7Q2NsE1ug:1619729407098&tbm=isch&source=iu&ictx=1&fir=2fUQ7GN-jE8nKM%252CBdSqNgO4qyAGeM%252C_&vet=1&usg=AI4_-kR276aTxXSZCDrwCG1I3SWciDDPwA&sa=X&ved=2ahUKEwj8mcSfqqTwAhXNHc0KHYF3Aj0Q9QF6BAgQEAE#imgrc=2fUQ7GN-jE8nKM',
      },
      {
        name: 'Organic deodorent',
        price: '$19.99',
        description: `4 oz jar will last 4- 6 months even being used consistantly, so its like paying 5$ each month. This Deodorant is made by hand. I have had reports that it will last for days in the miserable heat with no access to a shower! Now, that is some darn good stuff!!! I personally use it everyday. It smells amazing!`,
        image: `https://jacquelyn07.wixsite.com/elderapothecary/product-page/organic-deodarant`,
      },
      {
        name: 'Anti-aging night serum',
        price: '$7.50',
        description: `This anti-aging night serum is a must for your nightly routine. We've made sure it won't clog your pores. As you sleep this silky serum absorbs into your skin helping your own natural collogen production. Pull your hair back, slather this on and watch how lovely your skin looks and feels in the morning.`,
        image: `https://jacquelyn07.wixsite.com/elderapothecary/product-page/anti-aging-night-serum`,
      },
    ],
  });
});

module.exports = router;
