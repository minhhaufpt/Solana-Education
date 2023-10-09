import sdk from "../../helpers/candypay";
import { ItemData } from "../../model/item";
import type { NextApiHandler } from "next";

const handler: NextApiHandler = async (req, res) => {
  try {
    const data: ItemData[] = await req.body;
    const processedItems: ItemData[] = []; 
    for (const itemData of data) {
      const item: ItemData = {
        name: itemData.name,
        price: itemData.price,     // price in USD
        image: itemData.image,
        quantity: itemData.quantity,
        size: itemData.size, // optional product size parameter
      };
    processedItems.push(item);
    }
    const response = await sdk.session.create({
      success_url: `${process.env.STATIC_URL}/payment/success`,
      cancel_url: `${process.env.STATIC_URL}/payment/cancel`,
      // additional SPL tokens, SOL and USDC are the supported tokens by default
      tokens: ["dust", "samo"],
      items: processedItems,
      shipping_fees: 0.1,
    });

    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: "Error creating session",
    });
  }
};

export default handler;
