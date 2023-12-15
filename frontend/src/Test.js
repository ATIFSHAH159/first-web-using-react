import {sendmessageviaaxios} from './Services/api.js';
function Test(){


   async function handlemessage(){
        console.log("button clicked");
     await sendmessageviaaxios();
    }
    return(
        <div>

            <button onClick={handlemessage}>send message</button>
        </div>
    )
}
export default Test;