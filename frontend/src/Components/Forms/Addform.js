import '../../Assests/Addform.css';
import { useState } from 'react';
import { addfurniture } from '../../Services/api';
function Addform() {
    const [addproducts, setaddproducts] = useState({
        name: "",
        pic: null,
        price: "",
        description: '',
        category: "",
    })
    const { name, pic, price, category, description } = addproducts;

    const handlechange = (e) => {
        setaddproducts({ ...addproducts, [e.target.name]: e.target.value })
    }

    const handleimage = (e) => {
        setaddproducts({ ...addproducts, [e.target.name]: e.target.files[0] })
    }

    const handlesubmit = async (e) => {
        e.preventDefault();
        try {
            const formdata = new FormData();
            formdata.append('name', name);
            formdata.append('category', category);
            formdata.append('price', price);
            formdata.append('description', description);
            formdata.append('pic', pic);


            await addfurniture(formdata);

            alert("data is saved");
        }
        catch (error) {
            console.log("error")
        }
    }
    return (

        <div className="addform" >
            <h2>Add Furniture</h2>
            <form action="#">
                <label for="name">Productname:</label>
                <input type="text" id="name" name="name" required
                    onChange={handlechange} />
                <br />
                <label htmlFor="category">Category:</label>
<select
  id="category"
  name="category"
  value={category}
  onChange={handlechange}
  required
>
  <option value="" disabled>Select a category</option>
  <option value="Beds">Beds</option>
  <option value="Chairs">Chairs</option>
  <option value="Sofas">Sofas</option>
  {/* Add more options as needed */}
</select>

                <br />
                <label for="price">Price:</label>
                <input type="number" id="price" name="price" required
                    onChange={handlechange} />

                <br />
                <label for="description">Description:</label>
                <input type="text" id="description" name="description" required
                    onChange={handlechange} />
                    <br />
                <label htmlFor="pic">Picture</label>
                <input
                    type="file"
                    className="form-control-file"
                    id="pic"
                    name="pic"
                    onChange={handleimage}
                    multiple
                    required
                />

                <br />
                <button type="submit" onClick={handlesubmit} style={{
      backgroundColor: '#008CBA',
      border: 'none',
      marginTop: '5px',
      width: '100%',
      padding: '10px',
    }}>Add</button>
            </form>
        </div>
    );
}
export default Addform;