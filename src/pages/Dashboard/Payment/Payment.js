import React, {useEffect} from 'react';
import './Payment.css'
const Payment=() => {
    //Title Change
 useEffect(() => {
        document.title="Payment";
    }, []);
    return (
        <div>
            <div className="container">
                <h1 className='owner text-center all-order-title'>CONFIRM YOUR PAYMENT</h1>
                <div className="row mt-5">
                    <div className="col-md-7">
                        <h4 className='d-inline me-3'>Owner</h4>
                        <input placeholder='Owner Name' className='form-control d-inline w-75' type="text"></input>
                    </div>
                    <div className="col-md-5">
                        <h4 className='d-inline me-3'>CVV</h4>
                        <input placeholder='cvv' className='form-control d-inline w-75' type="password"></input>
                    </div>
                    <div className="colmd-12 my-4">
                        <h4 className='d-inline me-5'>Card Number</h4>
                        <input placeholder='card number' className='form-control d-inline w-75' type="password"></input>
                    </div>
                    <div className="col-md-5">
                        <h4>Expire Date</h4>
                        <select name="months" id="months" class="form-select select fw-bold fs-4 w-50 my-3" aria-label="Default select example ">
                        <option selected>Month</option>
                        <option value="Jan">Jan</option>
                        <option value="Feb">Feb</option>
                        <option value="Mar">Mar</option>
                        <option value="Apr">Apr</option>
                        <option value="May">May</option>
                        <option value="Jun">Jun</option>
                        <option value="Jul">Jul</option>
                        <option value="Aug">Aug</option>
                        <option value="Sep">Sep</option>
                        <option value="Oct">Oct</option>
                        <option value="Nov">Nov</option>
                        <option value="Dec">Dec</option>
</select>
                        <select name="years" id="years" class="d-inline select fw-bold fs-4 form-select w-50 my-2" aria-label="Default select example">
                        <option  selected>Years</option>
                        <option value="2022">2020</option>
                        <option value="2023">2019</option>
                        <option value="2024">2018</option>
                        <option value="2025">2017</option>
                        <option value="2026">2016</option>
                        <option value="2027">2015</option>
</select>

                    </div>
                    <div className="col-md-7">
                <div class="d-flex mt-4">
                    <img className='img-fluid me-3' src="https://i.ibb.co/8bFFCMR/vi.png" alt="" width="150px"/>
                    <img  className='img-fluid me-3' src="https://i.ibb.co/syhH41d/mc.png" alt=""  width="150px"/>
                    <img className='img-fluid me-3' src="https://i.ibb.co/9qnLvGz/pp.png" alt=""  width="150px"/>
                </div>
                    </div>

<button className='button-84 w-25 mt-4 '>Confirm</button>
                </div>
            </div>

        </div>
    );
};

export default Payment;