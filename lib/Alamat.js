import mongoose,{Types} from 'mongoose';

const alamatSchema = new mongoose.Schema(
  {
    alamat: { type: String, required:true, unique:true }
  },
  {
    timestamps: true,
  }
);

const Alamat = mongoose.models.Alamat || mongoose.model('Alamat', alamatSchema);
export default Alamat;