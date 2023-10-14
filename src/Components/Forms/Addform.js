import '../../Assests/Addform.css';
function Addform(){
    return(
        
        <div className="addform" >
        <h2>Add Furniture</h2>
        <form action="#">
            <label for="name">Productname:</label>
            <input type="text" id="name" name="name" required />
            <br />
            <label for="name">Product-id:</label>
            <input type="text" id="name" name="name" required />
            <br />
            <label for="price">Price:</label>
            <input type="number" id="price" name="price" required />
            <br/>
            <label for="description">Description:</label>
            <textarea id="description" name="description" required></textarea>
             
            
            <br />
            <label for="exampleFormControlFile1">Picture</label>
            <input type="file" class="form-control-file" id="exampleFormControlFile1"/>
            <br />
            <button type="submit">Add</button>
        </form>
    </div>
    );
}
export default Addform;