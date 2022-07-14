import { useState } from "react"
import "../../index.css"
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function From() {
  const [name, setName] = useState('');
  
  
  const checkList = ['JavaScript', 'Java', 'Python'];
  const [checked, setChecked] = useState([]);

  const [radio, setRadio] = useState('');

  const [user, setUser] = useState({
    name: '',
    phone: '',
    checked: [],
    radio: '',
  });

  const handleChangeName = (e) => {
    setName(e.target.value);
   
    
  };
  



  const handleCheck = (event) => {
    var updatedList = [...checked];
    
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
    // console.log(updatedList);
  };

  const handleRadio = (event) => {
    setRadio(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({
      name: name,
      
      checked: checked,
      radio: radio,
    });
    if(setName) {return  toast('🦄 cảm ơn đã điền thông tin  ', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      }); 
      
    }
   
  };
  
 
  return (
    <div className='from'>
      <h1>Form Get Info User</h1>
      <form onSubmit={handleSubmit} className="table">
        <div className="Name">
          <label >
            Name:
            <input className="name"
              type='text'
              onChange={(e) => handleChangeName(e)}
              required  
            />
          </label>
          


        </div>

        <div className="checkbox">
          <h3>Your gender</h3>
          <input
            type='radio'
            name='gender'
            value='Male'
            onChange={handleRadio}
          />
          <label htmlFor='html'>Male</label>
          <input
            type='radio'
            name='gender'
            value='Female'
            onChange={handleRadio}
          />
          <label htmlFor='css'>Female</label> {' '}
          <input
            type='radio'
            name='gender'
            value='Other'
            onChange={handleRadio}
          />
          <label htmlFor='javascript'>Other</label>
        </div>

        <div className="checklist">
          <h3>Languages:</h3>
          {checkList.map((item, index) => (
            <span key={index}>
              <input
                value={item}
                type='checkbox'
                onChange={handleCheck}
              />
              <span>{item}</span>
            </span>
          ))}
        </div>


        <input type='submit' value='Submit' className='submit' />
        <ToastContainer />
      </form>

<div className="print-data">
      <h3>
        Name: <span>{user.name}</span>
      </h3>
            
      <h3>
        Gender: <span>{user.radio}</span>
      </h3>


      <h3>Languages: </h3>

      {user.checked.map((value, index) => (
        <div className="print-dataa" key={index}>
          <p>{value}</p>
        </div>
      ))}
</div>
    </div>
  );
}

export default From;