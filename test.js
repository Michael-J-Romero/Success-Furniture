const stripe = require('stripe')('sk_live_BnKM3aWMlT4rJD1hDMMrmRTl00xO6OMax8');
// order = stripe.Order.create(
//     currency='usd',
//     email='jenny.rosen@example.com',
//     items=[
//       {
//         'type':'sku',
//         'parent':'sku_GR5nD3so1sTXNa',
//         'quantity': 2,
//       },
//     ],
//     shipping={
//       'name':'Jenny Rosen',
//       'address':{
//         'line1':'1234 Main Street',
//         'city':'San Francisco',
//         'state':'CA',
//         'postal_code':'94111',
//         'country':'US',
//       },
//     },
//   )


  stripe.orders.create(
    {
      currency: 'usd',
      email: 'jenny.rosen@example.com',
      items: [
        {type: 'sku', parent: 'sku_GRLoBClfJ0DvJR'},
      ],
      shipping: {
        name: 'Jenny Rosen',
        address: {
          line1: '1234 Main Street',
          city: 'San Francisco',
          state: 'CA',
          country: 'US',
          postal_code: '94111',
        },
      },
    },
    function(err, order) {
        if(err){
            console.log(err)
        }
        createSession(order)
      //console.log(order)
    }
  );
//console.log(stripe)

function createSession({items}){
    (async () => {
        const session = await stripe.checkout.sessions.create({
          payment_method_types: ['card'],
          line_items: [{
            name: items[0].description,
            description: 'test description',
            amount: items[0].amount,
            currency: 'usd',
            quantity: 1,
          }],
          payment_intent_data: {
            capture_method: 'manual',
          },
          success_url: 'https://example.com/success',
          cancel_url: 'https://example.com/cancel',
        });
        console.log(session)
      })();
}