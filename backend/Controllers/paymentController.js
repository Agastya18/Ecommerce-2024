import stripe from 'stripe';

 const stripeInstance = stripe(process.env.STRIPE_SECRET)

       export const createPaymentIntent = async (req,res)=>{
          
              const {amount} = req.body;
              if(!amount){
                    return res.status(400).json({error:"Amount is required"})
              }

              try {
                const paymentIntent = await stripeInstance.paymentIntents.create({
                    amount : Number(amount)*100,
                    currency:"inr",
                    // payment_method_types:["card"],
                    // metadata:{integration_check:"accept_a_payment"},
                });
                // res.json({clientSecret:paymentIntent.client_secret})
                res.status(201).json({success:true ,clientSecret:paymentIntent.client_secret});
                
              } catch (error) {
                console.log(error)
              }
            


            //   const lineItems = products.cartItems.map((product)=>({
            //       price_data:{
            //           currency:"inr",
            //           product_data:{
            //               name:product.name,
            //               images:[product.images[0]]
            //           },
            //           unit_amount:product.price*100,
            //       },
            //       quantity:product.qty
            //   }));

            
          


            //   const session = await stripeInstance.checkout.sessions.create({
                
                
            //       line_items:lineItems,
            //       mode:"payment",
            //       success_url:"http://localhost:5173/success",
            //       cancel_url:"http://localhost:5173/cancel",
            //   });
            //  // console.log(session)
            //  //    4000003560000008

            //  // console.log("payment int-------",session)
            //   res.json({id:session.id,status:session.status, payment_status:session.payment_status,})
          

       }





 export const t=(req,res)=>{
        res.send("payment")
 }