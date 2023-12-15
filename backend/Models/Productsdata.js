import mongoose from 'mongoose';

const furniturestructure = new mongoose.Schema({
    category: String,
    name: String,
    price:Number,
    description: String,
    pic: {type: String}
   
});

const furniturestructureModel = mongoose.model("furniture", furniturestructure);
export default furniturestructureModel;